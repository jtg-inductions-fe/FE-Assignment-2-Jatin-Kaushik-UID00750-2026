import { Controller, FieldValues } from 'react-hook-form';

import { TextField } from '@mui/material';

import { FormTextFieldProps } from './FormTextField.types';

/**
 * Custom input field for forms.
 */

export const FormTextField = <T extends FieldValues>({
    name,
    control,
    isLoading = false,
    ...props
}: FormTextFieldProps<T>) => (
    <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
            <TextField
                {...field}
                margin="dense"
                required
                fullWidth
                id={name}
                autoComplete={name}
                disabled={isLoading}
                error={!!error}
                helperText={error?.message}
                {...props}
            />
        )}
    />
);
