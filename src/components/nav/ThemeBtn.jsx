import { Moon, SunDim } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function ThemeBtn() {
    const [isSwitch, setIsSwitch] = useState(true);
    const toggleSwitch = () => (
        setIsSwitch(!isSwitch)
    )

    return (
        <button
            className="bg-black/10 dark:bg-white/10 h-7 py-1 me-12 lg:me-2 border border-white/10 rounded-full flex gap-2 justify-between items-center hover:bg-black/20 hover:dark:bg-white/20 transition-all duration-200 cursor-pointer group relative"
            onClick={toggleSwitch}
        >
            <SunDim
                size="100%"
                className="pl-1 opacity-70 group-hover:opacity-100"
            />
            <Moon
                size="100%"
                className="pr-1 opacity-70 group-hover:opacity-100"
            />

            {/* background trigger */}
            <AnimatePresence>
                <motion.span
                    className={`w-7 h-7 bg-black/10 dark:bg-white/10 rounded-full transition-all duration-300 absolute -z-1`}
                    initial={{ x: 0, scale: 0.86 }}
                    animate={{ x: isSwitch ? 0 : 24, scale: 0.86 }}
                    exit={{ x: 0, scale: 0.86 }}
                    transition={{
                        x: { duration: .25 },
                        scale: { duration: .25 }
                    }}
                />
            </AnimatePresence>
        </button>
    )
}