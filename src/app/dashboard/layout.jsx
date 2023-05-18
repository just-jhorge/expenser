"use client";

import React from "react";
import Navbar from "@/components/navigation/navbar";

function layout({ children }) {
    return (
        <div className="h-screen flex overflow-hidden">
            <Navbar />
            <div className="h-full w-full">
                <div className="h-[calc(100%-32px)] bg-gradient-to-tr from-gray-200 to-gray-50 p-8">{children}</div>
                <footer className="flex-center text-center text-xs text-gray-400 h-8">
                    &copy; 2023 AnnyVille Inc.
                </footer>
            </div>
        </div>
    );
}

export default layout;
