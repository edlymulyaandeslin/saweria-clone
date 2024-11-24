import clsx from "clsx";

export default function Cards({ className, children }) {
    return (
        <div
            className={clsx(
                "w-full h-auto p-4 my-4 border border-black rounded min-h-20 shadow-3xl",
                className
            )}
        >
            {children}
        </div>
    );
}
