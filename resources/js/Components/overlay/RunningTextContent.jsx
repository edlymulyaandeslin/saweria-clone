import { FaArrowRotateRight } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

import Cards from "./Cards";
import Url from "./atom/Url";

export default function RunningTextContent() {
    return (
        <div>
            <h1 className="text-lg">
                Gunakan overlay ini untuk melihat 5 transaksi terakhir di 1
                bulan terakhir.
            </h1>

            <div className="w-full max-w-3xl mx-auto my-8">
                <Cards
                    className={
                        "bg-primary-600 flex flex-col justify-center items-center"
                    }
                >
                    <marquee className="text-2xl text-center">
                        dukung di https://saweria.co/EdlyMulyaAndeslin |
                    </marquee>
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
                                type="checkbox"
                                className="border-2 rounded"
                            />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Tanpa Jumlah Uang:</h4>
                            <input
                                type="checkbox"
                                className="border-2 rounded"
                            />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Kecepatan:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={100}
                            />
                            <hr className="border-black" />
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

                        <div className="col-span-3 my-2 space-y-2">
                            <h4>Tambahan:</h4>
                            <input
                                type="text"
                                className="w-full border-none focus:ring-0"
                                value={
                                    "dukung di https://saweria.co/EdlyMulyaAndeslin"
                                }
                            />
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
                        "https://saweria.co/widgets/recent?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                    listBtn={2}
                />
            </div>
        </div>
    );
}
