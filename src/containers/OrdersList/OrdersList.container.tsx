import { useEffect } from 'react';

import { EmptyListIndicator } from '@components/EmptyListIndicator';
import { FullScreenLoader } from '@components/FullScreenLoader';
import { CustomerOrderCard, OwnerOrderCard } from '@components/OrderCard';
import { ORDER_STATUS, USER_ROLES } from '@constant';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { selectOrdersLatestFirst } from '@store/selectors/ordersSelector';
import {
    fetchMyOrders,
    fetchOrdersByRestaurantId,
    updateOrder,
} from '@store/thunks';
import { Order, OrderStatus } from '@types';

import { ListContainer } from './OrdersList.styles';

export const OrdersList = () => {
    const dispatch = useAppDispatch();
    const toast = useToast();

    const { items: orders, status } = useAppSelector((state) => state.orders);
    const { currentUser } = useAppSelector((state) => state.auth);
    const sortedOrders = useAppSelector(selectOrdersLatestFirst);

    useEffect(() => {
        if (!currentUser) return;
        if (currentUser?.role === USER_ROLES.OWNER) {
            const restaurantId = currentUser.restaurantIds;
            void dispatch(fetchOrdersByRestaurantId(restaurantId));
        } else {
            void dispatch(fetchMyOrders(currentUser.id));
        }
    }, [dispatch, currentUser]);

    const handleUpdateOrderStatus = async (
        orderId: string,
        nextStatus: OrderStatus,
        reason?: string,
    ) => {
        const targetOrder = orders.find((o) => o.id === orderId);
        if (!targetOrder) return;

        const updatedPayload: Order = {
            ...targetOrder,
            status: nextStatus,
            rejectionReason:
                nextStatus === ORDER_STATUS.REJECTED ? reason : undefined,
            statusHistory: [
                ...targetOrder.statusHistory,
                {
                    status: nextStatus,
                    timestamp: new Date().toISOString(),
                },
            ],
        };

        try {
            await dispatch(updateOrder(updatedPayload)).unwrap();
        } catch {
            toast({
                message: 'Failed to change order status',
                type: 'error',
            });
        }
    };

    if (status === 'loading' && orders.length === 0) {
        return <FullScreenLoader message="loading orders..." />;
    }

    if (status === 'failed' && orders.length === 0) {
        return (
            <EmptyListIndicator
                title="Could not load orders"
                description="Please try again."
            />
        );
    }

    return (
        <ListContainer>
            {orders.length === 0 ? (
                <EmptyListIndicator
                    title="No orders found"
                    description="You have no orders"
                />
            ) : (
                sortedOrders.map((order) =>
                    currentUser?.role === USER_ROLES.OWNER ? (
                        <OwnerOrderCard
                            key={order.id}
                            order={order}
                            onUpdateStatus={handleUpdateOrderStatus}
                        />
                    ) : (
                        <CustomerOrderCard key={order.id} order={order} />
                    ),
                )
            )}
        </ListContainer>
    );
};
