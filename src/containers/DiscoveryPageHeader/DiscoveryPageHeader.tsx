import { useState } from 'react';

import { FilterToggle } from '@components/FilterToggle/FilterToggle.component';
import { Searchbar } from '@components/Searchbar/Searchbar.component';

import { filterConfig } from './DiscoveryPageHeader.config';
import { StyledDiscoveryPageHeader } from './DiscoveryPageHeader.styles';

export const DiscoveryPageHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        // eslint-disable-next-line
        console.log(searchQuery);
    };
    return (
        <StyledDiscoveryPageHeader>
            <Searchbar
                placeholder="Search Restaurants..."
                onChange={handleSearchChange}
            />
            <FilterToggle
                defaultValue={filterConfig[0].value}
                filterConfig={filterConfig}
                aria-label="Veg type toggle"
            />
        </StyledDiscoveryPageHeader>
    );
};
