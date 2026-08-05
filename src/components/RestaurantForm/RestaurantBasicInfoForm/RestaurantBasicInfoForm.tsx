import { useFormContext } from 'react-hook-form';

import { FormAutocomplete } from '@components/FormComponents/FormAutocomplete/FormAutocomplete.component';
import { FormFieldRow } from '@components/FormComponents/FormFieldRow/FormFieldRow.component';
import { FormSelect } from '@components/FormComponents/FormSelect/FormSelect.component';
import { FormTextField } from '@components/FormComponents/FormTextField/FormTextField.component';

import * as S from '../RestaurantForm.styles';

const CUISINE_OPTIONS = [
    'Italian',
    'North Indian',
    'South Indian',
    'Street Food',
    'Chinese',
    'Mexican',
    'American',
    'Japanese',
    'Thai',
    'Mediterranean',
];

const VEG_OPTIONS = [
    { value: 'veg', label: 'Vegetarian Only' },
    { value: 'non-veg', label: 'Non-Vegetarian Only' },
    { value: 'both', label: 'Serving Both' },
];

export const RestaurantBasicInfoForm = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <S.StepContentContainer>
            <FormFieldRow label="Name" htmlFor="name">
                <FormTextField name="name" control={control} errors={errors} />
            </FormFieldRow>

            <FormFieldRow label="Description" htmlFor="description">
                <FormTextField
                    name="description"
                    control={control}
                    errors={errors}
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
                    error={!!errors.cuisines}
                    helperText={errors.cuisines?.message as string | undefined}
                />
            </FormFieldRow>

            <FormFieldRow label="Veg Type" htmlFor="vegType">
                <FormSelect
                    name="vegType"
                    control={control}
                    options={VEG_OPTIONS}
                    error={!!errors.vegType}
                    helperText={errors.vegType?.message as string | undefined}
                />
            </FormFieldRow>

            <FormFieldRow label="Display Image URL" htmlFor="imageUrl">
                <FormTextField
                    name="imageUrl"
                    control={control}
                    errors={errors}
                />
            </FormFieldRow>
        </S.StepContentContainer>
    );
};
