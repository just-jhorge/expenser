export const breakDown = (budgetAmount, budgetExpenses, budgetCategory) => {
    if (budgetExpenses.length == 0 && budgetCategory == "savings") {
        const amountSaved = 0;
        const amountDue = budgetAmount;
        const text = "Start saving already";

        return { amountSaved, amountDue, text };
    } else if (budgetExpenses.length !== 0 && budgetCategory == "savings") {
        const amountSaved = 100;
        const amountDue = 200;
        const text = "Saving...";

        return { amountSaved, amountDue, text };
    }

    if (budgetExpenses.length == 0 && budgetCategory == "expenditure") {
        const amountSpent = 0;
        const amountLeft = budgetAmount;
        const text = "More money to spend";

        return { amountSpent, amountLeft, text };
    } else if (budgetExpenses.length !== 0 && budgetCategory == "expenditure") {
        const amountSpent = 100;
        const amountLeft = 1000;
        const text = "More money to spend";

        return { amountSpent, amountLeft, text };
    }
};

export const bgColor = (budgetCategory) => {
    if (budgetCategory == "savings") {
        return "bg-green-500";
    } else if (budgetCategory == "expenditure") {
        return "bg-fuchsia-500";
    } else {
        return null;
    }
};
