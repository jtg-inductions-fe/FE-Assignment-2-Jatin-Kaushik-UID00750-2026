import { Controller, FieldPath, FieldValues } from 'react-hook-form';

import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

import { FormAutocompleteProps } from './FormAutocomplete.types';

export const FormAutocomplete = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
    TOption,
>({
    name,
    control,
    options,
    placeholder,
    error,
    helperText,
    getOptionLabel,
    isOptionEqualToValue,
}: FormAutocompleteProps<TFieldValues, TName, TOption>) => (
    <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
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
                        error={error}
                        helperText={helperText}
                    />
                )}
            />
        )}
    />
);
