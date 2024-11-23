import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { FaUserGear } from "react-icons/fa6";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";

export default function MenuDropdown({ user }) {
    return (
        <Menu>
            <MenuButton
                id="menu-button"
                className="items-center gap-2 font-semibold rounded-md shadow-inner text-sm/6 shadow-white/10"
            >
                {user.name}
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom"
                className="w-52 origin-top-right bg-white rounded border border-black mt-6 p-1 text-sm/6 text-gray-900 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <MenuItem>
                    <Link
                        href="/profile"
                        className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-900/10 ${
                            route().current("profile.edit")
                                ? "bg-gray-900/10"
                                : ""
                        }`}
                    >
                        <FaUserGear />
                        Profile
                        <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">
                            ⌘P
                        </kbd>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                        method="post"
                        href={route("logout")}
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-900/10"
                    >
                        <HiMiniArrowLeftStartOnRectangle />
                        Logout
                        <kbd className="ml-auto hidden font-sans text-xs text-black group-data-[focus]:inline">
                            ⌘L
                        </kbd>
                    </Link>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
}
