import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authService } from './authService';
import {
    AuthState,
    LoginCredentials,
    SignUpPayload,
} from '../types/auth.types';
import { User } from '../types/user.types';

const initialState: AuthState = {
    currentUser: null,
    isAuthenticated: false,
    status: 'idle',
    error: null,
};

const toErrorMessage = (error: unknown, fallback: string): string =>
    error instanceof Error ? error.message : fallback;

export const loginThunk = createAsyncThunk<
    User,
    LoginCredentials,
    { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        return await authService.login(credentials);
    } catch (error) {
        return rejectWithValue(toErrorMessage(error, 'Login failed'));
    }
});

export const signupThunk = createAsyncThunk<
    boolean,
    SignUpPayload,
    { rejectValue: string }
>('auth/signup', async (payload, { rejectWithValue }) => {
    try {
        return await authService.signup(payload);
    } catch (error) {
        return rejectWithValue(toErrorMessage(error, 'Signup failed'));
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            state.status = 'idle';
            state.error = null;
        },
        clearAuthError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(
                loginThunk.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.status = 'succeeded';
                    state.currentUser = action.payload;
                    state.isAuthenticated = true;
                },
            )
            .addCase(loginThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'Login failed';
            })
            .addCase(signupThunk.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signupThunk.fulfilled, (state) => {
                state.status = 'idle';
                state.isAuthenticated = false;
            })
            .addCase(signupThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload ?? 'Signup failed';
            });
    },
});

export const { logout, clearAuthError } = authSlice.actions;

export default authSlice.reducer;
