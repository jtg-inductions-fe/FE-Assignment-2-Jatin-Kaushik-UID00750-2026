import { Box } from '@mui/material';

import {
    HeaderContainer,
    PageSubline,
    PageTitle,
    TitleGroup,
} from './PageHeader.styles';
import { PageHeaderProps } from './PageHeader.types';

/**
 * A header layout displayed at the top of every page of the application
 *
 * @param props - The component properties
 * @param props.title - The primary main heading text for the page
 * @param props.subline - Optional secondary text for context or instructions
 * @param props.action - Optional custom component (like a button or menu) placed on the right side.
 */

export const PageHeader = ({ title, subline, action }: PageHeaderProps) => (
    <HeaderContainer>
        <TitleGroup>
            <PageTitle variant="h2" component="h1">
                {title}
            </PageTitle>
            {subline && <PageSubline variant="body1">{subline}</PageSubline>}
        </TitleGroup>
        {action && <Box>{action}</Box>}
    </HeaderContainer>
);
