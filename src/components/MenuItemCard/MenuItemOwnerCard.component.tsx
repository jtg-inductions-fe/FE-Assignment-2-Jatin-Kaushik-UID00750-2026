import { Delete, Edit } from '@mui/icons-material';

import { StockField } from '@components/StockField';
import { UiButton } from '@components/UiButton';

import { MenuItemOwnerCardProps } from './MenuItemCard.types';
import { MenuItemCardBase } from './MenuItemCardBase.component';

/**
 * Restaurant management menu item card component.
 * Displays item details with quick management controls for stock management, editing, and deletion.
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
