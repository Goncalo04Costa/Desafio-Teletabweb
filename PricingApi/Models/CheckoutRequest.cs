using System.ComponentModel.DataAnnotations;

namespace PricingApi.Models;

public record CheckoutRequest
{
    [Required] public string FirstName { get; init; } = default!;
    [Required] public string LastName { get; init; } = default!;
    [Required] public string Location { get; init; } = default!;
    [Required] public string PhoneNumber { get; init; } = default!;
    [Required, EmailAddress] public string Email { get; init; } = default!;
    public string? Company { get; init; }
    public string? AboutMe { get; init; }
    public string SubscriptionId { get; init; } = default!;
}
