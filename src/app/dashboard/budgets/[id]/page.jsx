"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { removeFromBudgets } from "@/redux/features/budgets/budgetsSlice";
import { useRouter } from "next/navigation";

export default function Page({ params: { id } }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const { budgets } = useSelector((state) => state.budgets);
    const budget = budgets.filter((budget) => budget.budgetId == id)[0];
    console.log(budget);

    const handleDelete = (id) => {
        dispatch(removeFromBudgets(id));
        router.push("/dashboard/budgets");
    };

    const totalAmount = (arr) => {
        const newArray = [];
        arr.forEach((item) => {
            newArray.push(item.expenseAmount);
        });

        const tAmount = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return tAmount;
    };

    return (
        <>
            {budget ? (
                <>
                    <div className="mb-10 flex items-start justify-between">
                        <div>
                            <h3 className="text-5xl font-medium mb-4">{budget.budgetName}</h3>
                            <p className="text-3xl">Total amount allocated: {currencyFormatter(budget.budgetAmount)}</p>
                        </div>
                        <div className="space-x-10">
                            <button title="Edit" className="p-3">
                                <AiOutlineEdit className="text-5xl" />
                            </button>
                            <button onClick={() => handleDelete(id)} title="Delete" className="p-3">
                                <AiOutlineDelete className="text-5xl text-red-500" />
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto">
                        {budget.budgetExpenses.length == 0 ? (
                            <div>
                                You have no expenses/savings for this budget. Create one{" "}
                                <Link className="text-blue-500" href={`/dashboard/budgets/${id}/add-expense`}>
                                    👉🏾 here
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="mb-5">
                                    Add a new expense
                                    <Link className="text-blue-500" href={`/dashboard/budgets/${id}/add-expense`}>
                                        👉🏾 here
                                    </Link>
                                </div>
                                <table className="w-full text-sm text-left text-black">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Expense Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Expense Category
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Expense Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {budget.budgetExpenses.map((expense) => (
                                            <tr key={expense.id} className="bg-white border-b">
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                                >
                                                    {expense.expenseName}
                                                </th>
                                                <td className="px-6 py-4 capitalize">{expense.expenseCategory}</td>
                                                <td className="px-6 py-4">
                                                    {currencyFormatter(expense.expenseAmount)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="bg-white">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-bold text-lg text-gray-900 whitespace-nowrap"
                                            >
                                                Total Amount:{" "}
                                            </th>
                                            <td></td>
                                            <td
                                                className={`px-6 py-4 ${
                                                    totalAmount(budget.budgetExpenses) > budget.budgetAmount
                                                        ? "text-red-500"
                                                        : "text-green-500"
                                                }`}
                                            >
                                                {currencyFormatter(totalAmount(budget.budgetExpenses))}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </>
                        )}
                    </div>
                </>
            ) : null}
        </>
    );
}
