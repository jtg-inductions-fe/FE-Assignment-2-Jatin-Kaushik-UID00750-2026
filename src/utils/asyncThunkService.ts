import { AsyncThunkOptions, createAsyncThunk } from '@reduxjs/toolkit';

export interface ServiceActions<Arg, Returned> {
    type: string;
    service: (payload: Arg) => Promise<Returned>;
    fallbackMessage: string;
}

const toErrorMessage = (error: unknown, fallback: string): string =>
    error instanceof Error ? error.message : fallback;

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
