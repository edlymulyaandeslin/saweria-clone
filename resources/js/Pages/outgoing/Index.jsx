import ToggleButton from "@/Components/ToggleButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Outgoing() {
    return (
        <MainLayout>
            <Head title="Outgoing" />

            <div className="w-full max-w-5xl p-4 mx-auto">
                <h1 className="text-3xl">Histori Dukungan:</h1>

                <div className="my-8 space-y-4">
                    <div className="flex justify-end gap-2">
                        <span>Lihat sebagai tabel</span>
                        <ToggleButton />
                    </div>
                    <div>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>Nominal</th>
                                    <th>Untuk</th>
                                    <th>Pesan</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
