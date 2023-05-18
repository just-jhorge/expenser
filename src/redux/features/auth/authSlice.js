import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    message: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.user = "george afrifa";
            state.isLoading = false;
            state.isLoggedIn = true;
            state.message = "Logged in successfully";
        },
        logout: (state) => {
            state.user = null;
            state.isLoading = false;
            state.isLoggedIn = false;
            state.message = "Logged out successfully";
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
