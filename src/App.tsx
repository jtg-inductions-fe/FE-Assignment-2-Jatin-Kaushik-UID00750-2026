import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import FullScreenLoader from '@components/FullScreenLoader/FullScreenLoader.component';
import FeedbackProvider from '@containers/feedbacks/FeedbackProvider';
import { router } from '@routes';
import { persistor, store } from '@store/store';
import { theme } from '@theme';

const App = () => (
    <Provider store={store}>
        <PersistGate
            loading={<FullScreenLoader message="Loading..." />}
            persistor={persistor}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
                <FeedbackProvider />
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

export default App;
