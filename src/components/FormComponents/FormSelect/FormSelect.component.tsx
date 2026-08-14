import {
    Controller,
    FieldPath,
    FieldValues,
    useFormContext,
} from 'react-hook-form';

import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';

import { FormSelectProps } from './FormSelect.types';

/**
 * A controlled dropdown selection component
 */

export const FormSelect = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
>({
    name,
    options,
}: FormSelectProps<TFieldValues, TName>) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth margin="dense" error={!!error}>
                    <Select {...field} value={field.value ?? ''} id={name}>
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {error && <FormHelperText>{error?.message}</FormHelperText>}
                </FormControl>
            )}
        />
    );
};
