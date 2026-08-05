import { Search } from '@mui/icons-material';

import {
    SearchIconWrapper,
    StyledInputBase,
    StyledSearchbar,
} from './Searchbar.styles';
import { SearchbarProps } from './Searchbar.types';

/**
 * A text input field styled with a search magnifying glass icon
 *
 * @param props - The component properties
 * @param props.onChange - The callback function triggered every time the text in the input field changes
 * @param props.placeholder - The placeholder text shown inside the input box when it is empty. Defaults to 'Search...'
 */

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
