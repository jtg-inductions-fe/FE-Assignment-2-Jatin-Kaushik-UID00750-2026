import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

/**
 * Properties for a text input field that connects with React Hook Form
 */

export type FormTextFieldProps<TFieldValues extends FieldValues> = Omit<
    TextFieldProps,
    'name'
> & {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    isLoading?: boolean;
};
