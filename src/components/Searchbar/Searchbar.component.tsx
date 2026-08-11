import { Search } from '@mui/icons-material';

import {
    SearchIconWrapper,
    StyledInputBase,
    StyledSearchbar,
} from './Searchbar.styles';
import { SearchbarProps } from './Searchbar.types';

/**
 * A text input field styled with a search magnifying glass icon
 */

export const Searchbar = ({
    value = '',
    onChange,
    placeholder = 'Search...',
}: SearchbarProps) => (
    <StyledSearchbar>
        <SearchIconWrapper>
            <Search color="primary" />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder={placeholder}
            value={value}
            id="searchbar"
            inputProps={{ 'aria-label': 'search' }}
            onChange={onChange}
        />
    </StyledSearchbar>
);
