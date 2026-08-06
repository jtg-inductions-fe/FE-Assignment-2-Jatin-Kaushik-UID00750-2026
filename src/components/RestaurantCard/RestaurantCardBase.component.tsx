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
