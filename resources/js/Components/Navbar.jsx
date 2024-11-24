import Icon from "./Icon";
import MenuDropdown from "./MenuDropdown";

export default function Navbar({ user }) {
    return (
        <div className="flex justify-between pb-2 mt-2 border-b border-black">
            <Icon className="px-8 py-1 border border-black rounded w-52" />

            <div className="flex items-center justify-center">
                <label
                    htmlFor="menu-button"
                    className="flex items-center justify-center px-8 py-2 border-2 border-black rounded shadow-2xl cursor-pointer gap-x-4"
                >
                    <span>
                        <img src="/img/doggo_happy.svg" className="w-8" />
                    </span>
                    <MenuDropdown user={user} />
                </label>
            </div>
        </div>
    );
}
