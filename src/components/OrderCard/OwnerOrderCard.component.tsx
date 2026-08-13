import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import { UiButton } from '@components/UiButton';
import { ORDER_STATUS } from '@constant';
import { ORDER_STATUS_FLOW, OrderStatus } from '@types';

import { BaseOrderCard } from './BaseOrderCard.component';
import { ActionPanel } from './OrderCard.styles';
import { OwnerOrderCardProps } from './OrderCard.types';

/** Function to get next order status */
const getNextStatus = (currentStatus: OrderStatus): OrderStatus | null => {
    if (
        currentStatus === ORDER_STATUS.REJECTED ||
        currentStatus === ORDER_STATUS.DELIVERED
    )
        return null;
    const index = ORDER_STATUS_FLOW.indexOf(currentStatus);
    if (index === -1 || index === ORDER_STATUS_FLOW.length - 1) return null;
    return ORDER_STATUS_FLOW[index + 1];
};

/** Order Card component for owners only */
export const OwnerOrderCard = ({
    order,
    onUpdateStatus,
}: OwnerOrderCardProps) => {
    const [expanded, setExpanded] = useState(false);

    const nextStatus = getNextStatus(order.status);
    const isTerminalState =
        order.status === ORDER_STATUS.DELIVERED ||
        order.status === ORDER_STATUS.REJECTED;

    return (
        <>
            <BaseOrderCard
                order={order}
                expanded={expanded}
                onAccordionChange={(_, isExpanded) => setExpanded(isExpanded)}
            >
                <Box>
                    <Typography variant="subtitle1" gutterBottom>
                        Manage Order Flow
                    </Typography>
                    {isTerminalState ? (
                        <Box>
                            {order.status === ORDER_STATUS.REJECTED ? (
                                <Typography variant="body2" color="error">
                                    {order.status.toUpperCase() +
                                        ': ' +
                                        order.rejectionReason}
                                </Typography>
                            ) : (
                                <Typography variant="body2" color="success">
                                    Order completed. Status:{' '}
                                    <strong>
                                        {order.status.toUpperCase()}
                                    </strong>
                                </Typography>
                            )}
                        </Box>
                    ) : (
                        <ActionPanel>
                            {nextStatus && (
                                <UiButton
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                        onUpdateStatus(order.id, nextStatus)
                                    }
                                >
                                    Mark as {nextStatus.replace(/-/g, ' ')}
                                </UiButton>
                            )}
                            {order.status === ORDER_STATUS.PENDING && (
                                <UiButton
                                    variant="outlined"
                                    color="error"
                                    onClick={() =>
                                        onUpdateStatus(
                                            order.id,
                                            ORDER_STATUS.REJECTED,
                                            'The Restaurant is unable to process this order',
                                        )
                                    }
                                >
                                    Reject Order
                                </UiButton>
                            )}
                        </ActionPanel>
                    )}
                </Box>
            </BaseOrderCard>
        </>
    );
};
