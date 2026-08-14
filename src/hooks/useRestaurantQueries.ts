import { useCallback, useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { RESTAURANT_VEG_TYPES } from '@constant';
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
    const vegTypeParam = searchParams.get('vegType');
    const urlVegType: RestaurantVegType =
        vegTypeParam === RESTAURANT_VEG_TYPES.VEG ||
        vegTypeParam === RESTAURANT_VEG_TYPES.NON_VEG
            ? vegTypeParam
            : RESTAURANT_VEG_TYPES.ALL;

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

    const debounceSearchUpdate = useMemo(() => {
        let timer: ReturnType<typeof setTimeout>;

        return (value: string) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setSearchParams((prev) => {
                    if (value.trim()) {
                        prev.set('search', value);
                    } else {
                        prev.delete('search');
                    }
                    return prev;
                });
            }, 350);
        };
    }, [setSearchParams]);

    // Handler for the input onChange event
    const handleSearchChange = useCallback(
        (value: string) => {
            setLocalSearch(value);
            debounceSearchUpdate(value);
        },
        [debounceSearchUpdate],
    );

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
        setLocalSearch: handleSearchChange,
        vegType: urlVegType,
        updateVegFilter,
    };
};
