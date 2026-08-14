import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader';
import { RestaurantForm } from '@components/RestaurantForm';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import {
    editRestaurant,
    fetchRestaurantById,
} from '@store/thunks/restaurantsThunk';
import { RestaurantFormValues } from '@types';

/**
 * Smart container component managing the lifecycle of the restaurant data entry form.
 * Hydrate the form fields with existing information.
 */
export const EditRestaurantFormContainer = ({
    restaurantId,
    initialStep = 0,
}: {
    restaurantId: string;
    initialStep?: number;
}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const { currentUser } = useAppSelector((state) => state.auth);

    const { selectedRestaurant } = useAppSelector((state) => state.restaurants);

    const [initialData, setInitialData] = useState<
        RestaurantFormValues | undefined
    >(undefined);
    const [isPageLoading, setIsPageLoading] = useState<boolean>(!!restaurantId);

    useEffect(() => {
        if (!restaurantId) {
            toast({
                message: 'Failed to fetch restaurant details',
                type: 'error',
            });
            void navigate('/404');
            return;
        }
        dispatch(fetchRestaurantById(restaurantId))
            .unwrap()
            .then((restaurant) => {
                if (restaurant) setInitialData(restaurant);
                else throw new Error('Restaurant not found');
            })
            .catch(() => {
                toast({
                    message: 'Failed to fetch restaurant details',
                    type: 'error',
                });
                void navigate('/');
            })
            .finally(() => {
                setIsPageLoading(false);
            });
    }, [restaurantId, navigate, dispatch, toast]);

    /**
     * Dispatches payloads to modify current restaurant or add new restaurant.
     */
    const handleFormSubmission = async (formData: RestaurantFormValues) => {
        try {
            if (restaurantId && currentUser && selectedRestaurant) {
                await dispatch(
                    editRestaurant({
                        ...selectedRestaurant,
                        ...formData,
                    }),
                ).unwrap();
                toast({
                    message: 'Changes saved successfully',
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
        }
    };

    if (isPageLoading) {
        return <FullScreenLoader message="Loading Restaurant Details..." />;
    }

    return (
        <RestaurantForm
            initialValues={initialData}
            initialStep={initialStep}
            onSubmit={handleFormSubmission}
        />
    );
};
