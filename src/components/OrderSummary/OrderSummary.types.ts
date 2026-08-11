import { CartTotals } from '@types';

/** Props for the OrderSummary component. */
export interface OrderSummaryProps {
    totals: CartTotals;
    onCheckout: () => void;
    isSubmitting?: boolean;
}
