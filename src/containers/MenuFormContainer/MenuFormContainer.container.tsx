import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader';
import { MenuForm } from '@components/MenuForm';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import {
    addMenuItem,
    editMenuItem,
    fetchMenuByRestaurant,
    fetchMenuItemById,
} from '@store/thunks/menuThunk';
import { MenuItemFormValues } from '@types';
import { routeBuilders } from '@utils';

/**
 * Container component for managing the initialization and submission of the menu item data form.
 */
export const MenuFormContainer = ({
    restaurantId,
    menuItemId,
}: {
    restaurantId?: string;
    menuItemId?: string;
}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const { categories } = useAppSelector((state) => state.menu);

    const [initialData, setInitialData] = useState<
        MenuItemFormValues | undefined
    >(undefined);
    const [isPageLoading, setIsPageLoading] = useState<boolean>(true);

    // Load restaurant menu data if they are missing from the store on window reload
    useEffect(() => {
        if (!restaurantId) {
            setIsPageLoading(false);
            return;
        }

        const loadFormData = async () => {
            try {
                if (categories.length === 0) {
                    await dispatch(
                        fetchMenuByRestaurant(restaurantId),
                    ).unwrap();
                }
            } catch {
                toast({
                    message: 'Failed to retrieve underlying configurations.',
                    type: 'error',
                });
            } finally {
                setIsPageLoading(false);
            }
        };

        void loadFormData();
    }, [restaurantId, categories.length, dispatch, toast]);

    // Load form initial data if editing an existing item
    useEffect(() => {
        if (menuItemId && categories.length > 0) {
            dispatch(fetchMenuItemById(menuItemId))
                .unwrap()
                .then((item) => {
                    if (item) {
                        const formInitialData = Object.fromEntries(
                            Object.entries(item).filter(
                                ([key]) =>
                                    key !== 'id' && key !== 'restaurantId',
                            ),
                        ) as MenuItemFormValues;
                        setInitialData(formInitialData);
                    }
                })
                .catch(() => {
                    toast({
                        message: 'Requested menu item could not be found.',
                        type: 'error',
                    });
                    void navigate(
                        restaurantId
                            ? routeBuilders.restaurantDetails(restaurantId)
                            : '/',
                    );
                });
        }
    }, [
        menuItemId,
        categories.length,
        dispatch,
        navigate,
        restaurantId,
        toast,
    ]);

    /**
     * Processes form submission to update or append menu elements.*
     */
    const handleFormSubmission = async (formData: MenuItemFormValues) => {
        if (!restaurantId) {
            toast({
                message: 'Invalid request.',
                type: 'error',
            });
            return;
        }

        try {
            if (menuItemId) {
                // Handle Update Flow
                await dispatch(
                    editMenuItem({
                        id: menuItemId,
                        item: formData,
                    }),
                ).unwrap();
                toast({
                    message: 'Menu item updated successfully',
                    type: 'success',
                });
            } else {
                // Handle Creation Flow
                await dispatch(
                    addMenuItem({
                        restaurantId,
                        item: formData,
                    }),
                ).unwrap();
                toast({
                    message: 'Menu item created successfully',
                    type: 'success',
                });
            }

            await navigate(routeBuilders.restaurantDetails(restaurantId));
        } catch {
            toast({
                message: 'Unable to complete request. Please try again',
                type: 'error',
            });
        }
    };

    if (isPageLoading) {
        return <FullScreenLoader message="Loading Menu Item Details..." />;
    }

    return (
        <MenuForm
            menuItemId={menuItemId}
            initialValues={initialData}
            categories={categories}
            onSubmit={handleFormSubmission}
        />
    );
};
