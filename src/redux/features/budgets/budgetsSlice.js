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
            state.budgets = [...state.budgets, action.payload];
        },
        removeFromBudgets: (state, action) => {
            state.budgets = state.budgets.filter((budget) => budget.budgetId !== action.payload);
        },
        addToBudgetExpenses: (state, action) => {},
    },
});

export const { addToBudget, removeFromBudgets, addToBudgetExpenses } = budgetsSlice.actions;
export default budgetsSlice.reducer;
