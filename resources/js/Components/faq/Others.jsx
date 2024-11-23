import Accordion from "../Accordion";

export default function Others() {
    const aboutFaq = [
        {
            title: "What fees do I or the donors have to pay?",
            description:
                "A 5% fee is deducted from transactions, with a minimum of 150 rupiah for gateway and operational costs. A Rp 5,000 fee is deducted for fund withdrawals.",
        },
        {
            title: "Where can I ask about other things not listed in the FAQ?",
            description:
                "Hubungi via email help@saweria.co, DM twitter @saweriaco atau instagram @saweria_co. Layanan tidak 24 jam, untuk kerja sama email contact@saweria.co. Follow media sosial untuk info terbaru.",
        },
        {
            title: "What is service fee?",
            description:
                "The service fee is an additional charge imposed by the payment gateway for each support transaction.",
        },
        {
            title: "What does service fee by streamer mean?",
            description:
                "For every support transaction received by the streamer, a service fee (payment gateway) from 0.8% - 2% will be deducted from the tip amount received by the streamer.",
        },
        {
            title: "What does service fee by supports mean?",
            description:
                "For every support transaction, a service fee (payment gateway) will be added to the tip amount and charged to the supporter based on the payment method used.",
        },
    ];

    return (
        <>
            <h1 className="text-4xl">Fees and Others</h1>
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
