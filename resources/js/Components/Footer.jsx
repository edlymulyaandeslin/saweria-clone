import { Link } from "@inertiajs/react";
import { CiInstagram, CiMail, CiTwitter } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex justify-between gap-4 p-4">
            <div className="text-xl">Made with 💙 from lyndev</div>
            <div className="flex flex-col space-y-2 text-xl">
                <div className="flex flex-col text-right">
                    <Link href="/terms" className="hover:underline">
                        Terms and Conditions
                    </Link>
                    <Link href="/faq" className="hover:underline">
                        FAQ
                    </Link>
                    <Link href="/changelog" className="hover:underline">
                        Changelog
                    </Link>
                </div>
                <div className="flex gap-2 justify-end">
                    <Link href="/">
                        <CiMail size={25} />
                    </Link>
                    <Link href="/">
                        <CiInstagram size={25} />
                    </Link>
                    <Link href="/">
                        <CiTwitter size={25} />
                    </Link>
                    <Link href="/">
                        <FaDiscord size={25} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
