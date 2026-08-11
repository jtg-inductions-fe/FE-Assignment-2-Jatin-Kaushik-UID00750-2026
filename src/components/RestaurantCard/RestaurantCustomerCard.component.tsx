import { RestaurantCardBaseProps } from './RestaurantCard.types';
import { RestaurantCardBase } from './RestaurantCardBase.component';

/**
 * Customer-facing variant of the restaurant display card.
 */

export const RestaurantCustomerCard = (
    props: Omit<RestaurantCardBaseProps, 'children'>,
) => <RestaurantCardBase {...props} />;
