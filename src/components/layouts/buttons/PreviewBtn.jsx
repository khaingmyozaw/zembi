import React from 'react'

const PreviewBtn = () => {
    return (
        <a target="_blank" href="./asset/files/khaingmyozaw-updated-cv.pdf" className="group">
            <span
                className="inline-block relative px-4 py-3 text-[.75rem]/[1.2rem] font-medium tracking-widest text-sky-800 uppercase dark:text-sky-300 group-hover:text-black group-hover:dark:text-sky-300">
                <span
                    className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-800/20 dark:bg-sky-400/10 dark:border-sky-300/30 group-hover:bg-sky-800/30 group-hover:dark:bg-sky-400/15 transition-all duration-200"></span>
                Checkout CV
                <svg width="5" height="5" viewBox="0 0 5 5"
                    className="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50">
                    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg width="5" height="5" viewBox="0 0 5 5"
                    className="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50">
                    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg width="5" height="5" viewBox="0 0 5 5"
                    className="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50">
                    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
                <svg width="5" height="5" viewBox="0 0 5 5"
                    className="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50">
                    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                </svg>
            </span>
        </a>
    )
}

export default PreviewBtn