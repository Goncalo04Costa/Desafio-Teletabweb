import { useQuery } from '@tanstack/react-query';
import { fetchSubscriptions } from '../api/subscriptions';

export const subscriptionsQueryKey = ['subscriptions'];

export const useSubscriptions = () =>
  useQuery({
    queryKey: subscriptionsQueryKey,
    queryFn: fetchSubscriptions
  });
