import Card from "./Card";

export default function CardPricing() {
    return (
        <Card cardTitle={"pricing"} className={"bg-blue-300"}>
            <div className="p-4 flex gap-4">
                <div className="flex flex-col space-y-4">
                    <p>
                        Every transaction will be charged with a 10% platform
                        fee (5-6% for Indonesia) with a minimum of 1.5 PHP
                        (Rp150 for Indonesia)
                    </p>
                    <p>
                        Cashout to your bank/e-wallet will be charged with
                        transfer fee of IDR 5.000 / PHP 50
                    </p>
                </div>

                <div className="w-full">
                    <img src="/img/icon-pricing.png" alt="icon pricing" />
                </div>
            </div>
        </Card>
    );
}
