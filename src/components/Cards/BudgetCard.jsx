import Link from "next/link";
import { dateString } from "@/utils/dateString";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { breakDown } from "@/utils/cardUtils";

const BudgetCard = ({
    budgetId,
    budgetTitle,
    budgetAmount,
    budgetCategory,
    budgetExpenses,
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
                    className={`absolute -top-2 -right-2 ${bgColor(
                        budgetCategory
                    )} text-white px-2 text-xs py-2 rounded-md shadow-md capitalize`}
                >
                    {budgetCategory}
                </div>
                <div className="w-full flex flex-col items-start justify-between">
                    <div className="w-full mb-8">
                        <h3 className="text-2xl font-semibold mb-7 truncate">{budgetTitle}</h3>
                        <p className="mb-2">Amount: {currencyFormatter(budgetAmount)}</p>
                        <hr />
                        <div className="my-2">
                            {budgetCategory == "expenditure" && (
                                <>
                                    <p>
                                        Amount Spent:{" "}
                                        {currencyFormatter(
                                            breakDown(budgetAmount, budgetExpenses, budgetCategory).amountSpent
                                        )}
                                    </p>
                                    <p className="mb-2">
                                        Amount Left:{" "}
                                        {currencyFormatter(
                                            breakDown(budgetAmount, budgetExpenses, budgetCategory).amountLeft
                                        )}
                                    </p>
                                </>
                            )}
                            {budgetCategory == "savings" && (
                                <>
                                    <p>
                                        Amount Saved:{" "}
                                        {currencyFormatter(
                                            breakDown(budgetAmount, budgetExpenses, budgetCategory).amountSaved
                                        )}
                                    </p>
                                    <p className="mb-2">
                                        Amount Due:{" "}
                                        {currencyFormatter(
                                            breakDown(budgetAmount, budgetExpenses, budgetCategory).amountDue
                                        )}
                                    </p>
                                </>
                            )}
                        </div>
                        <hr />
                        <p className="mt-2 text-sm">
                            Status:{" "}
                            <span className="italic text-gray-500">
                                {breakDown(budgetAmount, budgetExpenses, budgetCategory).text}
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
