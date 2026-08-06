import { Stack } from '@mui/material';

import { UiButton } from '@components/UiButton';

import { InteractiveActionsZone } from './RestaurantCard.styles';
import { RestaurantOwnerCardProps } from './RestaurantCard.types';
import { RestaurantCardBase } from './RestaurantCardBase.component';

/**
 * Owner variant of the restaurant display card.
 *
 * @param props - The component properties.
 * @param props.onEdit - Callback function executed when the modification button is pressed.
 * @param props.onDelete - Callback function executed when the removal button is pressed.
 * @param props.baseProps - All remaining properties passed down directly to the base layout structure.
 */

export const RestaurantOwnerCard = ({
    onEdit,
    onDelete,
    ...baseProps
}: RestaurantOwnerCardProps) => (
    <RestaurantCardBase {...baseProps}>
        <InteractiveActionsZone>
            <Stack direction="row" spacing={2}>
                <UiButton
                    size="small"
                    variant="outlined"
                    color="success"
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit?.();
                    }}
                >
                    Edit
                </UiButton>
                <UiButton
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete?.();
                    }}
                >
                    Delete
                </UiButton>
            </Stack>
        </InteractiveActionsZone>
    </RestaurantCardBase>
);
