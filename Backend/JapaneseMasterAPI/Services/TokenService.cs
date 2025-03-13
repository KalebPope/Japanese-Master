using Microsoft.IdentityModel.Tokens;
using JapaneseMasterAPI.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using dotenv.net;

namespace JapaneseMasterAPI.Services
{
    public class TokenService(IConfiguration configuration)

    {
        public string CreateToken(User user)
        {

            var secretKey = Environment.GetEnvironmentVariable("JWT_SECRET_KEY"); 

            if (string.IsNullOrEmpty(secretKey))
            {
                throw new InvalidOperationException("JW_SECRET_KEY is missing, make sure it is set in a .env file");
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new JwtSecurityToken(
                issuer: configuration.GetValue<string>("AppSettings:Issuer"),
                audience: configuration.GetValue<string>("AppSettings:Audience"),
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: creds);


            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }
    }
}
