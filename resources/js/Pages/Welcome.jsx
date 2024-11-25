import CardFooter from "@/Components/welcome/CardFooter";
import CardPayment from "@/Components/welcome/CardPayment";
import CardPricing from "@/Components/welcome/CardPricing";
import CardRegister from "@/Components/welcome/CardRegister";
import Hero from "@/Components/welcome/Hero";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <AppLayout>
            <Head title="Connecting Communities, Empowering Streamers" />

            <Hero user={auth.user} />

            <CardPayment />

            <CardRegister user={auth.user} />

            <CardPricing />

            <CardFooter />
        </AppLayout>
    );
}
