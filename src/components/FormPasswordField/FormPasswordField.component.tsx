import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';

import { StyledPasswordField } from './FormPasswordField.styles';

const FormPasswordField = ({ ...props }: TextFieldProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <StyledPasswordField
            margin="dense"
            required
            fullWidth
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            slotProps={{
                input: {
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
            {...props}
        />
    );
};

export default FormPasswordField;
