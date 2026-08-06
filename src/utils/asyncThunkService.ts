import { AsyncThunkOptions, createAsyncThunk } from '@reduxjs/toolkit';

export interface ServiceActions<Arg, Returned> {
    type: string;
    service: (payload: Arg) => Promise<Returned>;
    fallbackMessage: string;
}

/** Extracts an error message string from an unknown error or returns a fallback message. */
const toErrorMessage = (error: unknown, fallback: string): string =>
    error instanceof Error ? error.message : fallback;

/** Higher-order function that generates standardized Redux Async Thunks with built-in error handling. */
export const asyncServiceThunk = <Arg, Returned>(
    actionConfig: ServiceActions<Arg, Returned>,
    options?: AsyncThunkOptions<Arg, { rejectValue: string }>,
) =>
    createAsyncThunk<Returned, Arg, { rejectValue: string }>(
        actionConfig.type,
        async (payload: Arg, thunkAPI) => {
            try {
                return await actionConfig.service(payload);
            } catch (error) {
                return thunkAPI.rejectWithValue(
                    toErrorMessage(error, actionConfig.fallbackMessage),
                );
            }
        },
        options,
    );
