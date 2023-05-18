import Link from "next/link";
import { dateString } from "@/utils/dateString";
import { currencyFormatter } from "@/utils/currencyFormatter";

const BudgetCard = ({
    budgetId,
    budgetTitle,
    budgetAmount,
    budgetCategory,
    budgetStatus,
    budgetStartDate,
    budgetEndDate,
}) => {
    const bgColor = (budgetCategory) => {
        if (budgetCategory == "savings") {
            return "bg-green-500";
        } else if (budgetCategory == "expenditure") {
            return "bg-fuchsia-500";
        } else {
            return null;
        }
    };

    return (
        <Link href={`/dashboard/budgets/${budgetId}`}>
            <div className="relative bg-white px-8 py-7 rounded-md shadow-md">
                <div
                    className={`absolute -top-2 -right-2 text-white ${bgColor(
                        budgetCategory
                    )} px-2 text-xs py-2 rounded-md shadow-md capitalize`}
                >
                    {budgetCategory}
                </div>
                <div className="w-full flex flex-col items-start justify-between">
                    <div className="w-full mb-5">
                        <h3 className="text-2xl font-bold mb-3 truncate">{budgetTitle}</h3>
                        <p>Amount: {currencyFormatter(budgetAmount)}</p>
                        <p>Spent: {currencyFormatter(320)}</p>
                        <p>Remaining: {currencyFormatter(380)}</p>
                        <p>
                            Status:{" "}
                            <span
                                className={`${budgetStatus == "true" ? "text-green-500" : "text-red-500"}  font-medium`}
                            >
                                {budgetStatus == "true" ? "Active" : "Not Active"}
                            </span>
                        </p>
                    </div>
                    <div className="w-full flex items-center justify-between text-xs">
                        <p>Start: {dateString(budgetStartDate)}</p>
                        <p>End: {dateString(budgetEndDate)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BudgetCard;
