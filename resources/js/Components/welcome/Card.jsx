import clsx from "clsx";

export default function Card({ cardTitle, children, className }) {
    return (
        <div className="relative w-full max-w-xl mx-auto my-16">
            <div
                className={clsx(
                    "border border-black h-auto w-full p-4 text-lg shadow-3xl",
                    !cardTitle ? "rounded" : "rounded-b rounded-l"
                )}
            >
                {children}
            </div>
            {cardTitle && (
                <div
                    className={clsx(
                        "absolute -top-9 right-0 py-1 -z-10 border-x border-t border-black min-w-[200px] text-center rounded-t",
                        className
                    )}
                >
                    <span className="text-xl font-semibold">{cardTitle}</span>
                </div>
            )}
        </div>
    );
}
