import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function AppLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen ">
            <Header />

            <div className="my-2 p-4 min-h-[350px]">{children}</div>

            <div className="w-full max-w-xl mx-auto">
                <Footer />
            </div>
        </div>
    );
}
