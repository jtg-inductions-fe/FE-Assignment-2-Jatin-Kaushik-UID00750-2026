import { Controller, FieldValues } from 'react-hook-form';

import { StyledTextField } from './FormTextField.styles';
import { FormTextFieldProps } from './FormTextField.types';

/**
 * Custom input field for forms.
 * @param props - Component custom properties
 * @param props.name - Unique form registration field identifier key
 * @param props.control - Parent layout react-hook-form state manager instance
 * @param props.errors - Field tracking errors
 * @param props.isLoading - Submitting loading status indicator to lock the input
 */

export const FormTextField = <T extends FieldValues>({
    name,
    control,
    errors,
    isLoading = false,
    ...props
}: FormTextFieldProps<T>) => {
    const errorObj = errors[name];
    const errorMessage =
        errorObj &&
        'message' in errorObj &&
        typeof errorObj.message === 'string'
            ? errorObj.message
            : undefined;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <StyledTextField
                    {...field}
                    margin="dense"
                    required
                    fullWidth
                    id={name}
                    autoComplete={name}
                    disabled={isLoading}
                    error={!!errorObj}
                    helperText={errorMessage}
                    {...props}
                />
            )}
        />
    );
};
