import PrimaryButton from "@/Components/PrimaryButton";

export default function Url({ url, listBtn = 3 }) {
    return (
        <>
            <h1 className="text-4xl">URL:</h1>
            <p className="text-xl">
                Klik tombol Copy dan pastekan URL di "Browser Module" OBS.
            </p>
            <p className="text-xl">
                <span className="px-2 bg-blue-300 rounded">NEW</span> Setelah
                merubah tampilan, double click pada browser source pada OBS dan
                tekan "Refresh cache of current page". Jika tidak tampil,
                pastikan OBS telah terupdate ke versi terbaru (v28).
            </p>
            <input
                type="text"
                readOnly
                value={url}
                onFocus={(e) => e.target.select()}
                className="w-full border-none focus:ring-0 focus:selection:bg-blue-400"
            />
            <hr className="border-black" />

            <div className="grid grid-cols-1 gap-2 my-4 md:grid-cols-2 lg:grid-cols-3">
                {listBtn === 3 && (
                    <>
                        <PrimaryButton className="flex items-center justify-center">
                            Copy
                        </PrimaryButton>
                        <PrimaryButton className="flex items-center justify-center">
                            Buka Tab Baru
                        </PrimaryButton>
                        <PrimaryButton className="flex items-center justify-center">
                            Munculkan Notifikasi
                        </PrimaryButton>
                    </>
                )}

                {listBtn === 2 && (
                    <>
                        <PrimaryButton className="flex items-center justify-center">
                            Copy
                        </PrimaryButton>
                        <PrimaryButton className="flex items-center justify-center">
                            Buka Tab Baru
                        </PrimaryButton>
                    </>
                )}
            </div>
        </>
    );
}
