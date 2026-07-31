import { Refresh } from '@mui/icons-material';

import Fallback from '@components/Fallback/Fallback.component';

export const ErrorPage = () => {
    const handleReloadPage = () => {
        window.location.reload();
    };
    return (
        <Fallback
            statusCode={500}
            title="Something went wrong"
            description="An unexpected error occurred on our end. We are working on
                    getting it fixed. Please try reloading the page or return to
                    safety."
            buttonName="Reload Page"
            ButtonIcon={Refresh}
            buttonAction={handleReloadPage}
        ></Fallback>
    );
};
