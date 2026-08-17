import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Typography,
} from '@mui/material';

import { formatIndianCurrency } from '@utils';

import {
    DetailContainer,
    FinancialRow,
    GridSection,
    InnerInfoBlock,
    ItemRow,
    StatusChip,
    StyledAccordion,
    SummaryContainer,
} from './OrderCard.styles';
import { BaseOrderCardProps } from './OrderCard.types';

export const BaseOrderCard = ({
    order,
    expanded,
    onAccordionChange,
    children,
}: BaseOrderCardProps) => {
    const { street, city, state, pincode } = order.deliveryAddress;
    return (
        <StyledAccordion expanded={expanded} onChange={onAccordionChange}>
            {/* SUMMARY HEADER VIEW */}
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <SummaryContainer>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            ORDER ID
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                            #{order.id.slice(-8).toUpperCase()}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            TOTAL
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                            {formatIndianCurrency(order.total)}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            DATE PLACED
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                            {new Date(order.placedAt).toLocaleDateString()}
                        </Typography>
                    </Box>
                    <Box>
                        <StatusChip
                            ownerState={{ status: order.status }}
                            label={order.status.replace(/-/g, ' ')}
                            variant="outlined"
                        />
                    </Box>
                </SummaryContainer>
            </AccordionSummary>

            {/* EXPANDED DETAILS DETAIL CONTAINER */}
            <AccordionDetails>
                <Divider />
                <DetailContainer>
                    {/* Dynamic Action / Stepper Slot */}
                    {children}

                    <Divider />

                    {/* SHARED ORDER SUMMARY AND ADDRESS DATA SECTION */}
                    <GridSection>
                        <InnerInfoBlock>
                            <Typography variant="h6" gutterBottom>
                                Items Summary
                            </Typography>
                            {order.items.map((item) => (
                                <ItemRow key={item.menuItemId}>
                                    <Typography variant="body2">
                                        {item.name}{' '}
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                        >
                                            x{item.quantity}
                                        </Typography>
                                    </Typography>
                                    <Typography variant="body2">
                                        {formatIndianCurrency(
                                            item.price * item.quantity,
                                        )}
                                    </Typography>
                                </ItemRow>
                            ))}
                            <Box>
                                <FinancialRow>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Subtotal
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {formatIndianCurrency(order.subtotal)}
                                    </Typography>
                                </FinancialRow>
                                <FinancialRow>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Booking Fee
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {formatIndianCurrency(order.bookingFee)}
                                    </Typography>
                                </FinancialRow>
                                <FinancialRow>
                                    <Typography variant="body2">
                                        Total Amount
                                    </Typography>
                                    <Typography variant="body2">
                                        {formatIndianCurrency(order.total)}
                                    </Typography>
                                </FinancialRow>
                            </Box>
                        </InnerInfoBlock>

                        <InnerInfoBlock>
                            <Typography variant="h6" gutterBottom>
                                Logistics Info
                            </Typography>
                            <Box mb={2}>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    RESTAURANT
                                </Typography>
                                <Typography variant="body2">
                                    {order.restaurantName}
                                </Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    CUSTOMER
                                </Typography>
                                <Typography variant="body2">
                                    {order.customerName}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    DELIVERY ADDRESS
                                </Typography>
                                <Typography variant="body2">
                                    {street}, {city}, {state} - {pincode}
                                </Typography>
                            </Box>
                        </InnerInfoBlock>
                    </GridSection>
                </DetailContainer>
            </AccordionDetails>
        </StyledAccordion>
    );
};
