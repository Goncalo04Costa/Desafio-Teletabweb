namespace PricingApi.Models;

public record Subscription(
    string Id,
    string Name,
    decimal Price,
    string Currency,
    string Description,
    List<string> Features);
