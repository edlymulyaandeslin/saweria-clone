import { FaArrowRotateRight } from "react-icons/fa6";
import { LiaQrcodeSolid } from "react-icons/lia";
import PrimaryButton from "../PrimaryButton";

import Cards from "./Cards";
import Url from "./atom/Url";

export default function QrcodeContent() {
    return (
        <div>
            <h1 className="text-lg">QR yang menunjuk ke halaman saweriamu!</h1>

            <div className="my-8">
                <Cards className="max-w-xs mx-auto bg-primary-600">
                    <LiaQrcodeSolid size={250} className="w-full" />
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
                            <h4>Warna Barcode:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                                value={"#000"}
                            />
                            <hr className="border-black" />
                            <PrimaryButton className="w-full bg-[#000]">
                                <span className="w-full text-center">
                                    Pilih Warna
                                </span>
                            </PrimaryButton>
                        </div>

                        <div className="my-2 space-y-2">
                            <h4>Label atas:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
                            />
                            <hr className="border-black" />
                        </div>
                        <div className="my-2 space-y-2">
                            <h4>Label bawah:</h4>
                            <input
                                type="text"
                                className="border-none focus:ring-0"
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
                        "https://saweria.co/widgets/qr?streamKey=69cd4703cacfb84eab7fa7fc2151f2fc"
                    }
                    listBtn={2}
                />
            </div>
        </div>
    );
}
