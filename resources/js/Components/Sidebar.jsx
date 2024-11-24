import { Link } from "@inertiajs/react";

export default function Sidebar({ sidemenu = [] }) {
    return (
        <>
            <div className="flex flex-col w-full max-w-[120px] space-y-4">
                {sidemenu.map((menu, index) => (
                    <Link
                        href={menu.href}
                        key={index}
                        className="px-4 py-2 text-center transition-all border border-black rounded-md shadow-2xl hover:shadow-xs bg-blue-400/80"
                    >
                        <h1>{menu.title}</h1>
                    </Link>
                ))}
            </div>
        </>
    );
}
