import { useEffect, useState } from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { CategorizedMenuList } from '@components/CategorizedMenuList/CategorizedMenuList.container';
import { ConfirmDialog } from '@components/ConfirmDialog';
import { FullScreenLoader } from '@components/FullScreenLoader';
import { MenuItemOwnerCard } from '@components/MenuItemCard/MenuItemOwnerCard.component';
import { UiButton } from '@components/UiButton';
import {
    useAppDispatch,
    useAppSelector,
    useConfirmDialog,
    useToast,
} from '@hooks';
import { selectCategorizedMenu } from '@store/selectors/menuSelector';
import { deleteMenuItem, fetchMenuByRestaurant } from '@store/thunks/menuThunk';
import { routeBuilders } from '@utils';

/** Container component for displaying the owner's menu list
 */
export const OwnerMenuList = ({ restaurantId }: { restaurantId: string }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const categorizedMenuData = useAppSelector(selectCategorizedMenu);
    const isLoading = useAppSelector(
        (state) => state.menu.status === 'loading',
    );

    const [selectedIdToDelete, setSelectedIdToDelete] = useState<string | null>(
        null,
    );
    const { isOpen, config, openConfirmDialog, closeConfirmDialog } =
        useConfirmDialog();

    useEffect(() => {
        if (!restaurantId) return;
        dispatch(fetchMenuByRestaurant(restaurantId))
            .unwrap()
            .catch(() => {
                toast({
                    message: 'Failed to retrieve inventory details.',
                    type: 'error',
                });
            });
    }, [restaurantId, dispatch, toast]);

    /** Handles navigation to the menu item edit page for a specific item.
     */
    const handleEdit = async (itemId: string) => {
        await navigate(routeBuilders.menuItemEdit(restaurantId, itemId));
    };

    /** Handles the deletion of a menu item, prompting for confirmation first.
     */
    const handleDelete = (itemId: string) => {
        setSelectedIdToDelete(itemId);
        openConfirmDialog({
            title: 'Delete this menu item?',
            message: 'You would not be able to undo this action',
        });
    };

    /** Handles the cancellation of a menu item deletion, closing the confirmation dialog. */
    const handleDeleteCancel = () => {
        closeConfirmDialog();
        setSelectedIdToDelete(null);
        toast({ message: 'Deletion cancelled', type: 'info' });
    };

    /** Handles the confirmation of a menu item deletion, dispatching the delete action. */
    const handleDeleteConfirm = async () => {
        if (!selectedIdToDelete) return;
        try {
            closeConfirmDialog();
            await dispatch(deleteMenuItem(selectedIdToDelete)).unwrap();
            toast({
                message: 'Menu item removed successfully',
                type: 'success',
            });
        } catch (error) {
            toast({
                message:
                    typeof error === 'string'
                        ? error
                        : 'Failed to delete the menu item.',
                type: 'error',
            });
        } finally {
            setSelectedIdToDelete(null);
        }
    };

    if (isLoading && categorizedMenuData.length === 0) {
        return <FullScreenLoader message="Loading menu details..." />;
    }

    return (
        <>
            <Box marginBlock={'2rem'}>
                <UiButton
                    variant="contained"
                    size="large"
                    component={RouterLink}
                    to={routeBuilders.menuItemNew(restaurantId)}
                >
                    Add Menu Item
                </UiButton>
            </Box>

            <CategorizedMenuList
                categorizedData={categorizedMenuData}
                renderItemCard={(item) => (
                    <MenuItemOwnerCard
                        item={item}
                        onEdit={() => void handleEdit(item.id)}
                        onDelete={() => handleDelete(item.id)}
                    />
                )}
            />

            <ConfirmDialog
                open={isOpen}
                title={config.title}
                message={config.message}
                handleCancel={handleDeleteCancel}
                handleConfirm={() => void handleDeleteConfirm()}
            />
        </>
    );
};
