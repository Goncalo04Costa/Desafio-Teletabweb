const API_URL = "https://localhost:5001/api";

export async function getSubscriptions() {
  const response = await fetch(`${API_URL}/subscriptions`);
  return response.json();
}



export async function doSubscriptions(data: any) {
  const response = await fetch(`${API_URL}/subscription/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.statusText}`);
  }

  return response.json();
}
