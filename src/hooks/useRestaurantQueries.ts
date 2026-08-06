import { useCallback, useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '@hooks';
import { setSearchQuery, setVegFilter } from '@store/slices/restaurantsSlice';
import type { RestaurantVegType } from '@types';

/**
 * Custom state synchronisation hook that links component filter states with URL search parameters.
 * Manages debounced text search dispatching and active dietary filters to keep global state in sync.
 */
export const useRestaurantQueries = () => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const urlSearchQuery = searchParams.get('search') || '';
    const urlVegType = (searchParams.get('vegType') ||
        'all') as RestaurantVegType;

    const [localSearch, setLocalSearch] = useState(urlSearchQuery);

    useEffect(() => {
        setLocalSearch(urlSearchQuery);
    }, [urlSearchQuery]);

    useEffect(() => {
        dispatch(setVegFilter(urlVegType));
    }, [urlVegType, dispatch]);

    useEffect(() => {
        dispatch(setSearchQuery(urlSearchQuery));
    }, [urlSearchQuery, dispatch]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchParams((prev) => {
                if (localSearch.trim()) {
                    prev.set('search', localSearch);
                } else {
                    prev.delete('search');
                }
                return prev;
            });
        }, 350);

        return () => clearTimeout(handler);
    }, [localSearch, setSearchParams]);

    const updateVegFilter = useCallback(
        (value: RestaurantVegType) => {
            setSearchParams((prev) => {
                if (value && value !== 'all') {
                    prev.set('vegType', value);
                } else {
                    prev.delete('vegType');
                }
                return prev;
            });
        },
        [setSearchParams],
    );

    return {
        localSearch,
        setLocalSearch,
        vegType: urlVegType,
        updateVegFilter,
    };
};
