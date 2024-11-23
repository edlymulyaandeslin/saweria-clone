import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function Accordion({ title, description }) {
    return (
        <div className="h-auto">
            <div className="mx-auto w-full max-w-lg bg-gray-300/50 border-black rounded-xl border-2 shadow-3xl">
                <Disclosure as="div" className="p-4">
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-lg font-medium text-black text-start">
                            {title}
                        </span>
                        <span>
                            <IoIosArrowDown
                                size={20}
                                className="group-data-[open]:rotate-180"
                            />
                        </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-lg/5 text-black/80">
                        <div className="my-2 w-full max-w-full bg-gray-900 p-[0.5px]" />
                        {description}
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    );
}
