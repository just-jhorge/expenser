import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    budgets: [],
    isLoading: false,
    message: "",
};

const budgetsSlice = createSlice({
    name: "budgets",
    initialState,
    reducers: {
        // adding a budget to the state of budgets
        addToBudget: (state, action) => {
            state.budgets = [action.payload, ...state.budgets];
        },
        // removing a budget from the state of budgets
        removeFromBudgets: (state, action) => {
            state.budgets = state.budgets.filter((budget) => budget.budgetId !== action.payload);
        },
        // adding an expense to a budget list of expenses
        addToBudgetExpenses: (state, action) => {
            const { id, ...items } = action.payload;
            const budgetIndex = state.budgets.findIndex((budget) => budget.budgetId == id);

            state.budgets[budgetIndex] = {
                ...state.budgets[budgetIndex],
                budgetExpenses: [...state.budgets[budgetIndex].budgetExpenses, items],
            };
        },
    },
});

export const { addToBudget, removeFromBudgets, addToBudgetExpenses } = budgetsSlice.actions;
export default budgetsSlice.reducer;
