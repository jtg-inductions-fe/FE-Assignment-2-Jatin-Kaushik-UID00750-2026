import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Fallback } from '@components/Fallback/Fallback.component';

/**
 * Fallback screen for non-existent routes (404 errors).
 */

export const NotFoundPage = () => (
    <Fallback
        statusCode={404}
        title="Page not found"
        description="The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable."
        isLink={true}
        href="/"
        buttonName="Go back home"
        ButtonIcon={ArrowBackIcon}
    ></Fallback>
);
