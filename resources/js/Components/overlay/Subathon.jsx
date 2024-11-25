import { FaArrowRotateRight, FaGear } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

import { FaPlay, FaTrash } from "react-icons/fa";
import Cards from "./Cards";
import Url from "./atom/Url";

export default function Subathon() {
    return (
        <div>
            <p>
                Tampilkan waktu yang tersisa pada Subathon dan tambahkan waktu
                secara otomatis saat ada dukungan yang masuk.
            </p>

            <div className="w-full max-w-3xl mx-auto my-8">
                <Cards
                    className={
                        "bg-primary-600 flex justify-center items-center p-0"
                    }
                >
                    <h1 className="md:text-[230px] text-9xl">10:00:00</h1>
                </Cards>
            </div>

            <div className="my-8">
                <h1 className="text-xl">Aturan pertambahan waktu:</h1>
                <div className="flex items-center">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="">Besar dukungan</label>
                        <input
                            type="text"
                            value={0}
                            className="border-none focus:ring-0"
                        />
                        <hr className="border-black" />
                    </div>
                    <span className="pt-8">=</span>
                    <div className="flex gap-x-1">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Jam</label>
                            <input
                                type="text"
                                value={0}
                                className="border-none focus:ring-0"
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Menit</label>
                            <input
                                type="text"
                                value={0}
                                className="border-none focus:ring-0"
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Detik</label>
                            <input
                                type="text"
                                value={0}
                                className="border-none focus:ring-0"
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <FaTrash
                                size={40}
                                className="p-2 text-white bg-red-600 rounded opacity-30"
                            />
                            <FaTrash
                                size={40}
                                className="p-2 text-white bg-red-600 rounded"
                            />
                        </div>
                    </div>
                </div>

                <h1 className="text-xl">Ilustrasi pertambahan:</h1>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                    <p className="text-lg">Dukungan sebesar</p>
                    <div>
                        <input
                            type="text"
                            className="border-none focus:ring-0"
                            value={10000}
                        />
                        <hr className="border-black" />
                    </div>
                    <p className="text-lg">akan menambahkan waktu sebanyak</p>
                    <p className="text-lg">0 jam, 0 menit, 0 detik.</p>
                </div>
            </div>

            <div className="my-8">
                <Cards>
                    <div className="flex justify-between">
                        <div className="flex items-center justify-start ">
                            <h1 className="text-xl">Tampilan:</h1>
                            <button className="p-1 text-lg transition-all rounded hover:bg-gray-900/10">
                                <FaArrowRotateRight />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                        <div className="my-2 space-y-2">
                            <h4>Durasi awal (jam):</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={10}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Durasi awal (meit):</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={0}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Durasi awal (detik):</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={0}
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Tanpa Border:</h4>
                            <input
                                type="checkbox"
                                className="border-2 rounded"
                                defaultChecked
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
                            <h4>Auto Play:</h4>
                            <input
                                type="checkbox"
                                className="border-2 rounded"
                            />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Warna teks:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={"#333"}
                            />
                            <hr className="border-black" />
                            <PrimaryButton className="flex justify-center w-full">
                                Pilih Warna
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
                <h1 className="text-4xl">Panduan penggunaan:</h1>
                <ul className="text-xl list-decimal list-inside">
                    <li>
                        Copy url di bawah dan pastekan pada OBS Browser source
                        seperti penggunaan overlay saweria yang lain.
                    </li>
                    <li>
                        Setelah tersimpan, klik kanan pada source yang baru saja
                        ditambahkan dan pilih interact.
                    </li>
                    <li>
                        <span>
                            Sebuah window akan muncul dan pada sisi kanan akan
                            terlihat 2 tombol yang berfungsi untuk:
                        </span>
                        <ul className="ps-6">
                            <li className="flex gap-x-2">
                                <FaPlay />
                                Memulai / menghentikan hitungan mundur.
                            </li>
                            <li className="flex gap-x-2">
                                <FaGear />
                                Menambahkan waktu secara manual.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="my-8">
                <Url
                    url={
                        "https://saweria.co/widgets/subathon?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                />
            </div>
        </div>
    );
}
