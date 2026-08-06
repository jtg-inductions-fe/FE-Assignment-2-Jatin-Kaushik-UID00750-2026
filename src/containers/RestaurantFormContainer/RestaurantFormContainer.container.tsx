import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader';
import { RestaurantForm } from '@components/RestaurantForm';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import {
    addRestaurant,
    editRestaurant,
    fetchMyRestaurants,
} from '@store/thunks/restaurantsThunk';
import { RestaurantFormValues } from '@types';

/**
 * Smart container component managing the lifecycle of the restaurant data entry form.
 * Determines whether to hydrate the form fields with existing information or prepare
 * clean slots for new listings.
 *
 * @param props - The component properties.
 * @param props.restaurantId - Optional reference string used to identify records targeted for modification.
 */
export const RestaurantFormContainer = ({
    restaurantId,
}: {
    restaurantId?: string;
}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const { currentUser } = useAppSelector((state) => state.auth);

    const existingRestaurant = useAppSelector((state) =>
        state.restaurants.list.find((r) => r.id === restaurantId),
    );

    const [initialData, setInitialData] = useState<
        RestaurantFormValues | undefined
    >(undefined);
    const [isPageLoading, setIsPageLoading] = useState<boolean>(!!restaurantId);
    const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!restaurantId) return;

        if (existingRestaurant) {
            setInitialData(existingRestaurant);
            setIsPageLoading(false);
        } else {
            dispatch(fetchMyRestaurants(currentUser?.id ?? ''))
                .unwrap()
                .then((list) => {
                    const found = list.find((r) => r.id === restaurantId);
                    if (found) setInitialData(found);
                })
                .catch(() => {
                    toast({
                        message: 'Failed to fetch restaurant details',
                        type: 'error',
                    });
                })
                .finally(() => {
                    setIsPageLoading(false);
                });
        }
    }, [restaurantId, existingRestaurant, dispatch, toast, currentUser?.id]);

    /**
     * Dispatches payloads to modify current restaurant or add new restaurant.
     *
     * @param formData - Structured, user-provided values matching input configuration requirements of the restaurant.
     */
    const handleFormSubmission = async (formData: RestaurantFormValues) => {
        setIsSubmitLoading(true);
        try {
            if (restaurantId && currentUser) {
                await dispatch(
                    editRestaurant({
                        id: restaurantId,
                        ownerId: currentUser?.id,
                        ...formData,
                    }),
                ).unwrap();
                toast({
                    message: 'Changes saved successfully',
                    type: 'success',
                });
            } else if (currentUser) {
                await dispatch(
                    addRestaurant({ ownerId: currentUser?.id, ...formData }),
                ).unwrap();
                toast({
                    message: 'Restaurant created successfully',
                    type: 'success',
                });
            } else {
                toast({
                    message: 'Unable to complete request. Please try again',
                    type: 'error',
                });
            }
            await navigate('/');
        } catch {
            toast({
                message: 'Unable to complete request. Please try again',
                type: 'error',
            });
        } finally {
            setIsSubmitLoading(false);
        }
    };

    if (isPageLoading) {
        return <FullScreenLoader message="Loading Restaurant Details..." />;
    }

    return (
        <RestaurantForm
            initialValues={initialData}
            onSubmit={handleFormSubmission}
            isSubmitLoading={isSubmitLoading}
        />
    );
};
