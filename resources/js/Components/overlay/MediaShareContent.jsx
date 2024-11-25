import { FaArrowRotateRight } from "react-icons/fa6";
import MovieClip from "../MovieClip";
import PrimaryButton from "../PrimaryButton";
import Cards from "./Cards";
import Url from "./atom/Url";

export default function MediaShareContent() {
    return (
        <>
            <Cards>
                <h1 className="text-xl">
                    Gunakan overlay ini untuk membolehkan penontonmu mengirimkan
                    youtube dan tiktok untuk ditampilkan pada Live streaming
                    kamu.
                </h1>
            </Cards>

            <Cards>
                <div className="space-y-2">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl">Pengaturan Mediashare:</h1>
                        <div className="space-x-2 text-lg">
                            <label htmlFor="">Aktifkan media share.</label>
                            <input
                                type="checkbox"
                                className="border-2 rounded"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl">Tipe Mediashare:</h1>
                        <div className="flex justify-between w-full text-lg">
                            <div className="space-x-2">
                                <label htmlFor="">Youtube/Shorts</label>
                                <input
                                    type="checkbox"
                                    className="border-2 rounded"
                                />
                            </div>
                            <div className="space-x-2">
                                <label htmlFor="">Tiktok</label>
                                <input
                                    type="checkbox"
                                    className="border-2 rounded"
                                />
                            </div>
                            <div className="space-x-2">
                                <label htmlFor="">Instagram Reels</label>
                                <input
                                    type="checkbox"
                                    className="border-2 rounded"
                                />
                            </div>
                            <div className="space-x-2">
                                <label htmlFor="">Voice Note</label>
                                <input
                                    type="checkbox"
                                    className="border-2 rounded"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl">Aturan minimum video:</h1>
                        <div className="grid grid-cols-1 gap-4 text-lg md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <label htmlFor="">
                                    Maksimum video (detik):
                                </label>
                                <input
                                    type="text"
                                    className="border-none focus:ring-0"
                                    value={300}
                                />
                                <hr className="border-black" />
                            </div>
                            <div>
                                <label htmlFor="">
                                    Berapa rupiah per detik?
                                </label>
                                <div>
                                    <span>Rp.</span>
                                    <input
                                        type="text"
                                        className="border-none focus:ring-0"
                                        value={100}
                                    />
                                </div>
                                <hr className="border-black" />
                            </div>
                            <div>
                                <label htmlFor="">GIF / media share:</label>
                                <div>
                                    <span>Rp.</span>
                                    <input
                                        type="text"
                                        className="border-none focus:ring-0"
                                        value={10000}
                                    />
                                </div>
                                <hr className="border-black" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl">Aturan minimum Suara:</h1>
                        <div className="grid grid-cols-1 gap-4 text-lg md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <label htmlFor="">
                                    Maksimum suara (detik):
                                </label>
                                <input
                                    type="text"
                                    className="border-none focus:ring-0"
                                    value={60}
                                />
                                <hr className="border-black" />
                            </div>
                            <div>
                                <label htmlFor="">
                                    Berapa rupiah per detik?
                                </label>
                                <div>
                                    <span>Rp.</span>
                                    <input
                                        type="text"
                                        className="border-none focus:ring-0"
                                        value={5000}
                                    />
                                </div>
                                <hr className="border-black" />
                            </div>
                            <div>
                                <label htmlFor="">Suara:</label>
                                <div>
                                    <span>Rp.</span>
                                    <input
                                        type="text"
                                        className="border-none focus:ring-0"
                                        value={50000}
                                    />
                                </div>
                                <hr className="border-black" />
                            </div>
                        </div>
                    </div>

                    <PrimaryButton>Simpan</PrimaryButton>
                </div>
            </Cards>

            <div className="w-full max-w-3xl mx-auto">
                <MovieClip
                    videoId={"RRKPkwBkz_0&t=2s"}
                    width="100%"
                    height="400px"
                />
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
                    <div className="flex items-center justify-start gap-1">
                        <h1 className="text-xl">Tampilan:</h1>
                        <button className="p-1 text-lg transition-all rounded hover:bg-gray-900/10">
                            <FaArrowRotateRight />
                        </button>
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
                        <div className="my-2 space-y-2">
                            <h4>Tampilkan media NSFW:</h4>
                            <input
                                defaultChecked
                                type="checkbox"
                                className="border-2 rounded"
                            />
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
                        "https://saweria.co/widgets/mediashare?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                />
            </div>
        </>
    );
}
