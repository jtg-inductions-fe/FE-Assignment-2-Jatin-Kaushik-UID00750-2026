import { useFormContext } from 'react-hook-form';

import { FormFieldRow, FormTextField } from '@components/FormComponents';
import { RestaurantFormValues } from '@types';

import * as FormStyles from './RestaurantForm.styles';

/**
 * RestaurantAddressForm Component
 * Renders the structural address sub-section input fields for the restaurant details form
 */

export const RestaurantAddressForm = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<RestaurantFormValues>();
    return (
        <FormStyles.StepContentContainer>
            <FormFieldRow label="Street" htmlFor="address.street">
                <FormTextField
                    name="address.street"
                    control={control}
                    errors={errors}
                    error={!!errors.address?.street}
                    helperText={errors.address?.street?.message}
                />
            </FormFieldRow>

            <FormFieldRow label="City" htmlFor="address.city">
                <FormTextField
                    name="address.city"
                    control={control}
                    errors={errors}
                    error={!!errors.address?.city}
                    helperText={errors.address?.city?.message}
                />
            </FormFieldRow>

            <FormFieldRow label="State" htmlFor="address.state">
                <FormTextField
                    name="address.state"
                    control={control}
                    errors={errors}
                    error={!!errors.address?.state}
                    helperText={errors.address?.state?.message}
                />
            </FormFieldRow>

            <FormFieldRow label="Pincode" htmlFor="address.pincode">
                <FormTextField
                    name="address.pincode"
                    control={control}
                    errors={errors}
                    error={!!errors.address?.pincode}
                    helperText={errors.address?.pincode?.message}
                />
            </FormFieldRow>
        </FormStyles.StepContentContainer>
    );
};
