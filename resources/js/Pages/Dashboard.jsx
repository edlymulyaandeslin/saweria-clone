import CardLink from "@/Components/CardLink";
import CardLinkContent from "@/Components/CardLinkContent";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <MainLayout>
            <Head title="Dashboard" />

            <div className="w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                    <CardLink
                        href={"/overlays"}
                        className="p-6 text-gray-900 bg-blue-400/80"
                    >
                        <CardLinkContent
                            title="Overlay"
                            description="Atur alert dan overlay lainnya disini. Kompatibel dengan OBS dan Streamlabs."
                            image="/img/capy_happy.svg"
                        />
                    </CardLink>
                    <CardLink
                        href={"/transactions"}
                        className="p-6 text-gray-900 bg-purple-400/80"
                    >
                        <CardLinkContent
                            title="Dukungan Masuk dan Cashout"
                            description="Lihat histori dukungan yang masuk dan cashout disini."
                            image="/img/chicken_money.svg"
                        />
                    </CardLink>
                    <CardLink
                        href={"/transactions/outgoing"}
                        className="p-6 text-gray-900 bg-primary-400/80"
                    >
                        <CardLinkContent
                            title="Dukungan Keluar"
                            description="Lihat histori dukungan yang kamu kirimkan."
                            image="/img/doggo_happy.svg"
                        />
                    </CardLink>
                    <CardLink
                        href={"/integration"}
                        className="p-6 text-gray-900 bg-pink-400/80"
                    >
                        <CardLinkContent
                            title="Integrations"
                            description="Hubungkan aplikasi lain dengan saweria."
                            image="/img/raccoon_happy.svg"
                        />
                    </CardLink>
                </div>
            </div>
        </MainLayout>
    );
}
