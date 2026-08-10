import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { FullScreenLoader } from '@components/FullScreenLoader';
import { MenuItemCustomerCard } from '@components/MenuItemCard/MenuItemCustomerCard.component';
import { CategorizedMenuList } from '@containers/CategorizedMenuList/CategorizedMenuList.container';
import { useAppDispatch, useAppSelector, useToast } from '@hooks';
import { selectCategorizedMenu } from '@store/selectors/menuSelector';
import { fetchMenuByRestaurant } from '@store/thunks/menuThunk';
import { MenuItem } from '@types';

/** Container component for displaying the customer's menu list.
 * @param isClosed - Boolean indicating if the restaurant is currently closed.
 */
export const CustomerMenuList = ({ isClosed }: { isClosed: boolean }) => {
    const dispatch = useAppDispatch();
    const toast = useToast();
    const { restaurantId } = useParams<{ restaurantId: string }>();

    const categorizedMenuData = useAppSelector(selectCategorizedMenu);
    const isLoading = useAppSelector(
        (state) => state.menu.status === 'loading',
    );
    const rawItemsCount = useAppSelector((state) => state.menu.items.length);

    useEffect(() => {
        if (!restaurantId) return;
        if (rawItemsCount > 0) return;
        dispatch(fetchMenuByRestaurant(restaurantId))
            .unwrap()
            .catch(() => {
                toast({
                    message: 'Failed to load restaurant menu.',
                    type: 'error',
                });
            });
    }, [restaurantId, dispatch, toast, rawItemsCount]);

    const [cart, setCart] = useState<Record<string, number>>({});
    const getCartQuantity = (itemId: string): number => cart[itemId] || 0;

    /** Handles incrementing the quantity of a menu item in the cart.
     * @param item - The menu item to increment in the cart.
     */
    const handleIncrement = (item: MenuItem) => {
        const currentQty = getCartQuantity(item.id);
        if (currentQty >= item.stock) {
            alert(`Sorry, only ${item.stock} items left in stock.`);
            return;
        }
        setCart((prevCart) => ({ ...prevCart, [item.id]: currentQty + 1 }));
    };

    /** Handles decrementing the quantity of a menu item in the cart.
     * @param itemId - The ID of the menu item to decrement in the cart.
     */
    const handleDecrement = (itemId: string) => {
        const currentQty = getCartQuantity(itemId);
        if (currentQty <= 0) return;
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (currentQty === 1) delete updatedCart[itemId];
            else updatedCart[itemId] = currentQty - 1;
            return updatedCart;
        });
    };

    if (isLoading) {
        return <FullScreenLoader message="Loading restaurant menu..." />;
    }

    return (
        <CategorizedMenuList
            categorizedData={categorizedMenuData}
            renderItemCard={(item) => {
                const currentQuantity = getCartQuantity(item.id);
                const computedAvailableStock = item.stock - currentQuantity;

                return (
                    <MenuItemCustomerCard
                        item={{ ...item, stock: computedAvailableStock }}
                        quantity={currentQuantity}
                        isAvailable={computedAvailableStock > 0}
                        disabled={isClosed}
                        onIncrement={() => handleIncrement(item)}
                        onDecrement={() => handleDecrement(item.id)}
                    />
                );
            }}
        />
    );
};
