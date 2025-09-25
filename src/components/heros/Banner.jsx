import React from 'react'
import Alert from './Alert'
import Hero from './Hero'

const Banner = () => {
    return (
        <main className="bg-gray-300 text-white dark:bg-[#030713]">
            <div className="w-full h-full relative">
                <Alert />
                <Hero />
            </div>
        </main>
    )
}

export default Banner
