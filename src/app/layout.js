import Providers from "@/redux/Providers";
import "./globals.css";

export const metadata = {
    title: "Expenser App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
