import { CardContent, Typography } from '@mui/material';

import { dietConfigurations } from './RestaurantCard.config';
import {
    CardActionLink,
    CuisinesTypography,
    DietChip,
    ImageContainer,
    StatusChip,
    StyledCard,
    StyledCardMedia,
} from './RestaurantCard.styles';
import { RestaurantCardBaseProps } from './RestaurantCard.types';

/**
 * Base layout card for a restaurant listing
 *
 * @param props - The component properties.
 * @param props.id - Unique id used to build the internal navigation link routing.
 * @param props.name - The commercial display name of the restaurant.
 * @param props.cuisines - List of food categories associated with the location.
 * @param props.vegType - Diet categorization key.
 * @param props.imageUrl - Network image endpoint address for the restaurant preview.
 * @param props.isClosed - Boolean flag indicating if restaurant is currently open.
 * @param props.imageAltText - Custom alt text for image.
 * @param props.children - Optional target slot for injection of action buttons or something.
 */

export const RestaurantCardBase = ({
    id,
    name,
    cuisines,
    vegType,
    imageUrl,
    isClosed,
    imageAltText,
    children,
}: RestaurantCardBaseProps) => {
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

            {children}
        </StyledCard>
    );
};
