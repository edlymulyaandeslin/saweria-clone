import DiscordContent from "@/Components/integration/DiscordContent";
import WebhookContent from "@/Components/integration/WebhookContent";
import Sidebar from "@/Components/Sidebar";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Integration() {
    const [open, setOpen] = useState("discord");

    const handleOpen = (menu) => {
        setOpen(menu);
    };

    return (
        <MainLayout>
            <Head title="Overlay" />

            <div className="w-full max-w-5xl p-4 mx-auto">
                <div className="flex space-x-8">
                    <Sidebar
                        handleOpen={handleOpen}
                        sidemenu={[
                            {
                                title: "Discord",
                                open: "discord",
                            },
                            {
                                title: "Webhook",
                                open: "webhook",
                            },
                        ]}
                    />

                    <div className="w-full">
                        {open === "discord" && <DiscordContent />}
                        {open === "webhook" && <WebhookContent />}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
