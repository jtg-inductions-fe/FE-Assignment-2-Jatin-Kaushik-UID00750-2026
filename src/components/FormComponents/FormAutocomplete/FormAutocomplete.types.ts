import { FieldPath, FieldValues } from 'react-hook-form';

export interface FormAutocompleteProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
    TOption,
> {
    name: TName;
    options: TOption[];
    placeholder?: string;
    getOptionLabel?: (option: TOption) => string;
    isOptionEqualToValue?: (option: TOption, value: TOption) => boolean;
}
