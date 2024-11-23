import { Link } from "@inertiajs/react";
import clsx from "clsx";

export const Button = ({
    children,
    size = "md",
    className,
    href,
    variant = "default",
    ...props
}) => {
    const btnVariant = (btnVariant, btnSize) => {
        let btnStyle = "";

        if (btnVariant === "outline") {
            btnStyle =
                "shadow-md hover:shadow-xs bg-transparent text-black border-2 border-black ";
        } else if (btnVariant === "link") {
            btnStyle = "bg-transparent text-black hover:underline ";
        } else {
            btnStyle =
                "shadow-md hover:shadow-xs text-black border-2 border-black ";
        }

        let sizing = "";

        if (btnSize === "sm") {
            sizing = "px-4 py-1 text-sm ";
        } else if (btnSize === "lg") {
            sizing = "px-8 py-3 text-lg ";
        } else {
            sizing = "px-6 py-2 text-base ";
        }

        return btnStyle + sizing;
    };

    const btnStyle = btnVariant(variant, size);

    return (
        <Link
            href={href}
            className={clsx(
                `${btnStyle} rounded text-center font-head transition-all outline-none`,
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
};
