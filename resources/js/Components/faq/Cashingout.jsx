import Accordion from "../Accordion";

export default function Cashingout() {
    const aboutFaq = [
        {
            title: "How long does it take to confirm incoming support before it can be withdrawn?",
            description:
                "It takes 3 business days for confirmation by the Payment Gateway. After confirmation, the balance is increased and ready to be withdrawn. For example: if support is given on January 10th at 12.00 WIB, funds can be withdrawn on January 13th at 12.00 WIB.",
        },
        {
            title: "How long does the fund withdrawal process to my bank account take?",
            description:
                "Funds withdrawn on a business day are transferred immediately, outside business hours/working days they are sent the next business day. For example: if you request a withdrawal at 12:00 AM, the funds will be transferred during the next business day's working hours.",
        },
        {
            title: "Why did I fail to cash out?",
            description:
                "Check the destination account, internet connection, email confirmation link (valid for 10 minutes), use a different browser. If the problem persists, contact us via email or DM.",
        },
    ];

    return (
        <>
            <h1 className="text-4xl">Cashing out</h1>
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
