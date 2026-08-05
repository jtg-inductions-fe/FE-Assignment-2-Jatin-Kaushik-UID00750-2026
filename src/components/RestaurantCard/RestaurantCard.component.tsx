import { CardContent, Stack, Typography } from '@mui/material';

import { UiButton } from '@components/UiButton';

import { dietConfigurations } from './RestaurantCard.config';
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
 * Card component representing individual restaurants
 *
 * @param props - The component properties
 * @param props.id - Unique identifier for the restaurant
 * @param props.name - Name of the restaurant
 * @param props.cuisines - Array of cuisine types served by the restaurant
 * @param props.vegType - Dietary type: 'veg', 'non-veg', or 'both'
 * @param props.imageUrl - URL for the restaurant's thumbnail image
 * @param props.isClosed - Boolean indicating if the restaurant is currently closed
 * @param props.showQuickActions - Optional boolean to show edit/delete buttons
 * @param props.imageAltText - Optional alt text for the image for accessibility
 * @param props.onEdit - Optional callback function triggered when the edit button is clicked
 * @param props.onDelete - Optional callback function triggered when the delete button is clicked
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
