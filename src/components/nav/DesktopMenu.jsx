export default function DesktopMenu({ items }) {
    return (
        <ul className="hidden lg:flex gap-4 items-center">
            {items.map(item => (
                <li key={`desktop-menu-${item.id}`}>
                    <a href={item.url} className="p-3 capitalize border-red-500 hover:border-b-2">
                        {item.content}
                    </a>
                </li>
            ))}
        </ul>
    );
}