import Card from "./Card";
import PaymentList from "./PaymentList";

export default function CardPayment() {
    const paymentIndo = [
        {
            title: "GOPAY",
        },
        {
            title: "OVO",
        },
        {
            title: "DANA",
        },
        {
            title: "LINKAJA",
        },
        {
            title: "QRIS",
        },
    ];

    const paymentPh = [
        {
            title: "MAYA",
        },
        {
            title: "GCASH",
        },
        {
            title: "SHOPEEPAY",
        },
        {
            title: "GRABPAY",
        },
    ];

    return (
        <Card>
            <p>
                Saweria helps you to receive financial support from your fans
                with these payment methods:
            </p>
            <div className="flex justify-evenly my-4">
                <PaymentList title="🇮🇩 Indonesia" data={paymentIndo} />
                <PaymentList title="🇵🇭 Philipines" data={paymentPh} />

                <div>
                    <img src="/img/ayam-coin.png" alt="ayam coin" />
                </div>
            </div>
            <p>
                You can easily cashout to all banks and e-wallet in Indonesia /
                Philipines.
            </p>
        </Card>
    );
}
