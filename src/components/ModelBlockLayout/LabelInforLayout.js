import React from 'react'

const LabelLayout = ({children}) => {
    return (
        <div className="-mx-3 md:flex mb-3">
            <div className="md:w-full px-3">
                <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md">
                    {children}
                </label>
            </div>
        </div>
    )
}

export default LabelLayout
