import { Controller, FieldValues, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

import { FormTextFieldProps } from './FormTextField.types';

/**
 * Custom input field for forms.
 */

export const FormTextField = <T extends FieldValues>({
    name,
    ...props
}: FormTextFieldProps<T>) => {
    const {
        control,
        formState: { isSubmitting },
    } = useFormContext();
    return (
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
                    disabled={isSubmitting}
                    error={!!error}
                    helperText={error?.message}
                    {...props}
                />
            )}
        />
    );
};
