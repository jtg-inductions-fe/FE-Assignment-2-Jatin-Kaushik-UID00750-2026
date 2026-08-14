import { FieldValues } from 'react-hook-form';
import { Path } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

/**
 * Properties for a password input field that connects with React Hook Form
 */

export type FormPasswordFieldProps<TFieldValues extends FieldValues> = Omit<
    TextFieldProps,
    'name'
> & {
    /** Unique form registration field identifier key */
    name: Path<TFieldValues>;
};
