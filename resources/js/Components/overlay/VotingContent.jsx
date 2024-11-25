import { FaArrowRotateRight } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

import { FaPlus } from "react-icons/fa";
import Cards from "./Cards";
import Url from "./atom/Url";

export default function VotingContent() {
    return (
        <div>
            <h1 className="text-lg">Adakan Voting untuk penonton kamu!</h1>

            <div className="my-8">
                <h2 className="text-xl">Informasi Voting:</h2>
                <div className="mb-2">
                    <label htmlFor="">Nyalakan Voting:</label>
                    <input type="checkbox" className="mx-2 border-2 rounded" />
                </div>

                <div className="flex flex-col w-full mb-2">
                    <label htmlFor="">Judul:</label>
                    <input type="text" className="border-none focus:ring-0" />
                    <hr className="border-black" />
                </div>

                <div className="mb-2">
                    <label htmlFor="">Pilihan Vote:</label>
                    <button className="p-2 mx-2 rounded bg-gray-900/10 hover:bg-gray-900/20">
                        <FaPlus />
                    </button>
                </div>

                <div className="mb-2">
                    <h4 className="font-bold text-pink-600">
                        Pilihan minimal 2 dan maksimal 5
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col">
                            <label htmlFor="">Tanggal Mulai:</label>
                            <input
                                type="date"
                                className="border-none focus:ring-0"
                                value={"2024-11-25"}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Waktu Mulai:</label>
                            <input
                                type="time"
                                className="border-none focus:ring-0"
                                value={"21:24"}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Tanggal Selesai:</label>
                            <input
                                type="date"
                                className="border-none focus:ring-0"
                                value={"2024-11-25"}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Waktu Selesai:</label>
                            <input
                                type="time"
                                className="border-none focus:ring-0"
                                value={"21:24"}
                            />
                            <hr className="border-black" />
                        </div>
                    </div>
                    <div className="my-4">
                        <PrimaryButton className="flex justify-center w-full">
                            Simpan Perubahan Overlay Voting
                        </PrimaryButton>
                    </div>
                </div>
            </div>

            <div className="my-2">
                <h1 className="text-4xl text-center">No active vote</h1>
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
                        "https://saweria.co/widgets/vote?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                    listBtn={2}
                />
            </div>
        </div>
    );
}
