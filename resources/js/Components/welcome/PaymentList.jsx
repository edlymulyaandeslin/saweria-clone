import clsx from "clsx";
import { GoCheckCircleFill } from "react-icons/go";

export default function PaymentList({ title, data, className }) {
    return (
        <div>
            <p>{title}</p>
            <ol>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className={clsx("flex gap-2 items-center", className)}
                    >
                        <GoCheckCircleFill className="text-green-400" />
                        {item.title}
                    </li>
                ))}
            </ol>
        </div>
    );
}
