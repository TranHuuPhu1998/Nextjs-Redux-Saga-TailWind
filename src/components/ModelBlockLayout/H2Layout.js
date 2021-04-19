import React from 'react'

const H2Layout = ({children}) => {
    return (
        <h2 className="font-bold text-center text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 rounded-md border-solid border-red-500 sm:text-3xl xs:text-xl">
            {children}
        </h2>
    )
}

export default H2Layout
