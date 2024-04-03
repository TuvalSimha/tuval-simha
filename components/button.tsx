
type ButtonProps = {
    children: React.ReactNode;
    type: "default" | "outline";
    onClick?: () => void;
    href?: string;
}

export function Button({ href, children, type, onClick }: ButtonProps) {
    return (
        <button ref={href} onClick={onClick} className={`items-center block w-[110px] h-[41px] font-medium text-center text-neutral-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${type === "default" ? "bg-white " : "bg-neutral-600 text-white"}`}>
            {children}
        </button>

    )
}