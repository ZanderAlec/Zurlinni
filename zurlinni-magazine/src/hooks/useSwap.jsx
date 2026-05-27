import { useState } from "react"

export const useSwap = (toLeftFunction, toRighFunction) => {
    const [touchStart, setTouchStart] = useState(0);
      const [touchEnd, setTouchEnd] = useState(0);
    
      const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
      };
    
      const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
      };
    
      const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
          toRighFunction();
        }
    
        if (touchEnd - touchStart > 50) {
          toLeftFunction();
        }
      };

      return {handleTouchStart, handleTouchMove, handleTouchEnd}
}