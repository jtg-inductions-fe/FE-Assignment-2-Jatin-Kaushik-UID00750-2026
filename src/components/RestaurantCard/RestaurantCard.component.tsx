import { CardContent, Stack, Typography } from '@mui/material';

import { UiButton } from '@components/UiButton/UiButton.component';

import {
    CardActionLink,
    CuisinesTypography,
    DietChip,
    ImageContainer,
    InteractiveActionsZone,
    StatusChip,
    StyledCard,
    StyledCardMedia,
} from './RestaurantCard.styles';
import { RestaurantCardProps } from './RestaurantCard.types';

/**
 * Presentational card component representing individual restaurant items.
 * Implements accessible block link architectures for nested action zones.
 */
export const RestaurantCard = ({
    id,
    name,
    cuisines,
    vegType,
    imageUrl,
    isClosed,
    showQuickActions = false,
    imageAltText,
    onEdit,
    onDelete,
}: RestaurantCardProps) => {
    const cuisineListString = cuisines.join(', ');

    const dietConfigurations = {
        veg: {
            label: 'Veg',
            color: 'success' as const,
            ariaLabel: 'Vegetarian selection only',
        },
        'non-veg': {
            label: 'Non-Veg',
            color: 'error' as const,
            ariaLabel: 'Non vegetarian selection only',
        },
        both: {
            label: 'Veg & Non-Veg',
            color: 'warning' as const,
            ariaLabel: 'Serves both Vegetarian and Non Vegetarian dishes',
        },
    };

    const diet = dietConfigurations[vegType];

    return (
        <StyledCard elevation={2}>
            <CardActionLink
                to={`/restaurants/${id}`}
                aria-label={`View full details for restaurant ${name}`}
            />

            <ImageContainer $isClosed={isClosed}>
                <DietChip
                    label={diet.label}
                    color={diet.color}
                    variant="outlined"
                    size="small"
                />

                {isClosed && (
                    <StatusChip
                        label="Closed"
                        color="error"
                        aria-live="polite"
                    />
                )}

                <StyledCardMedia
                    component="img"
                    image={imageUrl}
                    alt={imageAltText || `${name} thumbnail image`}
                />
            </ImageContainer>

            <CardContent>
                <Typography variant="h6" component="h2">
                    {name}
                </Typography>

                <CuisinesTypography
                    variant="body2"
                    color="text.secondary"
                    aria-label={`Serves cuisines: ${cuisineListString}`}
                >
                    {cuisineListString}
                </CuisinesTypography>
            </CardContent>

            {showQuickActions && (
                <InteractiveActionsZone>
                    <Stack direction="row" spacing={2}>
                        <UiButton
                            size="small"
                            variant="outlined"
                            color="success"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onEdit) onEdit();
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
                                if (onDelete) onDelete();
                            }}
                        >
                            Delete
                        </UiButton>
                    </Stack>
                </InteractiveActionsZone>
            )}
        </StyledCard>
    );
};
