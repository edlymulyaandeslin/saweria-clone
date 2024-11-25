import { FaArrowRotateRight } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

import { FaPlus } from "react-icons/fa";
import Cards from "./Cards";
import Url from "./atom/Url";

export default function WheelContent() {
    return (
        <div>
            <h1 className="text-lg">
                Gunakan overlay ini untuk menampilkan Wheel of Prizes. Roda akan
                berputar setelah milestone dukungan tercapai!
            </h1>

            <div className="w-full max-w-3xl mx-auto my-8">
                <Cards
                    className={
                        "bg-primary-600 flex justify-center items-center"
                    }
                >
                    <div className="w-full space-y-2 text-4xl text-center">
                        <h1>???</h1>
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
                            <h4>Putar saat dukungan mencapai:</h4>
                            <input
                                type="text"
                                className="w-full border-none focus:ring-0"
                                value={100000}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Jumlah awal:</h4>
                            <input
                                type="text"
                                className="w-full border-none focus:ring-0"
                                value={10000}
                            />
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
                        <div className="my-2 space-y-2">
                            <h4>Besar font:</h4>
                            <input
                                type="text"
                                className="w-full border-none focus:ring-0"
                                value={16}
                            />
                            <hr className="border-black" />
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
                    </div>
                    <div className="my-2 space-x-2">
                        <label htmlFor="">Pilihan Wheel of Prizes:</label>
                        <button className="p-2 rounded bg-gray-900/10 hover:bg-gray-900/20">
                            <FaPlus />
                        </button>
                    </div>
                    <div>
                        <PrimaryButton>Simpan Tampilan</PrimaryButton>
                    </div>
                </Cards>
            </div>

            <div className="my-8">
                <Url
                    url={
                        "https://saweria.co/widgets/wheel?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                />
            </div>
        </div>
    );
}
