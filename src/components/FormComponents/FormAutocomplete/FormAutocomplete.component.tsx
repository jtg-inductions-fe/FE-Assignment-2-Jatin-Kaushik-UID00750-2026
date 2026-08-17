import {
    Controller,
    FieldPath,
    FieldValues,
    useFormContext,
} from 'react-hook-form';

import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

import { FormAutocompleteProps } from './FormAutocomplete.types';

/**
 * A generic, controlled multi-select Autocomplete component
 */

export const FormAutocomplete = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
    TOption,
>({
    name,
    options,
    placeholder,
    getOptionLabel,
    isOptionEqualToValue,
}: FormAutocompleteProps<TFieldValues, TName, TOption>) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <Autocomplete
                    multiple
                    options={options}
                    value={value || []}
                    onChange={(_, newValue) => onChange(newValue)}
                    getOptionLabel={getOptionLabel}
                    isOptionEqualToValue={isOptionEqualToValue}
                    renderTags={(tagValue, getTagProps) =>
                        tagValue.map((option, index) => {
                            const chipLabel =
                                typeof option === 'string'
                                    ? option
                                    : getOptionLabel
                                      ? getOptionLabel(option)
                                      : '';

                            const { key, ...tagProps } = getTagProps({ index });

                            return (
                                <Chip
                                    label={chipLabel}
                                    {...tagProps}
                                    key={key || index}
                                />
                            );
                        })
                    }
                    renderInput={(params) => (
                        <TextField
                            margin="dense"
                            {...params}
                            placeholder={value?.length ? '' : placeholder}
                            error={!!error}
                            helperText={error?.message}
                        />
                    )}
                />
            )}
        />
    );
};
