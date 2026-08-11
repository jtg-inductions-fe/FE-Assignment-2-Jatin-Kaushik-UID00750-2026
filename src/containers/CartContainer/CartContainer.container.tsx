import { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartItemsList } from '@components/CartItemsList';
import { OrderSummary } from '@components/OrderSummary';
import { ROUTES } from '@constant';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { selectCartTotals } from '@store/selectors/cartSelector';
import { clearCart, updateQuantity } from '@store/slices/cartSlice';
import { fetchMenuItemById } from '@store/thunks/menuThunk';

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
            return;
        }

        /** Validates stock availability for cart items */
        const validateStockAsync = async () => {
            try {
                // Fetch stock details for all cart items
                const fetchPromises = cartItems.map((cartItem) =>
                    dispatch(fetchMenuItemById(cartItem.menuItemId))
                        .unwrap()
                        .then((item) => ({ cartItem, item })),
                );

                const results = await Promise.all(fetchPromises);

                // Evaluate stock sequentially after all data arrives
                for (const { cartItem, item } of results) {
                    if (!item) {
                        toast({
                            message: `${cartItem.name} is no longer available. Removed from cart.`,
                            type: 'error',
                        });
                        dispatch(
                            updateQuantity({
                                menuItemId: cartItem.menuItemId,
                                quantity: 0,
                            }),
                        );
                    } else if (item.stock === 0) {
                        toast({
                            message: `${cartItem.name} is out of stock. Removed from cart.`,
                            type: 'error',
                        });
                        dispatch(
                            updateQuantity({
                                menuItemId: cartItem.menuItemId,
                                quantity: 0,
                            }),
                        );
                    } else if (cartItem.quantity > item.stock) {
                        toast({
                            message: `Only ${item.stock} units of ${cartItem.name} are available. Updated your cart.`,
                            type: 'error',
                        });
                        dispatch(
                            updateQuantity({
                                menuItemId: cartItem.menuItemId,
                                quantity: item.stock,
                            }),
                        );
                    }
                }
            } catch {
                toast({
                    message: 'Unexpected error occurred while checking stock.',
                    type: 'error',
                });
                void navigate('/');
            }
        };

        void validateStockAsync();
    }, [cartItems, navigate, toast, dispatch]);

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
