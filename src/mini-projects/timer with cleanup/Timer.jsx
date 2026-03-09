//Timer that displays seconds, updates previously displayed second to the new one every second + a cleanup function to stop the timer.
// import { useEffect, useState } from "react";

// function Timer(){

//     const[seconds , setSeconds] = useState(0);

//     useEffect(()=>{

//         const id = setInterval(()=>{
//             setSeconds(prev => prev + 1);
//         },1000);

//         return()=>{
//             clearInterval(id);
//             console.log("cleanup ran!")
//         };
//     },[]);

//     return(
//         <div>
//             <h2>{seconds}</h2>
//         </div>
//     );
// }

// export default Timer;

//Lets do same functionality but using custom hook that we made in useTimer.jsx

import useTimer from "./custom-hook-of-timer";

function Timer (){

    const seconds = useTimer();

    return(
        <div>
            <h2>{seconds}</h2>
        </div>
    );
}
export default Timer;