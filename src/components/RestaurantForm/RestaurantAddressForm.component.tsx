import { useFormContext } from 'react-hook-form';

import { FormFieldRow, FormTextField } from '@components/FormComponents';
import { RestaurantFormValues } from '@types';

import * as FormStyles from './RestaurantForm.styles';

/**
 * RestaurantAddressForm Component
 * Renders the structural address sub-section input fields for the restaurant details form
 */

export const RestaurantAddressForm = () => {
    const { control } = useFormContext<RestaurantFormValues>();
    return (
        <FormStyles.StepContentContainer>
            <FormFieldRow label="Street" htmlFor="address.street">
                <FormTextField name="address.street" control={control} />
            </FormFieldRow>

            <FormFieldRow label="City" htmlFor="address.city">
                <FormTextField name="address.city" control={control} />
            </FormFieldRow>

            <FormFieldRow label="State" htmlFor="address.state">
                <FormTextField name="address.state" control={control} />
            </FormFieldRow>

            <FormFieldRow label="Pincode" htmlFor="address.pincode">
                <FormTextField name="address.pincode" control={control} />
            </FormFieldRow>
        </FormStyles.StepContentContainer>
    );
};
