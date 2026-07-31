import { Controller, FieldValues } from 'react-hook-form';

import { StyledTextField } from './FormTextField.styles';
import { FormTextFieldProps } from './FormTextField.types';

const FormTextField = <T extends FieldValues>({
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

export default FormTextField;
