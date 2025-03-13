using JapaneseMasterAPI.Entities;
using JapaneseMasterAPI.Models;
using Microsoft.AspNetCore.Identity;
using JapaneseMasterAPI.Services;
using JapaneseMasterAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace JapaneseMasterAPI.Endpoints
{
    public static class AuthEndpoints

    {
        public static void MapAuthEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapPost("api/auth/signup", Signup);

            app.MapPost("api/auth/login", Login);
            
        }

        private static async Task<IResult> Signup(JMDbContext context,  UserDto request)

        {
            if (await context.Users.AnyAsync(u => u.Username == request.Username))
            {
                return Results.BadRequest("Username already exists");
            }

            var user = new User();
            var hashedPassword = new PasswordHasher<User>().HashPassword(user, request.Password);

            user.Username = request.Username;
            user.PasswordHash = hashedPassword;

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return Results.Ok(user);
        }

        private static async Task<IResult> Login(JMDbContext context, UserDto request, TokenService tokenService)
        {
            var user = await context.Users.FirstOrDefaultAsync(u => u.Username == request.Username);
            if (user == null)
            {
                return Results.BadRequest("User not found");
            }

            var verifyHash = new PasswordHasher<User>().VerifyHashedPassword(user, user.PasswordHash, request.Password);

            if (verifyHash == PasswordVerificationResult.Failed)
            {
                return Results.BadRequest("Password is incorrect");
            }

            string token = tokenService.CreateToken(user);

            return Results.Ok(token);
        }


    }
}
