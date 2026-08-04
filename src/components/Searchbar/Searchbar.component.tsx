import { Search } from '@mui/icons-material';

import {
    SearchIconWrapper,
    StyledInputBase,
    StyledSearchbar,
} from './Searchbar.styles';
import { SearchbarProps } from './Searchbar.types';

export const Searchbar = ({
    onChange,
    placeholder = 'Search...',
}: SearchbarProps) => (
    <StyledSearchbar>
        <SearchIconWrapper>
            <Search color="primary" />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder={placeholder}
            inputProps={{ 'aria-label': 'search' }}
            onChange={onChange}
        />
    </StyledSearchbar>
);
