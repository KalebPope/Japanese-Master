using JapaneseMasterAPI.Exceptions;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace JapaneseMasterAPI.Middlewares
{
    public class ErrorHandler
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ErrorHandler> _logger;

        public ErrorHandler(RequestDelegate next, ILogger<ErrorHandler> logger)
        {
            _logger = logger;
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception e)
            {
                _logger.LogError(e, e.Message);

                ProblemDetails problem;

                if (e is BadHttpRequestException)
                {
                    context.Response.StatusCode = StatusCodes.Status400BadRequest;
                    problem = new ProblemDetails
                    {
                        Status = context.Response.StatusCode,
                        Title = "Bad Request Error",
                        Detail = "A bad request error has occured"
                    };
                } else
                {
                    context.Response.StatusCode = StatusCodes.Status500InternalServerError;

                    problem = new ProblemDetails
                    {
                        Status = context.Response.StatusCode,
                        Title = "Internal Server Error",
                        Detail = "An internal server error has occured"
                    };
                }

                await context.Response.WriteAsJsonAsync(problem);
            }
        }
    }
}
