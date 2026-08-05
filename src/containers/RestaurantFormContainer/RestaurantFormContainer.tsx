import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader/FullScreenLoader.component';
import { RestaurantForm } from '@components/RestaurantForm/RestaurantForm.component';
import { useToast } from '@hooks';
import { RestaurantFormValues } from '@types';

export const RestaurantFormContainer = ({
    restaurantId,
}: {
    restaurantId?: string;
}) => {
    const [initialData, setInitialData] = useState<
        RestaurantFormValues | undefined
    >(undefined);
    const [isPageLoading, setIsPageLoading] = useState<boolean>(!!restaurantId);
    const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);

    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        if (restaurantId) {
            const fetchRestaurantDetails = async () => {
                try {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    const mockFetchedData: RestaurantFormValues = {
                        name: 'Le Bistro Classique',
                        description:
                            'A beautiful Parisian dining destination offering rich artisanal cuisine choices.',
                        cuisines: ['French', 'Mediterranean'],
                        vegType: 'both',
                        imageUrl: 'https://unsplash.com',
                        address: {
                            street: '456 Rue de Paris',
                            city: 'Boston',
                            state: 'MA',
                            pincode: '02108',
                        },
                        operatingHours: [
                            { day: 'Monday', isClosed: true },
                            {
                                day: 'Tuesday',
                                isClosed: false,
                                openTime: '11:00',
                                closeTime: '23:00',
                            },
                            {
                                day: 'Wednesday',
                                isClosed: false,
                                openTime: '11:00',
                                closeTime: '23:00',
                            },
                            {
                                day: 'Thursday',
                                isClosed: false,
                                openTime: '11:00',
                                closeTime: '23:00',
                            },
                            {
                                day: 'Friday',
                                isClosed: false,
                                openTime: '11:00',
                                closeTime: '00:00',
                            },
                            {
                                day: 'Saturday',
                                isClosed: false,
                                openTime: '10:00',
                                closeTime: '00:00',
                            },
                            {
                                day: 'Sunday',
                                isClosed: false,
                                openTime: '10:00',
                                closeTime: '21:00',
                            },
                        ],
                    };
                    setInitialData(mockFetchedData);
                } catch {
                } finally {
                    setIsPageLoading(false);
                }
            };

            void fetchRestaurantDetails();
        }
    }, [restaurantId]);

    const handleFormSubmission = async (formData: RestaurantFormValues) => {
        setIsSubmitLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            if (restaurantId) {
                // eslint-disable-next-line
                console.log('PUT - Updating Existing Restaurant:', formData);
                toast({
                    message: 'Restaurant updated successfully',
                    type: 'success',
                });
            } else {
                // eslint-disable-next-line
                console.log('POST - Creating New Restaurant Record:', formData);
                toast({
                    message: 'New Restaurant added successfully',
                    type: 'success',
                });
            }
            await navigate('/');
        } catch (error) {
            // eslint-disable-next-line
            console.error('Submission execution failure:', error);
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
