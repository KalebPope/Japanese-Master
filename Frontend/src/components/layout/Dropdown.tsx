type DropdownType = {
    items: {id: number, path: string, text: string}[];
    isDown:boolean;
}

export default function Dropdown({items, isDown}:DropdownType) {

    return (
        <div className={`absolute bg-black ${isDown ? "flex flex-col gap-1" : "hover:flex hover:flex-col hidden gap-1"}`}>
        {items.map((item) => (
            <a className="text-white" key={item.id} href={item.path}>{item.text}</a>
        ))}
        </div>
    )
}