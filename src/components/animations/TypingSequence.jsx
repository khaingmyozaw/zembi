import React, { useState } from 'react'
import TypeEffect from './TypeEffect'

const TypingSequence = () => {
    const keywords = [
        { text: "console.", className: "text-teal-300" },
        { text: "log(", className: "text-blue-400" },
        { text: '"Hello, world!"', className: "text-green-400" },
        { text: ")", className: "text-blue-400" },
        { text: ";", className: "" },
        { text: "\n\n", className: "" },
        { text: "const ", className: "text-teal-300" },
        { text: "name", className: "text-yellow-300" },
        { text: "=", className: "" },
        { text: '"Khaing Myo Zaw"', className: "text-green-300" },
        { text: ";", className: "" },
        { text: "\n", className: "" },
        { text: "const ", className: "text-teal-300" },
        { text: "position", className: "text-yellow-300" },
        { text: "=", className: "" },
        { text: '"Web Developer"', className: "text-green-300" },
        { text: ";", className: "" },
    ];

    const [keywordIndex, setKeywordIndex] = useState(0);

    return (
        <pre className="w-full overflow-auto whitespace-pre-wrap" id="codeview">
            {
                keywords.map((keyword, index) => {

                    if (index < keywordIndex) {
                        return (
                            <span key={`typing-${index}`} className={keyword.className}>
                                {keyword.text}
                            </span>
                        )
                    }

                    if (index === keywordIndex) {
                        return (
                            <TypeEffect
                                key={`typing-${index}`}
                                text={keyword.text}
                                className={keyword.className}
                                onDone={() => setKeywordIndex(prev => prev + 1)}
                            />
                        )
                    }

                    return null;
                })
            }
        </pre>
    )
}

export default TypingSequence