import { Box } from '@mui/material';

import {
    HeaderContainer,
    PageSubline,
    PageTitle,
    TitleGroup,
} from './PageHeader.styles';
import { PageHeaderProps } from './PageHeader.types';

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
