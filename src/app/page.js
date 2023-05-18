import Link from "next/link";

export default function Home() {
    return (
        <main className="container h-screen w-screen flex-center">
            <div className="text-center">
                <h1 className="text-3xl md:text-7xl mb-1 md:mb-5">Welcome to Expenser App</h1>
                <p className="text-gray-700 text-base md:text-3xl">Manage all your budgets and expenses in one place</p>
                <div className="space-x-3 mt-4 md:mt-8">
                    <Link className="link-btn" href="/login" prefetch={false}>
                        Login
                    </Link>
                    <Link className="link-btn" href="/register" prefetch={false}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </main>
    );
}
