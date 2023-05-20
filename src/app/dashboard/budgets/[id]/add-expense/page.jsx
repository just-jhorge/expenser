"use client";

import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { Input, Select } from "@/components/InputFields/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addToBudgetExpenses } from "@/redux/features/budgets/budgetsSlice";

export default function Page({ params: { id } }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { budgets } = useSelector((state) => state.budgets);
    const budget = budgets.filter((budget) => budget.budgetId == id)[0];

    const initialValues = {
        expenseId: "",
        expenseName: "",
        expenseCategory: "",
        expenseAmount: "",
    };

    const validationSchema = Yup.object().shape({
        expenseName: Yup.string().required("Required!"),
        expenseCategory: Yup.string().oneOf(["savings", "expenditure"], "Invalid budget category").required("Required"),
        expenseAmount: Yup.number().required("Required"),
    });

    const handleSubmit = (values) => {
        dispatch(addToBudgetExpenses({ ...values, id, expenseId: uuidv4() }));
        router.push(`/dashboard/budgets/${id}`);
    };

    return (
        <div className="h-full w-full flex-center">
            <div className="w-full md:w-1/3">
                <p className="mb-7 text-center">
                    Add a new expense/saving for <span className="font-bold italic">{budget.budgetName}</span>
                </p>
                <div className="p-10 w-full bg-white rounded-lg shadow-md">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form className="flex flex-col gap-5">
                            <Input
                                label="Expense Name"
                                name="expenseName"
                                type="text"
                                placeholder="Expense/Savings Name"
                            />
                            <Select label="Expense Category" name="expenseCategory">
                                <option value="">Select expense category</option>
                                <option value="savings">Savings</option>
                                <option value="expenditure">Expenditure</option>
                            </Select>
                            <Input label="Amount" name="expenseAmount" type="number" placeholder="Expense Amount" />
                            <button className="w-full bg-gray-800 text-white py-3 rounded-md" type="submit">
                                {loading ? "Adding Expense..." : "Submit"}
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}
