import { Link as RouterLink } from 'react-router-dom';

import { ShoppingCartOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import { ROUTES } from '@constant';

/**
 * A shopping cart button icon with a visual number badge
 * Clicking this button redirects the user to the main shopping cart page
 *
 * @param props - The component properties
 * @param props.count - The number of total items currently added to the cart
 */

export const CartBadge = ({ count }: { count: number }) => (
    <Tooltip title="Cart">
        <IconButton aria-label="cart" component={RouterLink} to={ROUTES.CART}>
            <Badge badgeContent={count} color="primary">
                <ShoppingCartOutlined />
            </Badge>
        </IconButton>
    </Tooltip>
);
