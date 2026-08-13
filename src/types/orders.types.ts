import { ORDER_STATUS } from '@constant';

import {
    Address,
    AsyncStatus,
    ISODateString,
    OrderStatus,
} from './common.types';

/** Represents the specific item in the Order */
export interface OrderItem {
    menuItemId: string;
    name: string;
    price: number;
    quantity: number;
}

/** Represents the order status with timestamp events */
export interface OrderStatusEvent {
    status: OrderStatus;
    timestamp: ISODateString;
}

/** Represents the order with key details */
export interface Order {
    id: string;
    customerId: string;
    customerName: string;
    restaurantId: string;
    restaurantName: string;
    items: OrderItem[];
    subtotal: number;
    bookingFee: number;
    total: number;
    status: OrderStatus;
    deliveryAddress: Address;
    placedAt: ISODateString;
    /** For both the customer read-only stepper and the owner's current-stage display */
    statusHistory: OrderStatusEvent[];
    rejectionReason?: string;
}

/** Global state structure for managing orders data. */
export interface OrdersState {
    items: Order[];
    selectedOrder: Order | null;
    status: AsyncStatus;
    error: string | null;
}

/** Ordered list of the status path — used to render the customer stepper and to compute the owner's "next" action. */
export const ORDER_STATUS_FLOW: OrderStatus[] = [
    ORDER_STATUS.PENDING,
    ORDER_STATUS.ACCEPTED,
    ORDER_STATUS.PREPARING,
    ORDER_STATUS.OUT_FOR_DELIVERY,
    ORDER_STATUS.DELIVERED,
];
