import { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartItemsList } from '@components/CartItemsList';
import { OrderSummary } from '@components/OrderSummary';
import { ROUTES } from '@constant';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { selectCartTotals } from '@store/selectors/cartSelector';
import { clearCart, updateQuantity } from '@store/slices/cartSlice';

import { StyledCartContainer } from './CartContainer.styles';

/** Container component for managing and displaying the shopping cart. */
export const CartContainer = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const dispatch = useAppDispatch();

    const { cartItems } = useAppSelector((state) => state.cart);
    const totals = useAppSelector(selectCartTotals);

    const onQuantityChange = (menuItemId: string, newQuantity: number) => {
        dispatch(updateQuantity({ menuItemId, quantity: newQuantity }));
    };

    const isCheckingOut = useRef(false);

    useEffect(() => {
        if (isCheckingOut.current) return;

        if (cartItems.length === 0) {
            toast({
                message: 'Your cart is empty.',
                type: 'info',
            });
            void navigate('/');
        }
    }, [cartItems, navigate, toast]);

    /** Handles the checkout process. */
    const handleCheckout = async () => {
        isCheckingOut.current = true;

        toast({
            message: 'Order Placed! Thank you for your purchase.',
            type: 'success',
        });

        dispatch(clearCart());
        await navigate(ROUTES.ORDERS);
    };

    return (
        <StyledCartContainer>
            <CartItemsList
                items={cartItems}
                onQuantityChange={onQuantityChange}
            />
            <OrderSummary
                totals={totals}
                onCheckout={() => void handleCheckout()}
            />
        </StyledCartContainer>
    );
};
