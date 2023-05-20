"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { BsCalculator } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/auth/authSlice";

function Navbar() {
    const [sideOpen, setSideOpen] = useState(true);
    const [top, setTop] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const toggleSideNav = () => {
        setSideOpen(!sideOpen);
    };

    const toggleTopNav = () => {
        setTop(!top);
    };

    const handleLogout = () => {
        dispatch(logout());
        router.push("/login");
    };

    return (
        <>
            <nav className="container fixed z-50 w-full h-14 bg-white block md:hidden flex-center shadow-md">
                <div className="w-full flex items-center justify-between">
                    <Link href="/dashboard/budgets">
                        <h2 className="text-xl font-semibold">Expenser</h2>
                    </Link>
                    <button className="p-2" title="Open" onClick={toggleTopNav}>
                        {top ? <GrClose className="text-2xl" /> : <HiOutlineMenuAlt3 className="text-2xl" />}
                    </button>
                </div>
                <div className={`absolute w-full ${top ? "h-[35vh] top-14 block" : "h-0 hidden"} bg-white shadow-md`}>
                    <div className="container">
                        <ul className="mt-5 space-y-7">
                            <li>
                                <Link className="sidebar-link" href="/dashboard/budgets">
                                    <BsCalculator className="text-2xl" />
                                    <p>Budgets</p>
                                </Link>
                            </li>
                            <li>
                                <Link className="sidebar-link" href="/dashboard/add-budget">
                                    <RiAddFill className="text-2xl" />
                                    <p>Add Budget</p>
                                </Link>
                            </li>
                            <li>
                                <Link className="sidebar-link" href="/dashboard/settings">
                                    <AiOutlineSetting className="text-2xl" />
                                    <p>Settings</p>
                                </Link>
                            </li>
                        </ul>
                        <button className="absolute bottom-5 text-red-500" onClick={handleLogout}>
                            <div className="flex items-center gap-2 font-medium">
                                <AiOutlineLogout className="text-2xl" />
                                <p className="text-xl">Logout</p>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
            <div
                className={`${
                    sideOpen ? "w-1/5 p-8" : "w-[4%] py-8 px-2 flex items-start justify-center"
                } hidden md:block h-full bg-white shadow-lg transition-all duration-300`}
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
                            <li>
                                <Link className="sidebar-link" href="/dashboard/budgets">
                                    <BsCalculator className="text-2xl" />
                                    <p>Budgets</p>
                                </Link>
                            </li>
                            <li>
                                <Link className="sidebar-link" href="/dashboard/add-budget">
                                    <RiAddFill className="text-2xl" />
                                    <p>Add Budget</p>
                                </Link>
                            </li>
                            <li>
                                <Link className="sidebar-link" href="/dashboard/settings">
                                    <AiOutlineSetting className="text-2xl" />
                                    <p>Settings</p>
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
                    <div className="h-full relative flex flex-col items-center">
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
                                <Link title="Settings" href="/dashboard/settings" prefetch={false}>
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
        </>
    );
}

export default Navbar;
