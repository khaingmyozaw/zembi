import React from 'react'
import Profile from './Profile'
import PreviewBtn from '../layouts/buttons/PreviewBtn';
import DownloadBtn from '../layouts/buttons/DownloadBtn';
import TypingSequence from '../animations/TypingSequence';

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
                            {/* Typing Animation */}
                            <TypingSequence />
                        </div>
                        {/* <!-- Code View End --> */}

                        {/* <!-- Buttons Start --> */}
                        <div className="w-full flex justify-between mt-3 _element-stripes border border-white/10 z-40 pointer-events-auto">
                            <PreviewBtn />
                            <DownloadBtn />
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
