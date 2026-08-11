import Typography from '@mui/material/Typography';

import {
    CheckoutButton,
    Row,
    SummaryContainer,
    TotalDivider,
} from './OrderSummary.styles';
import { OrderSummaryProps } from './OrderSummary.types';

/**
 * OrderSummary component displays a summary of the order including item total, booking fee, and total amount to pay.
 */
export const OrderSummary = ({
    totals,
    onCheckout,
    isSubmitting = false,
}: OrderSummaryProps) => {
    const { subtotal, bookingFee, total, itemCount } = totals;

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);

    return (
        <SummaryContainer>
            <Typography variant="h6">Order Summary</Typography>

            <SummaryContainer>
                <Row>
                    <Typography variant="body2" color="text.secondary">
                        Item Total ({itemCount}{' '}
                        {itemCount === 1 ? 'item' : 'items'})
                    </Typography>
                    <Typography variant="body2">
                        {formatCurrency(subtotal)}
                    </Typography>
                </Row>

                <Row>
                    <Typography variant="body2" color="text.secondary">
                        Booking Fee
                    </Typography>
                    <Typography variant="body2">
                        {bookingFee > 0 ? formatCurrency(bookingFee) : 'FREE'}
                    </Typography>
                </Row>

                <TotalDivider />

                <Row>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="text.primary"
                    >
                        To Pay
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="primary.main"
                    >
                        {formatCurrency(total)}
                    </Typography>
                </Row>
            </SummaryContainer>

            <CheckoutButton
                variant="contained"
                color="primary"
                fullWidth
                onClick={onCheckout}
                disabled={isSubmitting || itemCount === 0}
            >
                {isSubmitting ? 'Processing...' : 'Proceed to Checkout'}
            </CheckoutButton>
        </SummaryContainer>
    );
};
