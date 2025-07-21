using System.Net.Mime;
using Microsoft.AspNetCore.Http.HttpResults;
using PricingApi.Data;
using PricingApi.Models;
using Microsoft.AspNetCore;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(opts =>
{
    opts.AddPolicy("frontend", p =>
        p.WithOrigins("*")
         .AllowAnyHeader()
         .AllowAnyMethod());
});

var app = builder.Build();
app.UseCors("frontend");
app.UseHttpsRedirection();
app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Pricing API v1"));

// -------- Endpoints --------

// GET /api/subscriptions
app.MapGet("/api/subscriptions", () => Results.Ok(SubscriptionSeed.Subscriptions))
   .WithName("GetSubscriptions")
   .WithTags("Subscriptions")
   .Produces<List<Subscription>>(StatusCodes.Status200OK);

// POST /api/subscription/checkout
app.MapPost("/api/subscription/checkout",
    (CheckoutRequest request) =>
    {
        Console.WriteLine(
            $"[Checkout] {request.FirstName} chose {request.SubscriptionId} ({request.Email})");

        return Results.Created(
            $"/api/subscription/checkout/{Guid.NewGuid()}",
            new { message = "Subscription received" });
    })
   .WithName("PostCheckout")
   .WithTags("Subscriptions")
   .Accepts<CheckoutRequest>(MediaTypeNames.Application.Json)
   .Produces(StatusCodes.Status201Created)
   .ProducesValidationProblem();

app.Run();
