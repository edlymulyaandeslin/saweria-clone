import ChangelogItem from "@/Components/changelog/ChangelogItem";
import ChangelogList from "@/Components/changelog/ChangelogList";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Changelog() {
    const changelog = [
        {
            date: "2023-07-17",
            list: [
                {
                    title: "Bank Info wajib terisi untuk membuka halaman saweria",
                },
                {
                    title: "Menambahkan fitur blur untuk panel saldo",
                },
            ],
        },
        {
            date: "2023-03-21",
            list: [
                {
                    title: "MediaShare sekarang memfilter konten yang tidak pantas.",
                },
            ],
        },
        {
            date: "2023-01-24",
            list: [
                {
                    title: "Bug fix pada halaman setting overlay",
                },
                {
                    title: "Custom CSS/HTML untuk overlay alert",
                },
            ],
        },
        {
            date: "2022-12-19",
            list: [
                {
                    title: "Streamer dapat mengganti tombol quick amounts pada halaman saweria.",
                },
                {
                    title: "Menampilkan jumlah minimum untuk mentrigger Alert dan TTS",
                },
            ],
        },
        {
            date: "2022-12-12",
            list: [
                {
                    title: "Nama dan besar dukungan sekarang akan ikut dibaca saat TTS diaktifkan",
                },
                {
                    title: "Replay alert sekarang akan memutar TTS",
                },
            ],
        },
        {
            date: "2022-11-30",
            list: [
                {
                    title: "Merapihkan Overlay Setting pada layar kecil (HP).",
                },
                {
                    title: "Merapihkan overlay leaderboard dan milestone.",
                },
                {
                    title: "Overlay milestone sekarang menampilkan border pada bar.",
                },
            ],
        },
        {
            date: "2022-11-29",
            list: [
                {
                    title: "Pendukung harus menyetujui bahwa mereka berusia lebih dari 17 tahun untuk melakukan dukungan.",
                },
                {
                    title: "Mengganti YT video pada notifikasi palsu mediashare menjadi video promo saweria.",
                },
            ],
        },
    ];

    return (
        <AppLayout>
            <Head title="Changelog" />

            <div className="w-full max-w-xl mx-auto my-8 flex flex-col space-y-8">
                <h1 className="text-4xl">Changelog Sawerla:</h1>

                <ChangelogList>
                    {changelog.map((log, index) => (
                        <ChangelogItem
                            key={index}
                            date={log.date}
                            list={log.list}
                        />
                    ))}
                </ChangelogList>
            </div>
        </AppLayout>
    );
}
