import DesktopMenu from "../nav/DesktopMenu";
import MobileMenu from "../nav/MobileMenu";
import HumbuggerBtn from "../nav/HumbuggerBtn";

export default function Nav() {
    return (
        <>
            <nav className="w-full h-16 bg-gray-200 dark:bg-gray-950 fixed top-0 left-0 z-30 shadow-md border-b border-sky-300/30">
                <div className="h-full container px-6 mx-auto flex justify-between items-center">
                    <a href="#" className="w-fit">
                        <h1 className="font-bold text-start text-red-500">
                            ZEMBI
                        </h1>
                    </a>

                    <div className="relative text-black dark:text-white w-full lg:w-auto flex justify-end">
                        {/* Desktop Menu */}
                        <DesktopMenu items={menuItems}/>

                        {/* Hamburger Button */}
                        <HumbuggerBtn />
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu items={menuItems} />
        </>
    )
}

const menuItems = [
    {
        id: 1,
        url: "#about",
        content: "About",
    },
    {
        id: 2,
        url: "#experience",
        content: "experience",
    },
    {
        id: 3,
        url: "#contact",
        content: "contact me",
    },
]