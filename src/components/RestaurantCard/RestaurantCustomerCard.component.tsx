import { RestaurantCardBaseProps } from './RestaurantCard.types';
import { RestaurantCardBase } from './RestaurantCardBase.component';

/**
 * Customer-facing variant of the restaurant display card.
 *
 * @param props - The component properties, inheriting all layout configurations from the base component.
 */

export const RestaurantCustomerCard = (
    props: Omit<RestaurantCardBaseProps, 'children'>,
) => <RestaurantCardBase {...props} />;
