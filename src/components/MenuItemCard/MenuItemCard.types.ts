import { MenuItem } from '@types';

/** Props for the base menu item card layout used across all user roles */
export interface MenuItemCardBaseProps {
    item: MenuItem;
    showAsDimmed: boolean;
    actions?: React.ReactNode;
    children?: React.ReactNode;
}

/** Props for the customer-facing card view, handles item selection and ordering */
export interface MenuItemCustomerCardProps {
    item: MenuItem;
    quantity: number;
    isAvailable: boolean;
    disabled?: boolean;
    onIncrement: () => void;
    onDecrement: () => void;
}

/** Props for the restaurant owner card view, handles inventory actions */
export interface MenuItemOwnerCardProps {
    item: MenuItem;
    onEdit: () => void;
    onDelete: () => void;
}
