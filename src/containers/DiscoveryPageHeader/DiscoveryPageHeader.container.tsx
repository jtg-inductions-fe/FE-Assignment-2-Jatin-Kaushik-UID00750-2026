import { Link as RouterLink } from 'react-router-dom';

import { FilterToggle } from '@components/FilterToggle';
import { PageHeader } from '@components/PageHeader';
import { Searchbar } from '@components/Searchbar';
import { UiButton } from '@components/UiButton';
import { ROUTES, USER_ROLES } from '@constant';
import { useAppSelector } from '@hooks';
import { useRestaurantQueries } from '@hooks';
import { RestaurantVegType } from '@types';

import { filterConfig } from './DiscoveryPageHeader.config';
import { StyledDiscoveryPageHeader } from './DiscoveryPageHeader.styles';

/**
 * Header controller for the restaurant discovery page.
 * Orchestrates search filtering parameters, dietary toggles, and contextual
 * action creation paths depending on the authenticated role profile.
 */
export const DiscoveryPageHeader = () => {
    const { currentUser } = useAppSelector((state) => state.auth);

    const { localSearch, setLocalSearch, vegType, updateVegFilter } =
        useRestaurantQueries();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearch(event.target.value);
    };

    const handleFilterToggleChange = (value: string) => {
        updateVegFilter(value as RestaurantVegType);
    };

    return (
        <>
            <StyledDiscoveryPageHeader>
                <Searchbar
                    value={localSearch}
                    placeholder="Search Restaurants..."
                    onChange={handleSearchChange}
                />
                <FilterToggle
                    defaultValue={vegType}
                    filterConfig={filterConfig}
                    onChange={handleFilterToggleChange}
                    aria-label="Veg type toggle"
                />
            </StyledDiscoveryPageHeader>
            {currentUser?.role === USER_ROLES.OWNER ? (
                <PageHeader
                    title="My Restaurants"
                    subline="Manage your restaurants"
                    action={
                        <UiButton
                            variant="contained"
                            component={RouterLink}
                            to={ROUTES.RESTAURANT_NEW}
                        >
                            Add new Restaurant
                        </UiButton>
                    }
                />
            ) : (
                <PageHeader
                    title="Discover Restaurants"
                    subline="Discover restaurants near you"
                />
            )}
        </>
    );
};
