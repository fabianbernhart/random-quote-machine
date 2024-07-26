import React, { useState } from 'react'
import { FaTwitter } from 'react-icons/fa'
import quotesData from '../quotes.json'

const Quote: React.FC = () => {
    const [quoteIndex, setQuoteIndex] = useState(0)

    const handleNextQuote = () => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotesData.length)
    }

    const currentQuote = quotesData[quoteIndex]
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote.text}" - ${currentQuote.author}`)}`

    return (
        <div
            id="quote-box"
            className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
        >
            <p id="text" className="text-xl font-semibold mb-4">
                "{currentQuote.text}"
            </p>
            <p id="author" className="text-gray-700 text-right mb-4">
                - {currentQuote.author}
            </p>
            <a
                id="tweet-quote"
                href={tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2"
            >
                <FaTwitter className="mr-2" />
                Tweet
            </a>
            <button
                id="new-quote"
                onClick={handleNextQuote}
                className="w-full h-10 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
                Next Quote
            </button>
        </div>
    )
}

export default Quote
