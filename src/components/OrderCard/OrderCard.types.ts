import { Order, OrderStatus } from '@types';

/** Properties for base order card component */
export interface BaseOrderCardProps {
    order: Order;
    expanded: boolean;
    onAccordionChange: (_: React.SyntheticEvent, isExpanded: boolean) => void;
    /** Slot for role-specific controls */
    children?: React.ReactNode;
}

/** Properties for customer order card component */
export interface CustomerOrderCardProps {
    order: Order;
}

/** Properties for base owner card component */
export interface OwnerOrderCardProps {
    order: Order;
    onUpdateStatus: (
        orderId: string,
        nextStatus: OrderStatus,
        reason?: string,
    ) => Promise<void> | void;
}
