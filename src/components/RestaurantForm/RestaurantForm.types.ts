import { RestaurantFormValues } from '@types';

/** Properties passed to the RestaurantForm component */
export interface RestaurantFormProps {
    initialValues?: RestaurantFormValues;
    onSubmit: (values: RestaurantFormValues) => Promise<void>;
    initialStep?: number;
}
