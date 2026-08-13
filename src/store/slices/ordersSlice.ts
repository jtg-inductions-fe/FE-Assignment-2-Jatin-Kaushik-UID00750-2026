import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    createOrder,
    fetchMyOrders,
    fetchOrderById,
    fetchOrdersByRestaurantId,
    updateOrder,
} from '@store/thunks/ordersThunk';
import { Order, OrdersState } from '@types';

const initialState: OrdersState = {
    items: [],
    selectedOrder: null,
    status: 'idle',
    error: null,
};

/**
 * Redux slice handling global UI overlay states like toasts.
 */

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Order By ID
            .addCase(fetchOrderById.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                fetchOrderById.fulfilled,
                (state, action: PayloadAction<Order | null>) => {
                    state.status = 'succeeded';
                    state.selectedOrder = action.payload;
                },
            )
            .addCase(fetchOrderById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Fetch Orders By Restaurant ID
            .addCase(fetchOrdersByRestaurantId.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                fetchOrdersByRestaurantId.fulfilled,
                (state, action: PayloadAction<Order[]>) => {
                    state.status = 'succeeded';
                    state.items = action.payload;
                },
            )
            .addCase(fetchOrdersByRestaurantId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Fetch My Orders
            .addCase(fetchMyOrders.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                fetchMyOrders.fulfilled,
                (state, action: PayloadAction<Order[]>) => {
                    state.status = 'succeeded';
                    state.items = action.payload;
                },
            )
            .addCase(fetchMyOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Create Order
            .addCase(createOrder.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                createOrder.fulfilled,
                (state, action: PayloadAction<Order>) => {
                    state.status = 'succeeded';
                    state.items.push(action.payload);
                },
            )
            .addCase(createOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            })

            // Update Order
            .addCase(updateOrder.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                updateOrder.fulfilled,
                (state, action: PayloadAction<Order>) => {
                    state.status = 'succeeded';
                    const index = state.items.findIndex(
                        (order) => order.id === action.payload.id,
                    );
                    if (index !== -1) state.items[index] = action.payload;
                },
            )
            .addCase(updateOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'An unknown error occurred';
            });
    },
});

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
