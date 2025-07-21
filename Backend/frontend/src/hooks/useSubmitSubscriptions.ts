import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  submitCheckout,
  CheckoutPayload
} from '../api/subscriptions';
import { subscriptionsQueryKey } from './useSubscriptions';

export const useSubmitSubscription = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: CheckoutPayload) => submitCheckout(payload),
    onSuccess: () => {
      // Invalidate or refetch anything that changed
      qc.invalidateQueries({ queryKey: subscriptionsQueryKey });
    }
  });
};
