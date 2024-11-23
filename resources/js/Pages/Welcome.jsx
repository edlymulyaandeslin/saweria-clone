import CardFooter from "@/Components/welcome/CardFooter";
import CardPayment from "@/Components/welcome/CardPayment";
import CardPricing from "@/Components/welcome/CardPricing";
import CardRegister from "@/Components/welcome/CardRegister";
import Hero from "@/Components/welcome/Hero";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <AppLayout>
            <Head title="Connecting Communities, Empowering Streamers" />

            <Hero />

            <CardPayment />

            <CardRegister />

            <CardPricing />

            <CardFooter />
        </AppLayout>
    );
}