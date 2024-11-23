import { Link } from "@inertiajs/react";
import clsx from "clsx";

export default function CardLink({ href, className, children }) {
    return (
        <Link href={href}>
            <div className="w-full max-w-xl mx-auto my-8">
                <div
                    className={clsx(
                        "border border-black min-h-56 w-full p-4 text-lg shadow-3xl hover:shadow-xs transition-all rounded",
                        className
                    )}
                >
                    {children}
                </div>
            </div>
        </Link>
    );
}
