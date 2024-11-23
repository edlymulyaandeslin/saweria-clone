import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";

export default function AppLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="w-full max-w-5xl mx-auto">
                <Navbar />
            </div>

            <div className="min-h-[350px]">{children}</div>

            <div className="w-full max-w-5xl mx-auto">
                <Footer />
            </div>
        </div>
    );
}
