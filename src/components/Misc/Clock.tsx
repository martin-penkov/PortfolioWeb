import { useEffect, useState } from "react";

export const Clock = ({ className }) => {
    const [currTime, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000)
    
        return () => clearInterval(intervalId);
      }, [])


    return (
        <p className={className}>
            {currTime.toLocaleTimeString()}
        </p>
    )
}