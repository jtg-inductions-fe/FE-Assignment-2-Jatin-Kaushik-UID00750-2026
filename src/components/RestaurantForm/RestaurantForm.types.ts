import { RestaurantFormValues } from '@types';

export interface RestaurantFormProps {
    initialValues?: RestaurantFormValues;
    onSubmit: (values: RestaurantFormValues) => Promise<void>;
    isSubmitLoading: boolean;
}
