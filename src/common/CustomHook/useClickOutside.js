import react , {useEffect} from 'react'

export const useClickOutSide = (ref, callback) => {
    const handleClick = e => {
        if(ref.current && !ref.current.contains(e.target)){
            callback()
        }
        useEffect(() => {
            document.addEventListener('click' , handleClick);
            return () => {
                document.removeEventListener('click' , handleClick);
            }  
        });
    }
} 


// let history

// if (typeof document !== 'undefined') {
//   const {createBrowserHistory} = require('history');
//   history = createBrowserHistory()
// }