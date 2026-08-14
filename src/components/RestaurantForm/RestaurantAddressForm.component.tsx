import { FormFieldRow, FormTextField } from '@components/FormComponents';

import { RESTAURANT_FORM_FIELD_NAMES } from './RestaurantForm.constants';
import * as FormStyles from './RestaurantForm.styles';

/**
 * RestaurantAddressForm Component
 * Renders the structural address sub-section input fields for the restaurant details form
 */

export const RestaurantAddressForm = () => (
    <FormStyles.StepContentContainer>
        <FormFieldRow
            label="Street *"
            htmlFor={RESTAURANT_FORM_FIELD_NAMES.ADDRESS_STREET}
        >
            <FormTextField name={RESTAURANT_FORM_FIELD_NAMES.ADDRESS_STREET} />
        </FormFieldRow>

        <FormFieldRow
            label="City *"
            htmlFor={RESTAURANT_FORM_FIELD_NAMES.ADDRESS_CITY}
        >
            <FormTextField name={RESTAURANT_FORM_FIELD_NAMES.ADDRESS_CITY} />
        </FormFieldRow>

        <FormFieldRow
            label="State *"
            htmlFor={RESTAURANT_FORM_FIELD_NAMES.ADDRESS_STATE}
        >
            <FormTextField name={RESTAURANT_FORM_FIELD_NAMES.ADDRESS_STATE} />
        </FormFieldRow>

        <FormFieldRow
            label="Pincode *"
            htmlFor={RESTAURANT_FORM_FIELD_NAMES.ADDRESS_PINCODE}
        >
            <FormTextField name={RESTAURANT_FORM_FIELD_NAMES.ADDRESS_PINCODE} />
        </FormFieldRow>
    </FormStyles.StepContentContainer>
);
