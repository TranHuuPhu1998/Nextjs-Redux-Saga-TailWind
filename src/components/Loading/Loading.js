import React from 'react'
import {useSelector} from 'react-redux'
import styles from './Loading.module.css'

const Loading = () => {
    const loading = useSelector(state => state.uiReducers);

    return (    
        <>
            {
            loading.showLoading === true ? 
                (<div className={styles.wapper_loading}>
                    <div className={styles.loading_icon}></div>
                </div>) : (<></>)
            }
        </>
    )
}

export default Loading
