import { useNavigate } from 'react-router-dom';

import { RestaurantForm } from '@components/RestaurantForm';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { addRestaurant } from '@store/thunks/restaurantsThunk';
import { RestaurantFormValues } from '@types';

/**
 * Smart container component managing the lifecycle of the restaurant data entry form.
 * Provide a clean/empty form for creating new restaurant
 */
export const NewRestaurantFormContainer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const { currentUser } = useAppSelector((state) => state.auth);

    /**
     * Dispatches payloads to add new restaurant.
     */
    const handleFormSubmission = async (formData: RestaurantFormValues) => {
        try {
            if (currentUser) {
                await dispatch(
                    addRestaurant({ ownerId: currentUser?.id, ...formData }),
                ).unwrap();
                toast({
                    message: 'Restaurant created successfully',
                    type: 'success',
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

    return <RestaurantForm onSubmit={handleFormSubmission} />;
};
