import {
    FormAutocomplete,
    FormFieldRow,
    FormSelect,
    FormTextField,
} from '@components/FormComponents';

import {
    CUISINE_OPTIONS,
    RESTAURANT_FORM_FIELD_NAMES,
    VEG_OPTIONS,
} from './RestaurantForm.constants';
import * as FormStyles from './RestaurantForm.styles';

/**
 * RestaurantBasicInfoForm Component
 * Renders the structural basic informations sub-section input fields for the restaurant details form
 */

export const RestaurantBasicInfoForm = () => (
    <FormStyles.StepContentContainer>
        <FormFieldRow label="Name *" htmlFor={RESTAURANT_FORM_FIELD_NAMES.NAME}>
            <FormTextField name={RESTAURANT_FORM_FIELD_NAMES.NAME} />
        </FormFieldRow>

        <FormFieldRow
            label="Description *"
            htmlFor={RESTAURANT_FORM_FIELD_NAMES.DESCRIPTION}
        >
            <FormTextField
                name={RESTAURANT_FORM_FIELD_NAMES.DESCRIPTION}
                multiline
                rows={3}
            />
        </FormFieldRow>

        <FormFieldRow
            label="Cuisines *"
            htmlFor={RESTAURANT_FORM_FIELD_NAMES.CUISINIES}
        >
            <FormAutocomplete
                name={RESTAURANT_FORM_FIELD_NAMES.CUISINIES}
                options={CUISINE_OPTIONS}
                placeholder="Select cuisines..."
            />
        </FormFieldRow>

        <FormFieldRow
            label="Veg Type *"
            htmlFor={RESTAURANT_FORM_FIELD_NAMES.VEG_TYPE}
        >
            <FormSelect
                name={RESTAURANT_FORM_FIELD_NAMES.VEG_TYPE}
                options={VEG_OPTIONS}
            />
        </FormFieldRow>

        <FormFieldRow
            label="Display Image URL *"
            htmlFor={RESTAURANT_FORM_FIELD_NAMES.IMAGE_URL}
        >
            <FormTextField name={RESTAURANT_FORM_FIELD_NAMES.IMAGE_URL} />
        </FormFieldRow>
    </FormStyles.StepContentContainer>
);
