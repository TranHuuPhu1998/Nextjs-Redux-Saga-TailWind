import React from 'react'

const MultiButtonClose = ({onShowOption}) => {
    return (
        <button 
            onClick={onShowOption}
            type="button" 
            className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
            <svg version="1.1" className="fill-current h-4 w-4" viewBox="0 0 20 20" >
                <path d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0s0.271,0.701,0,0.969l-7.908,7.83c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25L17.418,6.109z"/>
            </svg>
        </button>
    )
}

export default MultiButtonClose
