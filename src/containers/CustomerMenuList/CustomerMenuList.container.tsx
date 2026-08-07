import { useState } from 'react';

import { MenuItemCustomerCard } from '@components/MenuItemCard/MenuItemCustomerCard.component';
import { CategorizedMenuList } from '@containers/CategorizedMenuList/CategorizedMenuList.container';
import { MenuCategory, MenuItem } from '@types';

const INITIAL_CATEGORIES: MenuCategory[] = [
    {
        id: 'cat_001',
        restaurantId: 'rst_001',
        name: 'Tandoori Appetizers',
        displayOrder: 1,
    },
    {
        id: 'cat_002',
        restaurantId: 'rst_001',
        name: 'Main Course',
        displayOrder: 2,
    },
    {
        id: 'cat_003',
        restaurantId: 'rst_001',
        name: 'Desserts & Beverages',
        displayOrder: 3,
    },
];

const INITIAL_MENU_ITEMS: MenuItem[] = [
    // --- CATEGORY 1: Tandoori Appetizers (cat_001) ---
    {
        id: 'itm_001',
        restaurantId: 'rst_001',
        categoryId: 'cat_001',
        name: 'Paneer Tikka',
        description:
            'Chargrilled cottage cheese blocks marinated in spiced yogurt, served with onion rings.',
        price: 240,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 15,
    },
    {
        id: 'itm_002',
        restaurantId: 'rst_001',
        categoryId: 'cat_001',
        name: 'Tandoori Malai Broccoli',
        description:
            'Fresh broccoli florets coated in a creamy cheese and cardamom marinade, roasted in tandoor.',
        price: 220,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 8,
    },
    {
        id: 'itm_003',
        restaurantId: 'rst_001',
        categoryId: 'cat_001',
        name: 'Soya Chaap Tikka',
        description:
            'Soybean skewers marinated in rich tandoori spices and cooked over charcoal.',
        price: 190,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 0, // Mocking out of stock scenario
    },
    {
        id: 'itm_004',
        restaurantId: 'rst_001',
        categoryId: 'cat_001',
        name: 'Murgh Malai Tikka',
        description:
            'Tender chicken pieces marinated in cream, cashew paste, and mild aromatic spices.',
        price: 320,
        imageUrl: 'https://unsplash.com',
        vegType: 'non-veg',
        stock: 12,
    },

    // --- CATEGORY 2: Main Course (cat_002) ---
    {
        id: 'itm_005',
        restaurantId: 'rst_001',
        categoryId: 'cat_002',
        name: 'Dal Makhani',
        description:
            'Classic black lentils slow-cooked overnight with tomatoes, cream, and pure white butter.',
        price: 280,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 25,
    },
    {
        id: 'itm_006',
        restaurantId: 'rst_001',
        categoryId: 'cat_002',
        name: 'Paneer Butter Masala',
        description:
            'Soft paneer cubes tossed in a rich, smooth, slightly sweet tomato and cashew gravy.',
        price: 310,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 20,
    },
    {
        id: 'itm_007',
        restaurantId: 'rst_001',
        categoryId: 'cat_002',
        name: 'Kadhai Murgh',
        description:
            'Spicy chicken cooked with freshly pounded kadhai masala, bell peppers, and thick onion gravy.',
        price: 360,
        imageUrl: 'https://unsplash.com',
        vegType: 'non-veg',
        stock: 10,
    },
    {
        id: 'itm_008',
        restaurantId: 'rst_001',
        categoryId: 'cat_002',
        name: 'Butter Naan',
        description:
            'Traditional leavened flatbread made from refined flour, baked fresh and glazed with butter.',
        price: 60,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 50,
    },

    // --- CATEGORY 3: Desserts & Beverages (cat_003) ---
    {
        id: 'itm_009',
        restaurantId: 'rst_001',
        categoryId: 'cat_003',
        name: 'Gulab Jamun',
        description:
            'Two golden fried milk-solid dumplings soaked warm in green cardamom sugar syrup.',
        price: 90,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 30,
    },
    {
        id: 'itm_010',
        restaurantId: 'rst_001',
        categoryId: 'cat_003',
        name: 'Kesari Rasmalai',
        description:
            'Flattened cottage cheese balls soaked in chilled, saffron-infused condensed sweet milk.',
        price: 120,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 4,
    },
    {
        id: 'itm_011',
        restaurantId: 'rst_001',
        categoryId: 'cat_003',
        name: 'Mango Lassi',
        description:
            'Thick, creamy yogurt drink blended beautifully with sweet Alphanso mango pulp.',
        price: 110,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 18,
    },
    {
        id: 'itm_012',
        restaurantId: 'rst_001',
        categoryId: 'cat_003',
        name: 'Masala Chaas',
        description:
            'Chilled buttermilk seasoned with roasted cumin powder, black salt, and fresh coriander.',
        price: 70,
        imageUrl: 'https://unsplash.com',
        vegType: 'veg',
        stock: 40,
    },
];

export const CustomerMenuList = () => {
    const [menuItems] = useState<MenuItem[]>(INITIAL_MENU_ITEMS);
    const [categories] = useState<MenuCategory[]>(INITIAL_CATEGORIES);

    // 1. Maintain cart tracking using an ItemID -> Quantity map layout
    const [cart, setCart] = useState<Record<string, number>>({});

    // 2. Fetch active amounts added to the shopping trolley basket
    const getCartQuantity = (itemId: string): number => cart[itemId] || 0;

    // 3. Increment selection safely while observing stock cap ceilings
    const handleIncrement = (item: MenuItem) => {
        const currentQty = getCartQuantity(item.id);

        if (currentQty >= item.stock) {
            alert(`Sorry, only ${item.stock} items left in stock.`);
            return;
        }

        setCart((prevCart) => ({
            ...prevCart,
            [item.id]: currentQty + 1,
        }));
    };

    // 4. Decrement quantities down to zero and remove them cleanly from the state tree
    const handleDecrement = (itemId: string) => {
        const currentQty = getCartQuantity(itemId);
        if (currentQty <= 0) return;

        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (currentQty === 1) {
                delete updatedCart[itemId]; // Clear the key entirely if item count drops to zero
            } else {
                updatedCart[itemId] = currentQty - 1;
            }
            return updatedCart;
        });
    };

    return (
        <CategorizedMenuList
            categories={categories}
            items={menuItems}
            renderItemCard={(item) => {
                const currentQuantity = getCartQuantity(item.id);
                const computedAvailableStock = item.stock - currentQuantity;

                return (
                    <MenuItemCustomerCard
                        item={{ ...item, stock: computedAvailableStock }}
                        quantity={currentQuantity}
                        isAvailable={computedAvailableStock > 0}
                        onIncrement={() => handleIncrement(item)}
                        onDecrement={() => handleDecrement(item.id)}
                    />
                );
            }}
        />
    );
};
