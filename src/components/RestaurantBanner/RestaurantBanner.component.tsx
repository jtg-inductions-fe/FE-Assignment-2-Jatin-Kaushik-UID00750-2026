import { Edit } from '@mui/icons-material';
import { Typography } from '@mui/material';

import { dietConfigurations } from '@components/RestaurantCard/RestaurantCard.config';
import { UiButton } from '@components/UiButton';

import {
    BannerContainer,
    BannerImage,
    ClosedText,
    DetailsSection,
    FloatChip,
    HeaderRow,
    HeroImageWrapper,
    InfoColumn,
    MetadataGrid,
    ScheduleHeaderBlock,
    ScheduleItem,
    ScheduleList,
    TitleContainer,
} from './RestaurantBanner.styles';
import { RestaurantBannerProps } from './RestaurantBanner.types';

/**
 * Displays a restaurant's hero banner, metadata details, and operational schedule.
 * Renders an interactive action to trigger an editing workflow for operating hours.
 *
 * @param {RestaurantBannerProps} props - Component properties.
 * @param {object} props.restaurant - Full dataset representing restaurant parameters.
 * @param {function} props.onEditHours - Callback triggered when clicking the "Edit Hours" button.
 */
export const RestaurantBanner = ({
    restaurant,
    onEditHours,
}: RestaurantBannerProps) => {
    const {
        name,
        description,
        cuisines,
        vegType,
        address,
        imageUrl,
        operatingHours,
    } = restaurant;

    const cuisineListString = cuisines.join(', ');
    const diet = dietConfigurations[vegType];
    const fullAddress = `${address.street}, ${address.city}, ${address.state} - ${address.pincode}`;

    return (
        <BannerContainer elevation={1}>
            <HeroImageWrapper>
                <FloatChip
                    label={diet.label}
                    color={diet.color}
                    variant="outlined"
                    size="medium"
                />
                <BannerImage src={imageUrl} alt={`${name} banner image`} />
            </HeroImageWrapper>

            <DetailsSection>
                <HeaderRow>
                    <TitleContainer>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {cuisineListString}
                        </Typography>
                    </TitleContainer>
                </HeaderRow>

                <MetadataGrid>
                    <InfoColumn>
                        <Typography variant="h6" component="h2">
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {description}
                        </Typography>

                        <Typography variant="h6" component="h2">
                            Location
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {fullAddress}
                        </Typography>
                    </InfoColumn>

                    <InfoColumn>
                        <ScheduleHeaderBlock>
                            <Typography variant="h6" component="h2">
                                Operating Hours
                            </Typography>
                            {onEditHours && (
                                <UiButton
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<Edit />}
                                    onClick={onEditHours}
                                    aria-label="Edit operating hours schedule"
                                >
                                    Edit Hours
                                </UiButton>
                            )}
                        </ScheduleHeaderBlock>

                        <ScheduleList>
                            {operatingHours.map((schedule) => (
                                <ScheduleItem
                                    key={schedule.day}
                                    $isClosed={schedule.isClosed}
                                >
                                    <Typography variant="body2">
                                        {schedule.day}
                                    </Typography>
                                    {schedule.isClosed ? (
                                        <ClosedText variant="body2">
                                            Closed
                                        </ClosedText>
                                    ) : (
                                        <Typography variant="body2">
                                            {schedule.openTime} -{' '}
                                            {schedule.closeTime}
                                        </Typography>
                                    )}
                                </ScheduleItem>
                            ))}
                        </ScheduleList>
                    </InfoColumn>
                </MetadataGrid>
            </DetailsSection>
        </BannerContainer>
    );
};
