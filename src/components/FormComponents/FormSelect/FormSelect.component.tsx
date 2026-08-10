import { Controller, FieldPath, FieldValues } from 'react-hook-form';

import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';

import { FormSelectProps } from './FormSelect.types';

/**
 * A controlled dropdown selection component
 *
 * @param props - The component properties.
 * @param props.name - The form field name.
 * @param props.control - The form control object from useForm.
 * @param props.options - List of choices to display in the dropdown menu.
 * @param props.error - Flag to trigger validation error styling.
 * @param props.helperText - Text content shown below the input when an error occurs.
 * @param props.fullWidth - Option to stretch the input to fit its container width.
 *
 * @returns A structured form select component with built-in validation feedback.
 */

export const FormSelect = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
>({
    name,
    control,
    options,
    error = false,
    helperText,
    fullWidth = true,
}: FormSelectProps<TFieldValues, TName>) => (
    <FormControl fullWidth={fullWidth} error={error} margin="dense">
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Select {...field} value={field.value ?? ''} id={name}>
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            )}
        />
        {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
);
