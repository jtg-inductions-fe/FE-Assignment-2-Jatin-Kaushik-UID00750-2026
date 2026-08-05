import { Controller, FieldPath, FieldValues } from 'react-hook-form';

import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';

import { FormSelectProps } from './FormSelect.types';

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
                <Select {...field} value={field.value ?? ''}>
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
