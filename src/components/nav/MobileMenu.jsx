import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function MobileMenu({ items, isShow }) {
    return (
        <AnimatePresence>
            {isShow && (
                <motion.ul
                    id="mobile-menu"
                    className={`
                        fixed top-0 left-1/2 -translate-x-1/2 w-11/12 md:w-5/6 mt-1 text-gray-950 dark:text-white border border-sky-300/20 rounded-2xl flex items-center justify-around px-4 py-6 transition-all duration-300 lg:hidden z-20 backdrop-blur-sm
                    `}
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: "-50%", opacity: 1 }}
                    exit={{ y: "100%", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {items.map(item => (
                        <li key={`mobile-menu-${item.id}`}>
                            <a href={item.url}
                                className="py-3 px-4 hover:border-b-2 rounded-2xl backdrop-blur-xs transition-all duration-200 hover:bg-sky-600/30 dark:hover:bg-sky-300/10 hover:border border-sky-300/10">
                                {item.content}
                            </a>
                        </li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    )
}