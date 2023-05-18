import { ToastContainer } from "react-toastify";
import Providers from "@/redux/Providers";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
    title: "Expenser App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
                <ToastContainer autoClose={1500} closeOnClick />
            </body>
        </html>
    );
}
