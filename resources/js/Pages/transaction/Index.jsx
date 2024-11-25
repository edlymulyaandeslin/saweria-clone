import Cards from "@/Components/overlay/Cards";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { FaEye } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";

export default function Transactions() {
    return (
        <MainLayout>
            <Head title="Transactions" />

            <div className="w-full max-w-5xl p-4 mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Cards className="bg-orange-400">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="p-6">
                                <h1 className="text-6xl">Rp0</h1>
                                <p className="text-lg">
                                    Angka di atas adalah total saldo kamu.
                                    Setiap transaksi harus menunggu 3 hari untuk
                                    bisa dicairkan.
                                </p>
                            </div>
                            <div>
                                <img src="/img/chicken_money.svg" alt="" />
                            </div>
                        </div>
                    </Cards>
                    <Cards className="bg-blue-400">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="p-6 space-y-1">
                                <h1 className="text-6xl">Rp0</h1>
                                <p className="text-lg">
                                    Angka di atas adalah total saldo yang siap
                                    dicairkan.
                                </p>
                                <button className="px-6 py-1 text-3xl bg-orange-400 rounded shadow-2xl">
                                    Cairkan
                                </button>
                            </div>
                            <div>
                                <img src="/img/chicken_money.svg" alt="" />
                            </div>
                        </div>
                    </Cards>
                </div>

                <h2 className="text-xl">
                    Cek{" "}
                    <Link href="/faq" className="underline">
                        FAQ
                    </Link>{" "}
                    kami untuk pertanyaan seputar dukungan dan pencairannya.Cek
                    pengaturan biaya layanan(payment gateway) dukungan{" "}
                    <Link href="/profile" className="underline">
                        disini
                    </Link>
                    .
                </h2>

                <div className="my-8 space-y-4">
                    <div className="flex justify-between">
                        <h1 className="text-3xl">Daftar Transaksi:</h1>
                        <button className="px-6 py-1 text-3xl bg-blue-400 rounded shadow-2xl">
                            Export
                        </button>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button className="p-2 transition-all rounded hover:bg-gray-900/10">
                            <FaEye />
                        </button>
                        <button className="p-2 transition-all rounded hover:bg-gray-900/10">
                            <GoCreditCard />
                        </button>
                    </div>
                    <div>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Tanggal</th>
                                    <th>Jenis</th>
                                    <th>Nominal</th>
                                    <th>Dari</th>
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
