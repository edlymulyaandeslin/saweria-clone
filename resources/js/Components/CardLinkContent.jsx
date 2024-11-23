export default function CardLinkContent({ title, description, image }) {
    return (
        <>
            <div className="grid grid-cols-2 px-4">
                <h1 className="text-2xl">{title}</h1>
                <img
                    src={image}
                    alt="no image"
                    className="w-[120px] h-[120px]"
                />
            </div>

            <p className="text-lg">{description}</p>
        </>
    );
}
