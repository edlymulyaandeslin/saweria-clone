import { FaArrowRotateRight } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

import Cards from "./Cards";
import Url from "./atom/Url";

export default function MilestoneContent() {
    return (
        <div>
            <h1 className="text-lg">
                Tampilkan jumlah dukungan yang telah kamu kumpulkan. Kamu bisa
                memasukkan target untuk melihat dukungan yang terkumpul. Jangan
                lupa pilih juga tanggal mulainya!
            </h1>

            <div className="w-full max-w-3xl mx-auto my-8">
                <Cards
                    className={
                        "bg-primary-600 flex justify-center items-center"
                    }
                >
                    <div className="w-full space-y-2 text-4xl text-center">
                        <h1>Pengumpulan dana untuk pergi ke bulan</h1>
                        <div className="relative w-full h-8 overflow-hidden border-2 border-black rounded-lg">
                            <span className="absolute top-0 left-0 w-[40%] h-full bg-gray-800"></span>
                        </div>
                        <h4>Rp400.000 / Rp1.000.000</h4>
                    </div>
                </Cards>
            </div>

            <div className="my-8">
                <Cards>
                    <div className="flex justify-between">
                        <div className="flex items-center justify-start gap-1">
                            <h1 className="text-xl">Tampilan:</h1>
                            <button className="p-1 text-lg transition-all rounded hover:bg-gray-900/10">
                                <FaArrowRotateRight />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                        <div className="my-2 space-y-2">
                            <h4>Tanpa Border:</h4>
                            <input
                                defaultChecked
                                type="checkbox"
                                className="border-2 rounded"
                            />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Warna Background:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={"#faae2b"}
                            />
                            <hr className="border-black" />
                            <PrimaryButton className="w-full bg-[#faae2b]">
                                <span className="w-full text-center">
                                    Pilih Warna
                                </span>
                            </PrimaryButton>
                        </div>

                        <div className="my-2 space-y-2">
                            <h4>Warna Teks:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={"#333"}
                            />
                            <hr className="border-black" />
                            <PrimaryButton className="w-full bg-[#333]">
                                <span className="w-full text-center">
                                    Pilih Warna
                                </span>
                            </PrimaryButton>
                        </div>

                        <div className="my-2 space-y-2">
                            <h4>Ketebalan Teks:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={500}
                            />
                            <hr className="border-black" />
                        </div>

                        <div className="my-2 space-y-2">
                            <h4>Judul:</h4>
                            <input
                                type="text"
                                className="w-full border-none focus:ring-0"
                                value={"Pengumpulan dana untuk pergi ke bulan"}
                            />
                            <hr className="border-black" />
                        </div>

                        <div className="my-2 space-y-2">
                            <h4>Sejak tanggal:</h4>
                            <input
                                type="date"
                                className="border-none focus:ring-0"
                                value={"2024-11-25"}
                            />
                            <hr className="border-black" />
                        </div>

                        <div className="my-2 space-y-2">
                            <h4>Target milestone:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={1000000}
                            />
                            <hr className="border-black" />
                        </div>

                        <div className="my-2 space-y-2">
                            <h4>Font Judul:</h4>
                            <select
                                className="w-full border-none focus:ring-0"
                                defaultValue={"1"}
                            >
                                <option value="1">default</option>
                                <option value="2">Sans</option>
                                <option value="3">Serif</option>
                            </select>
                            <hr className="border-black" />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Font Isi:</h4>
                            <select
                                className="w-full border-none focus:ring-0"
                                defaultValue={"1"}
                            >
                                <option value="1">default</option>
                                <option value="2">Sans</option>
                                <option value="3">Serif</option>
                            </select>
                            <hr className="border-black" />
                        </div>
                    </div>
                    <div>
                        <PrimaryButton>Simpan Tampilan</PrimaryButton>
                    </div>
                </Cards>
            </div>

            <div className="my-8">
                <Url
                    url={
                        "https://saweria.co/widgets/milestone?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                    listBtn={2}
                />
            </div>
        </div>
    );
}
