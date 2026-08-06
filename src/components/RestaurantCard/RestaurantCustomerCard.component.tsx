import { RestaurantCardBaseProps } from './RestaurantCard.types';
import { RestaurantCardBase } from './RestaurantCardBase.component';

export const RestaurantCustomerCard = (
    props: Omit<RestaurantCardBaseProps, 'children'>,
) => <RestaurantCardBase {...props} />;
