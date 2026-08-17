import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader';
import { MenuItemCustomerCard } from '@components/MenuItemCard/MenuItemCustomerCard.component';
import { CategorizedMenuList } from '@containers/CategorizedMenuList/CategorizedMenuList.container';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { selectCartItemById } from '@store/selectors/cartSelector';
import { selectCategorizedMenu } from '@store/selectors/menuSelector';
import { addToCart, updateQuantity } from '@store/slices/cartSlice';
import { fetchMenuByRestaurant } from '@store/thunks/menuThunk';
import { MenuItem } from '@types';

/** Container component for displaying the customer's menu list.
 */
export const CustomerMenuList = ({ isClosed }: { isClosed: boolean }) => {
    const dispatch = useAppDispatch();
    const toast = useToast();
    const { restaurantId } = useParams<{ restaurantId: string }>();

    const categorizedMenuData = useAppSelector(selectCategorizedMenu);
    const cart = useAppSelector((state) => state.cart);
    const { selectedRestaurant } = useAppSelector((state) => state.restaurants);

    const isLoading = useAppSelector(
        (state) => state.menu.status === 'loading',
    );

    const getItemQuantity = (menuItemId: string): number => {
        const cartItem = selectCartItemById({ cart: cart }, menuItemId);
        return cartItem ? cartItem.quantity : 0;
    };

    useEffect(() => {
        if (!restaurantId) return;
        dispatch(fetchMenuByRestaurant(restaurantId))
            .unwrap()
            .catch(() => {
                toast({
                    message: 'Failed to load restaurant menu.',
                    type: 'error',
                });
            });
    }, [restaurantId, dispatch, toast]);

    /** Handles adding a menu item to the cart.
     */
    const handleAddToCart = (item: MenuItem) => {
        const newCartItem = {
            menuItemId: item.id,
            name: item.name,
            price: item.price,
            imageUrl: item.imageUrl,
        };

        if (!selectedRestaurant?.name) {
            toast({
                message:
                    'failed to add item to cart! Please reload and try again',
                type: 'error',
            });
            return;
        }

        dispatch(
            addToCart({
                item: newCartItem,
                restaurantId: item.restaurantId,
                restaurantName: selectedRestaurant.name,
            }),
        );
    };

    /** Handles incrementing the quantity of a menu item in the cart.
     */
    const handleIncrement = (item: MenuItem) => {
        const currentQty = getItemQuantity(item.id);
        dispatch(
            updateQuantity({
                menuItemId: item.id,
                quantity: currentQty + 1,
            }),
        );
    };

    /** Handles decrementing the quantity of a menu item in the cart.
     */
    const handleDecrement = (item: MenuItem) => {
        const currentQty = getItemQuantity(item.id);
        if (currentQty <= 0) return;
        dispatch(
            updateQuantity({ menuItemId: item.id, quantity: currentQty - 1 }),
        );
    };

    if (isLoading) {
        return <FullScreenLoader message="Loading restaurant menu..." />;
    }

    return (
        <CategorizedMenuList
            categorizedData={categorizedMenuData}
            renderItemCard={(item) => {
                const currentQuantity = getItemQuantity(item.id);
                const computedAvailableStock = item.stock - currentQuantity;

                return (
                    <MenuItemCustomerCard
                        item={{ ...item, stock: computedAvailableStock }}
                        quantity={currentQuantity}
                        isAvailable={computedAvailableStock > 0}
                        disabled={isClosed}
                        onIncrement={() => handleIncrement(item)}
                        onDecrement={() => handleDecrement(item)}
                        onAddToCart={() => handleAddToCart(item)}
                    />
                );
            }}
        />
    );
};
