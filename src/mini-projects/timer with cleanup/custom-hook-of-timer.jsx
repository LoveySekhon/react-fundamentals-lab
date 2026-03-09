//Custom hooks in react
//This custom hook displays a timer and can be used n number of time and in any n number of components

import { useEffect, useState } from "react";

function useTimer(){  //mandatory condition Custom hooks must start with keyword "use"--useTimer.

    const[seconds , setSeconds] = useState(0);

    useEffect(()=>{
        const id = setInterval(()=>{
            setSeconds(prev => prev +1);
        },1000);

        return ()=>{
            clearInterval(id);
        };
    },[]);
    return seconds;
}

export default useTimer;