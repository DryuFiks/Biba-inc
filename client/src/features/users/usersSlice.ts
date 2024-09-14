import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LoadUsersState } from "./type";
import { fetchLoadUsers } from "../../App/api";

const initialState: LoadUsersState = {
    users: [],
    error: undefined,
};

export const loadUsers = createAsyncThunk('users/load', () => fetchLoadUsers());

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(loadUsers.rejected, (state, action) => {
            state.error = action.error && action.error.message;
        })
    },
});

export default usersSlice.reducer
