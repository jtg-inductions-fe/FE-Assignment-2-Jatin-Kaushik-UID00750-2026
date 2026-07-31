import { Control, FieldErrors, FieldValues } from 'react-hook-form';
import { Path } from 'react-hook-form';

import { TextFieldProps } from '@mui/material';

export type FormPasswordFieldProps<TFieldValues extends FieldValues> = Omit<
    TextFieldProps,
    'name'
> & {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    isLoading?: boolean;
};
