import AlertContent from "@/Components/overlay/AlertContent";
import LeaderboardContent from "@/Components/overlay/LeaderboardContent";
import MediaShareContent from "@/Components/overlay/MediaShareContent";
import MilestoneContent from "@/Components/overlay/MilestoneContent";
import QrcodeContent from "@/Components/overlay/QrcodeContent";
import RunningTextContent from "@/Components/overlay/RunningTextContent";
import Soundboard from "@/Components/overlay/Soundboard";
import Subathon from "@/Components/overlay/Subathon";
import VotingContent from "@/Components/overlay/VotingContent";
import WheelContent from "@/Components/overlay/WheelContent";
import Sidebar from "@/Components/Sidebar";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Index() {
    const [open, setOpen] = useState("alert");

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
                                title: "Alert",
                                open: "alert",
                            },
                            {
                                title: "Media Share",
                                open: "mediashare",
                            },
                            {
                                title: "Soundboard",
                                open: "soundboard",
                            },
                            {
                                title: "Subathon",
                                open: "subathon",
                            },
                            {
                                title: "Voting",
                                open: "voting",
                            },
                            {
                                title: "QR Code",
                                open: "qrcode",
                            },
                            {
                                title: "Milestone",
                                open: "milestone",
                            },
                            {
                                title: "Leaderboard",
                                open: "leaderboard",
                            },
                            {
                                title: "Running Text",
                                open: "runningtext",
                            },
                            {
                                title: "Wheel",
                                open: "wheel",
                            },
                        ]}
                    />

                    <div className="w-full">
                        {open === "alert" && <AlertContent />}
                        {open === "mediashare" && <MediaShareContent />}
                        {open === "soundboard" && <Soundboard />}
                        {open === "subathon" && <Subathon />}
                        {open === "voting" && <VotingContent />}
                        {open === "qrcode" && <QrcodeContent />}
                        {open === "milestone" && <MilestoneContent />}
                        {open === "leaderboard" && <LeaderboardContent />}
                        {open === "runningtext" && <RunningTextContent />}
                        {open === "wheel" && <WheelContent />}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
