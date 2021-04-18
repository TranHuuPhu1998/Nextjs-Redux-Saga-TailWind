import React from 'react'

const LabelCreateLayout = (props) => {
    return (
        <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
            htmlFor={props.for}
        >
            {props.children}
        </label>
    )
}

export default LabelCreateLayout
