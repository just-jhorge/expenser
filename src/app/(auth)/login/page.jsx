"use client";

import * as Yup from "yup";
import Link from "next/link";
import { Form, Formik } from "formik";
import { Input } from "@/components/InputFields/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/auth/authSlice";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Required!"),
        password: Yup.string().min(6, "Password must be at least 6 characters long").required("Required!"),
    });

    const handleSubmit = (values) => {
        try {
            setIsLoading(true);
            if (values.email == "sarpongk247@gmail.com" && values.password == "111111") {
                dispatch(login());
                router.push("/dashboard/budgets");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="login h-screen w-screen flex-center">
            <div className="bg-white w-6/7 md:w-1/4 p-5 md:p-10 rounded-md shadow-md">
                <h3 className="text-center text-xl md:text-3xl mb-10">Expenser - Login</h3>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="space-y-5">
                        <Input label="Email" name="email" type="text" placeholder="john.doe@company.com" />
                        <Input label="Password" name="password" type="password" placeholder="******" />
                        <div className="flex justify-between text-xs md:text-sm">
                            <p className="text-blue-500">Forgot password?</p>
                            <div>
                                New?{" "}
                                <span className="text-blue-500">
                                    <Link href="/register">Sign up</Link>
                                </span>
                            </div>
                        </div>
                        <button
                            className="w-full bg-gray-800 text-xs md:text-base text-white py-3 rounded-md"
                            type="submit"
                        >
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                    </Form>
                </Formik>
            </div>
        </main>
    );
}
