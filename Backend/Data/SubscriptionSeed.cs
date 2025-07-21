using PricingApi.Models;

namespace PricingApi.Data;

/// <summary>
/// In‑memory “database”.
/// </summary>
public static class SubscriptionSeed
{
    public static readonly List<Subscription> Subscriptions =
    [
        new Subscription(
            "starter",
            "Starter",
            0,
            "€",
            "Perfect for individuals getting started.",
            ["1 project", "Community support"]
        ),
        new Subscription(
            "pro",
            "Pro",
            29,
            "€",
            "Designed for growing teams.",
            ["Unlimited projects", "Priority support", "Custom domains"]
        ),
        new Subscription(
            "enterprise",
            "Enterprise",
            99,
            "€",
            "Advanced features and dedicated support.",
            ["Dedicated CSM", "SLA 99.9 %", "SSO/SAML"]
        )
    ];
}
