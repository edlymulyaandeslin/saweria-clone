import About from "@/Components/faq/About";
import Cashingout from "@/Components/faq/Cashingout";
import Others from "@/Components/faq/Others";
import PersonalRules from "@/Components/faq/PersonalRules";
import Tip from "@/Components/faq/Tip";
import { Head } from "@inertiajs/react";

export default function Faq() {
    return (
        <>
            <Head title="Faq" />

            <div className="w-full max-w-5xl mx-auto my-8 flex flex-col space-y-8">
                <h1 className="text-4xl">Frequently Asked Questions:</h1>

                <About />

                <Tip />

                <Cashingout />

                <PersonalRules />

                <Others />
            </div>
        </>
    );
}
