import react , {useEffect , useRef} from 'react'

export const useClickOutSide = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("click", listener);
      // document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("click", listener);
          // document.removeEventListener("touchstart", listener);
        };
    },[ref, handler]);
} 

