import { Restaurant } from '@types';

/**
 * Defines the properties accepted by the RestaurantCard component
 */
export interface RestaurantCardProps
    extends Pick<
        Restaurant,
        'id' | 'name' | 'cuisines' | 'vegType' | 'imageUrl'
    > {
    isClosed: boolean;
    showQuickActions?: boolean;
    imageAltText?: string;
    onEdit?: () => void;
    onDelete?: () => void;
}

/**
 * Defines the visual and accessibility configuration for a specific dietary filter
 */
export interface DietConfiguration {
    label: string;
    color: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    ariaLabel: string;
}
