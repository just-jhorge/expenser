"use client";

import BudgetCard from "@/components/Cards/BudgetCard";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Page() {
    const { budgets } = useSelector((state) => state.budgets);
    const { user } = useSelector((state) => state.user);
    console.log(user);

    return (
        <div>
            {budgets.length == 0 ? (
                <p>
                    You currently have no budgets, add some 👉🏾{" "}
                    <Link className="text-blue-500" href="/dashboard/add-budget">
                        here
                    </Link>
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {budgets.map((budget) => (
                        <BudgetCard
                            key={budget.budgetId}
                            budgetId={budget.budgetId}
                            budgetTitle={budget.budgetName}
                            budgetAmount={budget.budgetAmount}
                            budgetCategory={budget.budgetCategory}
                            budgetExpenses={budget.budgetExpenses}
                            budgetStatus={budget.budgetStatus}
                            budgetStartDate={budget.budgetStartDate}
                            budgetEndDate={budget.budgetEndDate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
