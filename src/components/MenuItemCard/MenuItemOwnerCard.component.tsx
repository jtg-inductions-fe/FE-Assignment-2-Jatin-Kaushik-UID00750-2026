import { Delete, Edit } from '@mui/icons-material';

import { StockField } from '@components/StockField';
import { UiButton } from '@components/UiButton';

import { MenuItemOwnerCardProps } from './MenuItemCard.types';
import { MenuItemCardBase } from './MenuItemCardBase.component';

/**
 * Restaurant management menu item card component.
 * Displays item details with quick management controls for stock management, editing, and deletion.
 *
 * @param props.item - Food item payload data containing stock details.
 * @param props.onStockChange - Handler triggered when the inventory number is updated.
 * @param props.onEdit - Handler triggered when the edit button is clicked.
 * @param props.onDelete - Handler triggered when the delete button is clicked.
 */
export const MenuItemOwnerCard = ({
    item,
    onEdit,
    onDelete,
}: MenuItemOwnerCardProps) => (
    <MenuItemCardBase
        item={item}
        showAsDimmed={false}
        actions={
            <>
                <UiButton
                    size="small"
                    onClick={onEdit}
                    color="success"
                    variant="outlined"
                    aria-label="edit menu item"
                >
                    <Edit fontSize="small" />
                </UiButton>
                <UiButton
                    size="small"
                    onClick={onDelete}
                    color="error"
                    variant="outlined"
                    aria-label="delete menu item"
                >
                    <Delete fontSize="small" />
                </UiButton>
            </>
        }
    >
        <StockField stock={item.stock} disabled={true} />
    </MenuItemCardBase>
);
