import { useState } from 'react';

import { Box, Step, StepLabel, Typography } from '@mui/material';

import { ORDER_STATUS } from '@constant';
import { ORDER_STATUS_FLOW } from '@types';

import { BaseOrderCard } from './BaseOrderCard.component';
import { ResponsiveStyledStepper } from './OrderCard.styles';
import { CustomerOrderCardProps } from './OrderCard.types';

/** Order Card component for customers only */
export const CustomerOrderCard = ({ order }: CustomerOrderCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const activeStepIndex =
        order.status === ORDER_STATUS.REJECTED
            ? -1
            : ORDER_STATUS_FLOW.indexOf(order.status);

    return (
        <BaseOrderCard
            order={order}
            expanded={expanded}
            onAccordionChange={(_, isExpanded) => setExpanded(isExpanded)}
        >
            <Box>
                <Typography variant="h6" gutterBottom>
                    Order Progress
                </Typography>
                {order.status === ORDER_STATUS.REJECTED ? (
                    <Typography variant="body2" color="error">
                        Order Cancelled. {order.rejectionReason}
                    </Typography>
                ) : (
                    <ResponsiveStyledStepper
                        activeStep={activeStepIndex}
                        alternativeLabel
                        orientation="horizontal"
                    >
                        {ORDER_STATUS_FLOW.map((label, index) => (
                            <Step key={index}>
                                <StepLabel>
                                    {label.replace(/-/g, ' ')}
                                </StepLabel>
                            </Step>
                        ))}
                    </ResponsiveStyledStepper>
                )}
            </Box>
        </BaseOrderCard>
    );
};
