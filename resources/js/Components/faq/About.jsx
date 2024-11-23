import Accordion from "../Accordion";

export default function About() {
    const aboutFaq = [
        {
            title: "What is Saweria?",
            description:
                "Saweria is a service to help YOU to receive financial support from your fans. Donations are one-time (not subscription) and filled with features that allow you to interact with your donators! Saweria is not a livestreaming platform, you can livestream using other platforms such as Youtube, Twitch, Facebook Live, Bigo, and etc.",
        },
        {
            title: "Who can use Saweria?",
            description:
                "Mostly streamers that do let's plays, music tutorials, drawing tutorials, photo/video editing tutorials, Just Chatting, DJ Sets to Viewer's decide songlist. We are really open to ideas on how you would like to use our service. Of course, as long as it is in accordance with Indonesian laws (please read our T&C, for more details https://saweria.co/terms).",
        },
        {
            title: "I'm not a streamer, can I still use Saweria?",
            description:
                "Of course! Donations received will still go to your account even when you’re not live. The downside is that there is no real-time notification when someone donates. However, you can still check your donators through the “Support Sent” tab in Saweria Website.",
        },
        {
            title: "What live streaming platform can be integrated with Saweria?",
            description:
                "Saweria is integrated with broadcasting softwares that offers the feature “Browser source”; we recommend using OBS or SLOBS",
        },
        {
            title: "How can I use Saweria?",
            description:
                "Register your account in Saweria at https://saweria.co/register. Enter your data. Your username will be part of your donation link and it can only be changed after 30 days. Choose your username wisely! Verify your account, it is best to verify your account early as this will interfere with your cashout process. Adjust the overlay display for your livestreams. Don’t forget to put your QR Code and Saweria link in your description box or pinned chat! Say Hi to your donators!",
        },
        {
            title: "Why can't I register?",
            description:
                "Ensure that you are using your personal email address and your username is registered with alphabet and numbers without symbols.",
        },
        {
            title: "How do I Use Saweria's Overlay?",
            description:
                "Please check this video tutorial on how to display Saweria’s overlay on OBS in saweria.co/tutorial",
        },
    ];

    return (
        <>
            <h1 className="text-4xl">About Saweria</h1>
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
