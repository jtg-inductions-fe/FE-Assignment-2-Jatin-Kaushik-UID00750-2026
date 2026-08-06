import { Stack } from '@mui/material';

import { UiButton } from '@components/UiButton';

import { InteractiveActionsZone } from './RestaurantCard.styles';
import { RestaurantOwnerCardProps } from './RestaurantCard.types';
import { RestaurantCardBase } from './RestaurantCardBase.component';

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
