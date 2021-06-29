import axios from 'axios';
import React, { useEffect } from 'react'
import * as url from '../../constants'
import {useVirtual} from 'react-virtual'

const LineCard = ({taskitem}) => {

    String.prototype.limit = function(length) {
        return this.length > length ? (this.substring(0, length) + '...') : this;
    }

    return (
        <div className="flex justify-between border-b-2 border-solid border-current p-2 font-sans">
            <p>{taskitem.taskname.trim().limit(10)}</p>
            <p className="text-xs text-red-500">{taskitem.status}</p>
            <p className="text-xs text-red-500">{new Date(taskitem.created_at).toLocaleTimeString('en-US')}</p>
        </div>
    )
}


const ReactVitualScroll = ({taskitem}) => {

        const parentRef = React.useRef()

        const rowVirtualizer = useVirtual({
            size: taskitem.length,
            parentRef,
            estimateSize: React.useCallback(() => 43, []),
        })

        return (
            <div className="h-5/6 overflow-y-hidden">
                <div className="ml-5  mr-5 mt-5 flex items-center justify-between p-2 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" 
                    style={{width:'388px'}}>
                    React Virtual Scroll Task
                </div>
                <div ref={parentRef}
                    className="List overflow-auto m-5 h-1/2"
                    style={{width: `400px`,}}
                >
                    <div
                        className="border border-solid border-red-500"
                        style={{
                            height: `${rowVirtualizer.totalSize}px`,
                            width: '100%',
                            position: 'relative',
                        }}
                    >
                        {rowVirtualizer.virtualItems.map(virtualRow => (
                            <div
                                key={virtualRow.index}
                                className={virtualRow.index % 2 ? '' : 'bg-blue-300'}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    transform: `translateY(${virtualRow.start}px)`,
                                }}
                            >
                                <LineCard taskitem={taskitem[virtualRow.index]}  key={virtualRow.index}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
}


export default ReactVitualScroll
