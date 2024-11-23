import { Link } from "@inertiajs/react";

export default function Icon({ ...props }) {
    return (
        <Link href="/" className="overflow-hidden p-2 rounded">
            <img src="/img/hero-icon.png" alt="hero" {...props} />
        </Link>
    );
}
