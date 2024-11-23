export default function ChangelogItem({ date, list }) {
    return (
        <>
            <h5 className="text-3xl">{date}</h5>
            <hr className="border-black mb-2" />
            <ul className="list-disc list-inside">
                {list.map((item, index) => (
                    <li className="text-lg" key={index}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </>
    );
}
