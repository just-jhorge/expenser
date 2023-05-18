import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./auth/authSlice";
import budgetsReducer from "./budgets/budgetsSlice";

export const rootReducer = combineReducers({
    user: userReducer,
    budgets: budgetsReducer,
});
