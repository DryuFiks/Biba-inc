import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCheckUser,  fetchLogOut, fetchSignIn, fetchSignUp } from "../../App/api";
import type { AuthState, UserSignIn, UserSignUp } from "./types";

const initialState: AuthState = {
    auth: undefined,
    error: undefined,
    loading: true
};

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());
export const signIn = createAsyncThunk('auth/signIn', (user: UserSignIn) => fetchSignIn(user));
export const signUp = createAsyncThunk('auth/signUp', (user: UserSignUp) => fetchSignUp(user));
export const logOut = createAsyncThunk('auth/logOut', () => fetchLogOut());

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = undefined;
        }
    },
    extraReducers: (builder) => {
    builder
        .addCase(checkUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(checkUser.fulfilled, (state, action) => {
            state.auth = action.payload;
            state.loading = false;
        })
        .addCase(checkUser.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        })
        .addCase(signUp.fulfilled, (state, action) => {
            state.auth = action.payload;
        })
        .addCase(signUp.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.auth = action.payload;
        })
        .addCase(signIn.rejected, (state, action) => {
            state.error = action.error.message;
        })
        .addCase(logOut.fulfilled, (state) => {
            state.auth = undefined;
        })
        .addCase(logOut.rejected, (state, action) => {
            state.error = action.error.message;
        });
    },
});
export const { clearError } = authSlice.actions
export default authSlice.reducer
