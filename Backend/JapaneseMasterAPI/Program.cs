using JapaneseMasterAPI.Endpoints;
using Scalar.AspNetCore;
using JapaneseMasterAPI.Services;
using dotenv.net;
using JapaneseMasterAPI.Data;
using Microsoft.EntityFrameworkCore;
using JapaneseMasterAPI.Middlewares;

var builder = WebApplication.CreateBuilder(args);

DotEnv.Load();

builder.Services.AddOpenApi();

builder.Services.AddScoped<TokenService>();

builder.Services.AddDbContext<JMDbContext>(options => 
options.UseSqlServer(Environment.GetEnvironmentVariable("DATABASE_CONNECTION_STRING")));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    app.MapScalarApiReference();
}


app.UseHttpsRedirection();

app.UseMiddleware<ErrorHandler>();

app.MapAuthEndpoints();

app.Run();
