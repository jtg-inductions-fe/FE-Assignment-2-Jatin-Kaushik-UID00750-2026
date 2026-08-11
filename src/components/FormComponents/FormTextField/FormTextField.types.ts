import { Control, FieldValues, Path } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

/**
 * Properties for a text input field that connects with React Hook Form
 */

export type FormTextFieldProps<TFieldValues extends FieldValues> = Omit<
    TextFieldProps,
    'name'
> & {
    /** Unique form registration field identifier key */
    name: Path<TFieldValues>;
    /** Parent layout react-hook-form state manager instance */
    control: Control<TFieldValues>;
    /** Submitting loading status indicator to lock the input */
    isLoading?: boolean;
};
