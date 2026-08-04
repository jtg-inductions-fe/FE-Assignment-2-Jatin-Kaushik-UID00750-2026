import React from 'react';

import {
    StyledToggleButton,
    StyledToggleButtonGroup,
} from './FilterToggle.styles';
import { FilterToggleProps } from './FilterToggle.types';

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
