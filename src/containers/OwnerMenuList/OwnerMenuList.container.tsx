import { useState } from 'react';

import { MenuItemOwnerCard } from '@components/MenuItemCard/MenuItemOwnerCard.component';
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

// const INITIAL_CATEGORIES: MenuCategory[] = [
//     {
//         id: 'cat_001',
//         restaurantId: 'rst_001',
//         name: 'Tandoori Appetizers',
//         displayOrder: 1,
//     },
// ];

// const INITIAL_MENU_ITEMS: MenuItem[] = [
//     // --- CATEGORY 1: Tandoori Appetizers (cat_001) ---
//     {
//         id: 'itm_001',
//         restaurantId: 'rst_001',
//         categoryId: 'cat_001',
//         name: 'Paneer Tikka',
//         description:
//             'Chargrilled cottage cheese blocks marinated in spiced yogurt, served with onion rings.',
//         price: 240,
//         imageUrl:
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2qdCgepp5tmP9psp1EICxpi3E9eU8JrMwbnZMT8jMw&s=10',
//         vegType: 'veg',
//         stock: 15,
//     },
// ];

export const OwnerMenuList = () => {
    // Maintain dynamic items array state to capture adjustments interactively
    const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_MENU_ITEMS);
    const [categories] = useState<MenuCategory[]>(INITIAL_CATEGORIES);

    // Open your edit drawer/modal framework passing along active reference values
    const handleEdit = (item: MenuItem) => {
        // eslint-disable-next-line
        console.log('Edit', item.name, item.id);
    };

    // Remove selected item securely from display list
    const handleDelete = (itemId: string) => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this menu item?',
        );
        if (confirmed) {
            setMenuItems((prevItems) =>
                prevItems.filter((item) => item.id !== itemId),
            );
            // eslint-disable-next-line
            console.log(`Deleted item matching ID: ${itemId}`);
        }
    };

    return (
        <CategorizedMenuList
            categories={categories}
            items={menuItems}
            renderItemCard={(item) => (
                <MenuItemOwnerCard
                    item={item}
                    onEdit={() => handleEdit(item)}
                    onDelete={() => handleDelete(item.id)}
                />
            )}
        />
    );
};
