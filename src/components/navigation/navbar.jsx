"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { BsCalculator } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";

function Navbar() {
    const [sideOpen, setSideOpen] = useState(true);
    const dispatch = useDispatch();
    const router = useRouter();

    const toggleSideNav = () => {
        setSideOpen(!sideOpen);
    };

    const handleLogout = () => {
        dispatch(logout());
        router.push("/login");
    };

    return (
        <div
            className={`${
                sideOpen ? "w-1/5 p-8" : "w-[4%] py-8 px-2 flex items-start justify-center"
            } h-full bg-white shadow-lg transition-all duration-300`}
        >
            {sideOpen ? (
                <div className="h-full relative">
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-medium">Expenser</p>
                        <button onClick={toggleSideNav}>
                            <GrClose className="text-xl" />
                        </button>
                    </div>
                    <ul className="mt-12 space-y-8">
                        <li className="sidebar-link">
                            <BsCalculator className="text-2xl" />
                            <Link href="/dashboard/budgets" prefetch={false}>
                                Budgets
                            </Link>
                        </li>
                        <li className="sidebar-link">
                            <RiAddFill className="text-2xl" />
                            <Link href="/dashboard/add-budget" prefetch={false}>
                                Add Budget
                            </Link>
                        </li>
                        <li className="sidebar-link">
                            <AiOutlineSetting className="text-2xl" />
                            <Link href="/dashboard/budgets" prefetch={false}>
                                Settings
                            </Link>
                        </li>
                    </ul>
                    <button className="absolute bottom-0 text-red-500" onClick={handleLogout}>
                        <div className="flex items-center gap-2 font-medium">
                            <AiOutlineLogout className="text-2xl" />
                            <p className="text-xl">Logout</p>
                        </div>
                    </button>
                </div>
            ) : (
                <div className="h-full relative">
                    <button title="Open" onClick={toggleSideNav}>
                        <HiOutlineMenuAlt3 className="text-2xl" />
                    </button>
                    <ul className="mt-14 space-y-8">
                        <li className="sidebar-link">
                            <Link title="Budgets" href="/dashboard/budgets" prefetch={false}>
                                <BsCalculator className="text-2xl" />
                            </Link>
                        </li>
                        <li className="sidebar-link">
                            <Link title="Add Budget" href="/dashboard/add-budget" prefetch={false}>
                                <RiAddFill className="text-2xl" />
                            </Link>
                        </li>
                        <li className="sidebar-link">
                            <Link title="Settings" href="/dashboard/abudgets" prefetch={false}>
                                <AiOutlineSetting className="text-2xl" />
                            </Link>
                        </li>
                    </ul>
                    <button
                        title="Log out"
                        className="absolute bottom-0 text-red-500 flex-center"
                        onClick={handleLogout}
                    >
                        <AiOutlineLogout className="text-2xl" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
