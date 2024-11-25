import { FaArrowRotateRight } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

import ToggleButton from "../ToggleButton";
import Cards from "./Cards";
import Url from "./atom/Url";

export default function Soundboard() {
    return (
        <div>
            <p>
                Gunakan overlay ini untuk membolehkan penontonmu mengirimkan
                suara untuk dimainkan pada streammu.
            </p>
            <div className="mb-8">
                <Cards className={"space-y-2"}>
                    <h1 className="text-xl">Pengaturan Soundboard:</h1>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="soundboard">Aktifkan soundboard.</label>
                        <input
                            type="checkbox"
                            id="soundboard"
                            className="border-2 rounded"
                            defaultChecked
                        />
                    </div>
                    <PrimaryButton>Simpan</PrimaryButton>
                </Cards>
            </div>

            <div className="my-8">
                <Cards className={"space-y-2"}>
                    <h1 className="text-xl">Suara Soundboard:</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex flex-col">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Harga</label>
                            <div>
                                <span>Rp</span>
                                <input
                                    type="text"
                                    className="border-none focus:ring-0"
                                />
                            </div>
                            <hr className="border-black" />
                        </div>

                        <div className="flex flex-col col-span-2 gap-2">
                            <label htmlFor="">File (.mp3, .ogg, .wav)</label>
                            <input
                                type="file"
                                className="border-none focus:ring-0"
                            />
                            <hr className="border-black" />
                        </div>
                    </div>
                    <PrimaryButton>Tambah</PrimaryButton>
                </Cards>
            </div>

            <div className="w-full max-w-3xl mx-auto my-8">
                <Cards
                    className={
                        "bg-primary-600 flex justify-center items-center"
                    }
                >
                    <h1 className="text-4xl text-center">
                        <span className="text-purple-600">Mumu</span> baru saja
                        memberikan{" "}
                        <span className="text-purple-600">Rp10.000</span>
                        <br /> Bonk 🎵 <br /> Semangat ya kamu 😘
                    </h1>
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
                        <div className="flex items-center gap-2">
                            <h1 className="text-xl">Default</h1>
                            <ToggleButton />
                            <h1 className="text-xl">Custom</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
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
                            <h4>Warna Highlight:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={"#744fc9"}
                            />
                            <hr className="border-black" />
                            <PrimaryButton className="w-full bg-[#744fc9]">
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
                                value={"#333333"}
                            />
                            <hr className="border-black" />
                            <PrimaryButton className="w-full bg-[#333333]">
                                <span className="w-full text-center">
                                    Pilih Warna
                                </span>
                            </PrimaryButton>
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Template teks:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={"baru saja memberikan"}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Tanpa Border:</h4>
                            <input
                                defaultChecked
                                type="checkbox"
                                className="border-2 rounded"
                            />
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
                        "https://saweria.co/widgets/soundboard?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                />
            </div>
        </div>
    );
}
