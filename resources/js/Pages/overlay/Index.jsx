import AlertContent from "@/Components/overlay/AlertContent";
import Sidebar from "@/Components/Sidebar";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <MainLayout>
            <Head title="Overlay" />

            <div className="w-full max-w-5xl p-4 mx-auto">
                <div className="flex space-x-8">
                    <Sidebar
                        sidemenu={[
                            {
                                title: "Alert",
                                href: "/overlay/alert",
                            },
                            {
                                title: "Media Share",
                                href: "/overlay/alert",
                            },
                            {
                                title: "Soundboard",
                                href: "/overlay/alert",
                            },
                            {
                                title: "Subathon",
                                href: "/overlay/alert",
                            },
                            {
                                title: "Voting",
                                href: "/overlay/alert",
                            },
                            {
                                title: "QR Code ",
                                href: "/overlay/alert",
                            },
                            {
                                title: "Milestone",
                                href: "/overlay/alert",
                            },
                            {
                                title: "Leaderboard",
                                href: "/overlay/alert",
                            },
                            {
                                title: "Running Text",
                                href: "/overlay/alert",
                            },
                            {
                                title: "Wheel",
                                href: "/overlay/alert",
                            },
                        ]}
                    />

                    <div className="w-full">
                        <AlertContent />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
