import { GoGear } from "react-icons/go";
import Cards from "../overlay/Cards";
import PrimaryButton from "../PrimaryButton";
import ToggleButton from "../ToggleButton";

export default function DiscordContent() {
    return (
        <Cards>
            <div className="space-y-4">
                <h1 className="text-3xl">Discord</h1>
                <p className="text-lg">
                    Kirimkan alert dukungan kamu sebagai pesan pada channel
                    discord!
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex justify-between">
                        <label htmlFor="">Nyalakan:</label>
                        <ToggleButton />
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="">Hitungan gagal:</label>
                        <span>0</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Webhook URL:</label>
                    <input
                        type="text"
                        className="border-none focus:ring-0"
                        placeholder="https://discord.com/api/webhooks/xxxxxx"
                    />
                    <hr className="border-black" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Template Pesan:</label>
                    <input
                        type="text"
                        className="border-none focus:ring-0"
                        placeholder="yay you got {amount} from {donator}"
                    />
                    <hr className="border-black" />
                    <span className="mt-2 text-gray-500">
                        {"{amount}"} {"{donator}"} will change according to the
                        tip
                    </span>
                </div>
                <p className="text-xl">
                    Untuk menemukan url webhook discord, klik{" "}
                    <span className="inline-flex">
                        <GoGear />
                    </span>{" "}
                    di sebelah channel, pilih integration dan klik "Webhooks".
                </p>
                <p className="text-xl">
                    Kemudian, tekan tombol "New Webhook", dan klik tombol "Copy
                    Webhook URL". Pastekan URL tersebut ke kotak "Webhook URL"
                    di atas. Jangan lupa klik simpan!
                </p>

                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <PrimaryButton className="flex items-center justify-center">
                        Simpan
                    </PrimaryButton>
                    <PrimaryButton className="flex items-center justify-center">
                        Munculkan Notifikasi
                    </PrimaryButton>
                </div>
            </div>
        </Cards>
    );
}
