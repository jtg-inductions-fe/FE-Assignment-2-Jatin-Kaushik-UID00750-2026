import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface SelectOption {
    value: string;
    label: string;
}

export interface FormSelectProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
> {
    name: TName;
    control: Control<TFieldValues>;
    options: SelectOption[];
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
}
