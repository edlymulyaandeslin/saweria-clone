import Accordion from "../Accordion";

export default function Tip() {
    const aboutFaq = [
        {
            title: "Why can't the saweria barcode be scanned?",
            description:
                "Barcode Saweria bukan QRIS, scan dengan aplikasi kamera/barcode scanner. Akan diarahkan ke halaman donasi untuk memilih pembayaran.",
        },
        {
            title: "What is the minimum tip and the minimum fund that can be withdrawn?",
            description:
                "The minimum support amount is ₱10, and the minimum amount that can be withdrawn is ₱500.",
        },
        {
            title: "Can funds that have been sent be withdrawn?",
            description:
                "No, the support funds sent cannot be withdrawn through Saweria.",
        },
    ];

    return (
        <>
            <h1 className="text-4xl">Sending and Receiving Tip</h1>
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8 md:gap-8">
                {aboutFaq.map((faq, index) => (
                    <Accordion
                        key={index}
                        title={faq.title}
                        description={faq.description}
                    />
                ))}
            </div>
        </>
    );
}
