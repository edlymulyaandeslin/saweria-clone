import Cards from "../overlay/Cards";
import PrimaryButton from "../PrimaryButton";
import ToggleButton from "../ToggleButton";

export default function WebhookContent() {
    return (
        <Cards>
            <div className="space-y-4">
                <h1 className="text-3xl">Webhook</h1>
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
