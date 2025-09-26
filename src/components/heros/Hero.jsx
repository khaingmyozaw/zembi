import React from 'react'
import Profile from './Profile'

const Hero = () => {
    return (
        <section className="h-[90vh] relative mt-16 border-b border-sky-600 dark:border-sky-300/30 stripes pointer-events-none" id="home">
            <div
                className="h-full container mx-auto md:border-x md:border-sky-300/30 bg-gray-200 dark:bg-[#030713] flex flex-col justify-center items-center"
            >

                <div className="w-full flex flex-col justify-center items-center gap-4 grow">
                    {/* <!-- Profile Start --> */}
                    <Profile />
                    {/* <!-- Profile End --> */}
                    <div className="w-md max-w-full md:max-w-md text-gray-400">
                        {/* <!-- Code View Start --> */}
                        <div className="w-full bg-gray-800 p-3 flex gap-1 items-center text-sm border-b border-gray-700">
                            <span className="p-2 rounded-full bg-red-500"></span>
                            <span className="p-2 rounded-full bg-yellow-400"></span>
                            <span className="p-2 rounded-full bg-green-400"></span>
                        </div>

                        <div className="w-full flex-1 bg-gray-900 p-4 font-mono text-lg leading-relaxed">
                            <pre className="w-full overflow-auto whitespace-pre-wrap" id="codeview"></pre>
                        </div>
                        {/* <!-- Code View End --> */}

                        {/* <!-- Buttons Start --> */}
                        <div className="w-full flex justify-between mt-3 _element-stripes border border-white/10 z-40 pointer-events-auto">
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
                            <a className="group" href="./asset/files/khaingmyozaw-updated-cv.pdf" download>
                                <span
                                    className="inline-block relative px-4 py-3 text-[.75rem]/[1.2rem] font-medium tracking-widest text-black text-green-800 uppercase dark:text-green-300">
                                    <span
                                        className="absolute inset-0 border border-dashed border-green-600 dark:border-green-300/60 bg-green-800/20 dark:bg-green-400/10 dark:border-green-300/30 group-hover:bg-green-800/30 group-hover:dark:bg-green-400/15 transition-all duration-200"></span>
                                    Download CV
                                    <svg width="5" height="5" viewBox="0 0 5 5"
                                        className="absolute top-[-2px] left-[-2px] fill-green-300 dark:fill-green-300/50">
                                        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                                    </svg>
                                    <svg width="5" height="5" viewBox="0 0 5 5"
                                        className="absolute top-[-2px] right-[-2px] fill-green-300 dark:fill-green-300/50">
                                        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                                    </svg>
                                    <svg width="5" height="5" viewBox="0 0 5 5"
                                        className="absolute bottom-[-2px] left-[-2px] fill-green-300 dark:fill-green-300/50">
                                        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                                    </svg>
                                    <svg width="5" height="5" viewBox="0 0 5 5"
                                        className="absolute right-[-2px] bottom-[-2px] fill-green-300 dark:fill-green-300/50">
                                        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        {/* <!-- Buttons End --> */}
                    </div>
                </div>
                {/* <!-- About Me --> */}
                <div className="w-full shrink-0">
                    <a href="#about"
                        className="p-3 rounded mx-auto flex flex-col justify-center items-center text-gray-950 dark:text-white text-opacity-70 hover:scale-105 hover:text-opacity-100 duration-300 ease-in-out">
                        <span>About me</span>
                        <span className="animate-bounce">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2"
                                fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                                <polyline points="7 13 12 18 17 13"></polyline>
                                <polyline points="7 6 12 11 17 6"></polyline>
                            </svg>
                        </span>

                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
