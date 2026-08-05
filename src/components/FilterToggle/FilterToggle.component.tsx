import React from 'react';

import {
    StyledToggleButton,
    StyledToggleButtonGroup,
} from './FilterToggle.styles';
import { FilterToggleProps } from './FilterToggle.types';

/**
 * A group of toggle buttons used to filter lists
 *
 * @param props - The component properties
 * @param props.defaultValue - The initial filter value
 * @param props.filterConfig - An array of filter objects containing `value` and text `label`
 * @param props.onChange - Optional callback function triggered with the new value when a button is clicked.
 * @param props.rest - Any extra attributes passed down to the underlying Material-UI button group.
 */

export const FilterToggle = ({
    defaultValue,
    filterConfig,
    onChange,
    ...rest
}: FilterToggleProps) => {
    const [value, setValue] = React.useState<string>(defaultValue);

    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        newValue: string,
    ) => {
        setValue(newValue);

        // Trigger the parent filter function
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <StyledToggleButtonGroup
            color="primary"
            value={value}
            exclusive
            onChange={handleChange}
            size="small"
            {...rest}
        >
            {filterConfig.map((filter) => (
                <StyledToggleButton key={filter.value} value={filter.value}>
                    {filter.label}
                </StyledToggleButton>
            ))}
        </StyledToggleButtonGroup>
    );
};
