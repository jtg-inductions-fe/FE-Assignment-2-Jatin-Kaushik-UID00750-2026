import { useState } from 'react';

import { Controller, FieldValues } from 'react-hook-form';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';

import { StyledPasswordField } from './FormPasswordField.styles';
import { FormPasswordFieldProps } from './FormPasswordField.types';

/**
 * Custom password input field for forms handling secure password visibility toggles.
 * @param props - Component custom properties
 * @param props.name - Unique form registration field identifier key
 * @param props.control - Parent layout react-hook-form state manager instance
 * @param props.errors - Field tracking errors
 * @param props.isLoading - Submitting loading status indicator to lock the input
 */

export const FormPasswordField = <T extends FieldValues>({
    name,
    control,
    errors,
    isLoading = false,
    ...props
}: FormPasswordFieldProps<T>) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

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
                <StyledPasswordField
                    {...field}
                    margin="dense"
                    required
                    fullWidth
                    id={name}
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    disabled={isLoading}
                    error={!!errorObj}
                    helperText={errorMessage}
                    {...props}
                    slotProps={{
                        ...props.slotProps,
                        input: {
                            ...props.slotProps?.input,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
        />
    );
};
