export const breakDown = (budgetAmount, budgetExpenses, budgetCategory) => {
    if (budgetExpenses.length == 0 && budgetCategory == "savings") {
        const amountSaved = 0;
        const amountDue = budgetAmount;
        const text = "Start saving already";

        return { amountSaved, amountDue, text };
    } else if (budgetExpenses.length !== 0 && budgetCategory == "savings") {
        const newArr = [];
        budgetExpenses.forEach((expense) => {
            newArr.push(expense.expenseAmount);
        });

        const amountSaved = newArr.reduce((accu, currentVal) => accu + currentVal, 0);
        const amountDue = budgetAmount - amountSaved < 0 ? 0 : budgetAmount - amountSaved;

        const text = amountSaved >= budgetAmount ? "You have reached your target" : "Please keep saving";

        return { amountSaved, amountDue, text };
    }

    if (budgetExpenses.length == 0 && budgetCategory == "expenditure") {
        const amountSpent = 0;
        const amountLeft = budgetAmount;
        const text = "More money to spend";

        return { amountSpent, amountLeft, text };
    } else if (budgetExpenses.length !== 0 && budgetCategory == "expenditure") {
        const newArr = [];
        budgetExpenses.forEach((expense) => {
            newArr.push(expense.expenseAmount);
        });

        const amountSpent = newArr.reduce((accu, currentVal) => accu + currentVal, 0);
        const amountLeft = budgetAmount - amountSpent;

        const text = amountSpent > budgetAmount ? "You have overspent" : "You still have money to spend";

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
