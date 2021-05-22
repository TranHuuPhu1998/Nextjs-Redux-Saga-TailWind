import React from 'react'

const LineCard = ({taskitem}) => {
    String.prototype.limit = function(length) {
        return this.length > length ? (this.substring(0, length) + '...') : this;
    }

    return (
        <div className="flex justify-between border-b-2 border-solid border-current p-2 font-sans">
            <p>{taskitem.taskname.limit(10)}</p>
            <p className="text-xs text-red-500">{taskitem.status}</p>
            <p className="text-xs text-red-500">{new Date(taskitem.created_at).toLocaleTimeString('en-US')}</p>
        </div>
    )
}

export default LineCard
