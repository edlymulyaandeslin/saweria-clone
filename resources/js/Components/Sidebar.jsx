export default function Sidebar({ sidemenu = [], handleOpen }) {
    return (
        <>
            <div className="flex flex-col w-full max-w-[120px] space-y-4">
                {sidemenu.map((menu, index) => (
                    <button
                        key={index}
                        onClick={() => handleOpen(menu.open)}
                        className="px-4 py-2 text-center transition-all border border-black rounded-md shadow-2xl hover:shadow-xs bg-blue-400/80"
                    >
                        <h1>{menu.title}</h1>
                    </button>
                ))}
            </div>
        </>
    );
}
