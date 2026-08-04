import { Restaurant } from '@types';

export interface RestaurantCardProps
    extends Pick<
        Restaurant,
        'id' | 'name' | 'cuisines' | 'vegType' | 'imageUrl'
    > {
    /** Operational availability status flag. */
    isClosed: boolean;

    /** Explicit control flag to render owner controls */
    showQuickActions?: boolean;

    /** Accessible label description alternative for screen reader parsing */
    imageAltText?: string;

    /** Callback emitted when owner action "Edit" is clicked */
    onEdit?: () => void;

    /** Callback emitted when owner action "Delete" is clicked */
    onDelete?: () => void;
}
