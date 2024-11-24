import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";

export default function MainLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="w-full max-w-5xl px-4 mx-auto">
                <Navbar user={auth.user} />
            </div>

            <div className="m-4 min-h-[350px]">{children}</div>

            <div className="w-full max-w-5xl m-4 mx-auto">
                <Footer />
            </div>
        </div>
    );
}
