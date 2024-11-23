export default function InputText({ ...props }) {
    return (
        <input
            {...props}
            className="px-4 py-2 w-full border-2 border-black shadow-md transition focus:outline-none focus:shadow-xs"
        />
    );
}
