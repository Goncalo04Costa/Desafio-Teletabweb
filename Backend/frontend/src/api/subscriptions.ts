import http from './http';

export interface Subscription {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
}

export interface CheckoutPayload {
  fullName: string;
  email: string;
  company?: string;
  subscriptionId: string;
}

export const fetchSubscriptions = () =>
  http.get<Subscription[]>('/api/subscriptions').then((r: { data: any; }) => r.data);

export const submitCheckout = (payload: CheckoutPayload) =>
  http.post('/api/subscription/checkout', payload);
