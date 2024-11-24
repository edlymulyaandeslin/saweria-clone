import { FaArrowRotateRight } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

import ToggleButton from "../ToggleButton";
import Cards from "./Cards";

export default function AlertContent() {
    return (
        <div>
            <p>
                Pasang overlay ini untuk mendapatkan notifikasi saat ada
                dukungan yang masuk
            </p>
            <div className="mb-8">
                <Cards className={"space-y-4"}>
                    <h1 className="text-xl">Aturan Alert:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="gif">Nyalakan gif</label>
                            <input
                                type="checkbox"
                                id="gif"
                                className="border-2 rounded"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="textspeech">
                                Varian suara Text To Speech:
                            </label>
                            <select
                                name="textspeech"
                                id="textspeech"
                                className="border-none focus:ring-0"
                            >
                                <option value="">Fastest</option>
                                <option value="">Fast</option>
                                <option value="">Medium</option>
                                <option value="">Slow</option>
                            </select>
                            <hr className="border-black" />
                        </div>
                    </div>

                    <h1 className="text-xl">Aturan minimum:</h1>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="alertnotip">
                                Alert notifikasi:
                            </label>
                            <div>
                                <span>Rp</span>
                                <input
                                    type="text"
                                    id="alertnotip"
                                    className="border-none focus:ring-0 focus:ring-b"
                                    value={10000}
                                />
                            </div>
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="mediashare">
                                GIF / media share:
                            </label>
                            <div>
                                <span>Rp</span>
                                <input
                                    type="text"
                                    id="mediashare"
                                    className="border-none focus:ring-0 focus:ring-b"
                                    value={10000}
                                />
                            </div>
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="textspeechs">Text To Speech:</label>
                            <div>
                                <span>Rp</span>
                                <input
                                    type="text"
                                    id="textspeechs"
                                    className="border-none focus:ring-0 focus:ring-b"
                                    value={25000}
                                />
                            </div>
                            <hr className="border-black" />
                        </div>
                    </div>

                    <PrimaryButton>Simpan Aturan</PrimaryButton>
                </Cards>
            </div>

            <div className="my-8">
                <Cards className={"space-y-4"}>
                    <h1 className="text-xl">Suara Notifikasi Alert:</h1>
                    <div className="flex justify-between">
                        <div className="flex flex-col w-full space-y-1">
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={"default"}
                            />
                            <hr className="border-black" />
                        </div>

                        <div className="flex items-center w-full max-w-60">
                            <PrimaryButton className="flex items-center justify-center w-full">
                                Ganti Suara
                            </PrimaryButton>
                        </div>
                    </div>
                </Cards>
            </div>

            <div className="my-8">
                <Cards>
                    <h1 className="text-xl">Filter kata:</h1>
                    <p className="text-lg">
                        Pesan dukungan dan nama pendukung tidak akan ditampilkan
                        jika mengandung kata-kata dibawah ini. Pisahkan kata
                        dengan spasi.
                    </p>
                    <textarea
                        rows={6}
                        className="w-full border-2 border-black"
                    ></textarea>

                    <PrimaryButton>Simpan Kata</PrimaryButton>
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
                        memberikan
                        <span className="text-purple-600">Rp10.000</span>{" "}
                        Semangat ya kamu 😘
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
                            <h4>Durasi Notifikasi (ms):</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={5000}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Font Isi:</h4>
                            <select className="w-full border-none focus:ring-0">
                                <option value="">default</option>
                                <option value="">Sans</option>
                                <option value="">Serif</option>
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
                <h1 className="text-4xl">URL:</h1>
                <p className="text-xl">
                    Klik tombol Copy dan pastekan URL di "Browser Module" OBS.
                </p>
                <p className="text-xl">
                    <span className="px-2 bg-blue-300 rounded">NEW</span>{" "}
                    Setelah merubah tampilan, double click pada browser source
                    pada OBS dan tekan "Refresh cache of current page". Jika
                    tidak tampil, pastikan OBS telah terupdate ke versi terbaru
                    (v28).
                </p>
                <input
                    type="text"
                    readOnly
                    value={
                        "https://saweria.co/widgets/alert?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                    onFocus={(e) => e.target.select()}
                    className="w-full border-none focus:ring-0 focus:selection:bg-blue-400"
                />
                <hr className="border-black" />

                <div className="grid grid-cols-1 gap-2 my-4 md:grid-cols-2 lg:grid-cols-3">
                    <PrimaryButton className="flex items-center justify-center">
                        Copy
                    </PrimaryButton>
                    <PrimaryButton className="flex items-center justify-center">
                        Buka Tab Baru
                    </PrimaryButton>
                    <PrimaryButton className="flex items-center justify-center">
                        Munculkan Notifikasi
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
