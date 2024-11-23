export default function Header() {
    return (
        <header className="bg-yellow-500">
            <marquee
                behavior="scroll"
                direction="left"
                loop="infinite"
                scrollamount="10"
                className="flex items-center"
            >
                <span className="text-xl">
                    Media share now supports TikTok and IG Reels! Check your
                    Overlay settings.
                </span>
            </marquee>
        </header>
    );
}
