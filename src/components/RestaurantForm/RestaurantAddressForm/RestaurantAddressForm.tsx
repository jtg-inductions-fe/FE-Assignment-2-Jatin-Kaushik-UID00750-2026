import { useFormContext } from 'react-hook-form';

import { FormFieldRow } from '@components/FormComponents/FormFieldRow/FormFieldRow.component';
import { FormTextField } from '@components/FormComponents/FormTextField/FormTextField.component';
import { RestaurantFormValues } from '@types';

import * as S from '../RestaurantForm.styles';

export const RestaurantAddressForm = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<RestaurantFormValues>();
    return (
        <S.StepContentContainer>
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
        </S.StepContentContainer>
    );
};
