import { useFormContext } from 'react-hook-form';

import {
    FormAutocomplete,
    FormFieldRow,
    FormSelect,
    FormTextField,
} from '@components/FormComponents';

import { CUISINE_OPTIONS, VEG_OPTIONS } from './RestaurantForm.constants';
import * as FormStyles from './RestaurantForm.styles';

/**
 * RestaurantBasicInfoForm Component
 * Renders the structural basic informations sub-section input fields for the restaurant details form
 */

export const RestaurantBasicInfoForm = () => {
    const { control } = useFormContext();
    return (
        <FormStyles.StepContentContainer>
            <FormFieldRow label="Name" htmlFor="name">
                <FormTextField name="name" control={control} />
            </FormFieldRow>

            <FormFieldRow label="Description" htmlFor="description">
                <FormTextField
                    name="description"
                    control={control}
                    multiline
                    rows={3}
                />
            </FormFieldRow>

            <FormFieldRow label="Cuisines" htmlFor="cuisines">
                <FormAutocomplete
                    name="cuisines"
                    control={control}
                    options={CUISINE_OPTIONS}
                    placeholder="Select cuisines..."
                />
            </FormFieldRow>

            <FormFieldRow label="Veg Type" htmlFor="vegType">
                <FormSelect
                    name="vegType"
                    control={control}
                    options={VEG_OPTIONS}
                />
            </FormFieldRow>

            <FormFieldRow label="Display Image URL" htmlFor="imageUrl">
                <FormTextField name="imageUrl" control={control} />
            </FormFieldRow>
        </FormStyles.StepContentContainer>
    );
};
