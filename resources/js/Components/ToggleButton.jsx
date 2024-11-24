import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function ToggleButton() {
    const [enabled, setEnabled] = useState(false);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group relative flex h-6 w-12 cursor-pointer rounded-full bg-gray-900/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-blue-600"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-6"
            />
        </Switch>
    );
}
