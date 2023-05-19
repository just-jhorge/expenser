import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budgets: [],
    isLoading: false,
    message: "",
};

const budgetsSlice = createSlice({
    name: "budgets",
    initialState,
    reducers: {
        addToBudget: (state, action) => {
            state.budgets = [action.payload, ...state.budgets];
        },
        removeFromBudgets: (state, action) => {
            state.budgets = state.budgets.filter((budget) => budget.budgetId !== action.payload);
        },
        addToBudgetExpenses: () => {
            console.log("Add expenses functionality to be added");
        },
    },
});

export const { addToBudget, removeFromBudgets, addToBudgetExpenses } = budgetsSlice.actions;
export default budgetsSlice.reducer;
