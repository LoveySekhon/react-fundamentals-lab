import { useEffect, useState } from "react";
import { useRef } from "react";

// function UseRef() {
//     const[count , setCount] = useState(0);

//     const ref = useRef(0);

//     console.log("Component Rendered");
//     console.log("Ref value:", ref.current);

//     return(
//         <div>
//             <button onClick = {()=> setCount(count + 1)}>Increment count{count}</button>

//             <button onClick = {()=> ref.current++}>Increment Ref</button>
//         </div>//when we click Incremment Ref nothing changes in console, as useRef updates the value internally without triggering a render
//             //But when Increment count is clicked then render will happen.
//     );
// }

// export default UseRef;


//Another task - focus input button -- most common use case of useRef

// function UseRef(){

//     const inputRef = useRef(null);

//     return(
//         <div>
//             <input ref = {inputRef} placeholder="Type Text Here..." />

//             <button onClick={()=> inputRef.current.focus()}>Focus Input</button>
//         </div>
//     );
// }

// export default UseRef;


//Another task - track previous count and current count using useRef

function UseRef(){
    const[count , setCount] = useState(0);

    const prevCount = useRef(0);
    
    useEffect(()=>{
        prevCount.current = count ;
    },[count]);
    
    console.log("Previous Count", prevCount.current);
    console.log("Current count" , count);

    return(
        <div>
            <button onClick = {()=> setCount(count + 1)}>Increment count {count}</button>
        </div>
    )
}

export default UseRef;