"use client";

import * as Yup from "yup";
import { useState } from "react";
import { Form, Formik } from "formik";
import Link from "next/link";
import { Input } from "@/components/InputFields/Input";
import { useRouter } from "next/navigation";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Required!"),
        password: Yup.string().min(6, "Password must be at least 6 characters long").required("Required!"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords do not match")
            .required("Required!"),
    });

    const handleSubmit = (values) => {
        try {
            router.push("/dashboard/budgets");
            setIsLoading(true);
            console.log(values);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="signup h-screen w-screen flex-center">
            <div className="bg-white w-6/7 md:w-1/4 p-5 md:p-10 rounded-md shadow-md">
                <h3 className="text-center text-3xl mb-10">Expenser - Sign up</h3>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="space-y-5">
                        <Input label="Email" name="email" type="text" placeholder="john.doe@company.com" />
                        <Input label="Password" name="password" type="password" placeholder="******" />
                        <Input label="Confirm Password" name="confirmPassword" type="password" placeholder="******" />
                        <div className="flex justify-between text-sm">
                            <Link className="text-blue-500" href="/" prefetch={false}>
                                Go Home
                            </Link>
                            <p>
                                Returning?{" "}
                                <span className="text-blue-500">
                                    <Link href="/login">Log in</Link>
                                </span>
                            </p>
                        </div>
                        <button className="w-full bg-gray-800 text-white py-2 rounded-md" type="submit">
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                    </Form>
                </Formik>
            </div>
        </main>
    );
}
