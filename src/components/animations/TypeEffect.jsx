import React, { useEffect, useState } from 'react'

const TypeEffect = ({ text, className, delay = 80, onDone }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (displayedText.length < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [displayedText, text, delay]);

    useEffect(() => {
        if (displayedText.length === text.length) {
            onDone?.();
        }
    })

    return (
        <span className={className}>{displayedText}</span>
    )
}

export default TypeEffect