import React from 'react'

const MultiButtonOpen = ({onShowOption}) => {
    return (
        <button
            onClick={onShowOption}
            type="button"
            className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M2.582,13.891c-0.272,0.268-0.709,0.268-0.979,0s-0.271-0.701,0-0.969l7.908-7.83 c0.27-0.268,0.707-0.268,0.979,0l7.908,7.83c0.27,0.268,0.27,0.701,0,0.969c-0.271,0.268-0.709,0.268-0.978,0L10,6.75L2.582,13.891z"/>
            </svg>
        </button>
    )
}

export default MultiButtonOpen
