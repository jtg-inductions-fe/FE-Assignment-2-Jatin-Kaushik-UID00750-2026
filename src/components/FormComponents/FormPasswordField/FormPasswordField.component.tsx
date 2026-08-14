import { useState } from 'react';

import { Controller, FieldValues, useFormContext } from 'react-hook-form';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';

import { FormPasswordFieldProps } from './FormPasswordField.types';

/**
 * Custom password input field for forms handling secure password visibility toggles.
 */

export const FormPasswordField = <T extends FieldValues>({
    name,
    ...props
}: FormPasswordFieldProps<T>) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

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
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    disabled={isSubmitting}
                    error={!!error}
                    helperText={error?.message}
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
