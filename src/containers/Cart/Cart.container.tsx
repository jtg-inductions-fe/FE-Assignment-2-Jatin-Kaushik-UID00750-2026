import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartItemsList } from '@components/CartItemsList';
import { OrderSummary } from '@components/OrderSummary';
import { ORDER_STATUS, ROUTES, USER_ROLES } from '@constant';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { selectCartTotals } from '@store/selectors/cartSelector';
import { clearCart, updateQuantity } from '@store/slices/cartSlice';
import { fetchMenuItemById } from '@store/thunks/menuThunk';
import { createOrder } from '@store/thunks/ordersThunk';
import { Order, OrderItem } from '@types';

import { StyledCartContainer } from './Cart.styles';

/** Container component for managing and displaying the shopping cart. */
export const Cart = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const dispatch = useAppDispatch();

    // 1. Destructure state properties needed to construct a valid Order object
    const { cartItems, restaurantId, restaurantName } = useAppSelector(
        (state) => state.cart,
    );
    const { currentUser } = useAppSelector((state) => state.auth);
    const totals = useAppSelector(selectCartTotals);

    const [submitting, setSubmitting] = useState(false);

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
        if (isCheckingOut.current) {
            return;
        }
        // Enforce validations before processing order data
        if (!currentUser || currentUser?.role !== USER_ROLES.CUSTOMER) {
            return;
        }

        if (!restaurantId || !restaurantName) {
            toast({
                message: 'Invalid vendor context detected.',
                type: 'error',
            });
            return;
        }

        isCheckingOut.current = true;
        setSubmitting(true);

        const mappedItems: OrderItem[] = cartItems.map((item) => ({
            menuItemId: item.menuItemId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
        }));

        if (!currentUser?.address) return;

        const orderPayload: Omit<Order, 'id'> = {
            customerId: currentUser.id,
            customerName: currentUser.name,
            restaurantId,
            restaurantName,
            items: mappedItems,
            subtotal: totals.subtotal,
            bookingFee: totals.bookingFee,
            total: totals.total,
            status: ORDER_STATUS.PENDING,
            deliveryAddress: currentUser.address,
            placedAt: new Date().toISOString(),
            statusHistory: [
                {
                    status: ORDER_STATUS.PENDING,
                    timestamp: new Date().toISOString(),
                },
            ],
        };

        try {
            await dispatch(createOrder(orderPayload)).unwrap();

            toast({
                message: 'Order Placed! Thank you for your purchase.',
                type: 'success',
            });

            dispatch(clearCart());
            void navigate(ROUTES.ORDERS);
        } catch {
            isCheckingOut.current = false;
            toast({
                message: 'Failed to place order. Please try again.',
                type: 'error',
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <StyledCartContainer>
            <CartItemsList
                items={cartItems}
                onQuantityChange={onQuantityChange}
            />
            <OrderSummary
                totals={totals}
                onCheckout={() => !submitting && void handleCheckout()}
            />
        </StyledCartContainer>
    );
};
