import { Controller, FieldPath, FieldValues } from 'react-hook-form';

import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

import { FormAutocompleteProps } from './FormAutocomplete.types';

/**
 * A generic, controlled multi-select Autocomplete component
 *
 * @param props - The component properties.
 * @param props.name - The unique field name.
 * @param props.control - The control object provided by useForm.
 * @param props.options - Array of available selectable choices for the dropdown.
 * @param props.placeholder - The hint text shown when no tags are selected.
 * @param props.error - If true, applies validation error styling to the text field.
 * @param props.helperText - Supplementary text or validation error message displayed below the input.
 * @param props.getOptionLabel - Map function to convert an option object into a readable string label.
 * @param props.isOptionEqualToValue - Comparison function to match a dropdown item with current selection state.
 */

export const FormAutocomplete = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
    TOption,
>({
    name,
    control,
    options,
    placeholder,
    error,
    helperText,
    getOptionLabel,
    isOptionEqualToValue,
}: FormAutocompleteProps<TFieldValues, TName, TOption>) => (
    <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
            <Autocomplete
                multiple
                options={options}
                value={value || []}
                onChange={(_, newValue) => onChange(newValue)}
                getOptionLabel={getOptionLabel}
                isOptionEqualToValue={isOptionEqualToValue}
                renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => {
                        const chipLabel =
                            typeof option === 'string'
                                ? option
                                : getOptionLabel
                                  ? getOptionLabel(option)
                                  : '';

                        const { key, ...tagProps } = getTagProps({ index });

                        return (
                            <Chip
                                label={chipLabel}
                                {...tagProps}
                                key={key || index}
                            />
                        );
                    })
                }
                renderInput={(params) => (
                    <TextField
                        margin="dense"
                        {...params}
                        placeholder={value?.length ? '' : placeholder}
                        error={error}
                        helperText={helperText}
                    />
                )}
            />
        )}
    />
);
