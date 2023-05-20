"use client";

import React from "react";
import Navbar from "@/components/navigation/navbar";

function layout({ children }) {
    return (
        <div className="h-screen flex flex-col md:flex-row md:overflow-hidden">
            <Navbar />
            <div className="h-full w-full">
                <div className="md:h-[calc(100%-32px)] bg-gradient-to-tr from-gray-200 to-gray-50 mt-14 md:mt-0 px-4 md:px-8 py-8">
                    {children}
                </div>
                <footer className="flex-center text-center text-xs text-gray-400 h-8">
                    &copy; 2023 AnnyVille Inc.
                </footer>
            </div>
        </div>
    );
}

export default layout;
