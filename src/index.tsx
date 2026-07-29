import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import FeedbackProvider from '@containers/feedbacks/FeedbackProvider';
import { store } from '@store/store';
import { theme } from '@theme';

import { router } from './routes/router';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
                <FeedbackProvider />
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
