"use client";

import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Input, Radio, Select } from "@/components/InputFields/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addToBudget } from "@/redux/features/budgets/budgetsSlice";
import { useRouter } from "next/navigation";

export default function Page() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const initialValues = {
        budgetId: "",
        budgetName: "",
        budgetAmount: "",
        budgetStartDate: "",
        budgetEndDate: "",
        budgetCategory: "",
        budgetStatus: "",
    };

    const validationSchema = Yup.object().shape({
        budgetName: Yup.string().required("Required!"),
        budgetStartDate: Yup.date().required("Required!"),
        budgetEndDate: Yup.date().required("Required!"),
        budgetAmount: Yup.number().required("Required!"),
        budgetCategory: Yup.string()
            .oneOf(["savings", "expenditure"], "Please select a category")
            .required("Required!"),
        budgetStatus: Yup.boolean().required("Required!"),
    });

    const handleSubmit = (values) => {
        dispatch(
            addToBudget({
                ...values,
                budgetId: uuidv4(),
                budgetExpenses: [],
            })
        );
        router.push("/dashboard/budgets");
    };

    return (
        <div className="h-full flex-center">
            <div className="p-10 w-full md:w-2/5 bg-white rounded-lg shadow-lg">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="space-y-5">
                        <Input label="Budget Name" name="budgetName" type="text" placeholder="Budget for January" />
                        <div className="w-full grid grid-cols-2 gap-2">
                            <Input
                                label="Budget Start Date"
                                name="budgetStartDate"
                                type="date"
                                placeholder="dd-mm-yyyy"
                            />
                            <Input label="Budget End Date" name="budgetEndDate" type="date" placeholder="31/01/1970" />
                        </div>
                        <Input label="Budget Amount" name="budgetAmount" type="number" placeholder="GHC10,000" />
                        <Select label="Budget Category" name="budgetCategory">
                            <option value="">Select budget category</option>
                            <option value="savings">Savings</option>
                            <option value="expenditure">Expenditure</option>
                        </Select>
                        <div>
                            <h3 className="block mb-2 text-sm font-medium text-gray-800">Budget Status</h3>
                            <div className="flex items-center gap-3">
                                <Radio label="Active" name="budgetStatus" type="radio" value="true" />
                                <Radio label="Not active" name="budgetStatus" type="radio" value="false" />
                            </div>
                        </div>
                        <button className="w-full bg-gray-800 text-white py-3 rounded-md" type="submit">
                            {loading ? "Adding budget..." : "Submit"}
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
