import axios from 'axios';
import React, { useEffect } from 'react'
import * as url from '../../constants'
import {useVirtual} from 'react-virtual'
import LineCard from './LineCard'
import styles from './lineCard.module.css'

const ReactVitualScroll = ({taskitem}) => {

        const parentRef = React.useRef()

        const rowVirtualizer = useVirtual({
            size: taskitem.length,
            parentRef,
            estimateSize: React.useCallback(() => 43, []),
        })

        return (
            <div>
                <div className="ml-5 mr-5 flex items-center justify-between p-2 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" 
                    style={{width:'388px'}}>
                    React Virtual Scroll Task
                </div>
                <div ref={parentRef}
                    className="List"
                    style={{
                        height: `550px`,
                        width: `400px`,
                        margin : '20px',
                        overflow: 'auto',
                    }}
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
                                className={virtualRow.index % 2 ? '' : styles.ListItemEven}
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
