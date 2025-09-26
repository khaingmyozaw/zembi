const MenuButton = ({action}) => {
    return (
        <button id="menu-btn"
            className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 p-2 rounded-md hover:border border-white/40 z-50"
            onClick={action}
            >
            <div className="w-full h-full relative">
                <div className="w-full h-0.5 bg-red-500 absolute top-0"></div>
                <div className="w-full h-0.5 bg-red-500 absolute top-1/2 -translate-y-1/2"></div>
                <div className="w-full h-0.5 bg-red-500 absolute bottom-0"></div>
            </div>
        </button>
    )
}

export default MenuButton;