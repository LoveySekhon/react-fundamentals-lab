import { useState,useCallback } from "react";
import { memo } from "react";
import React from "react";
// //Child Component
// function Child({greet}){
//     console.log("Child component Rendered!");

// return(
//     <div>
//         <button onClick={greet}>Say Hello</button> 
//     </div> //greet is the prop that parent component will pass here.
// );
// }

// //Parent Component

// function Parent(){
    
//     const[count , setCount] = useState(0);

//     const sayHello = useCallback(()=>{ // used useCallback so the function do not be created everytime the render occurs
//         console.log("Hello!");
//     },[]);

//     return(
//         <div>
//             <button onClick = {()=> setCount(count + 1)}>Count Increase Button {count}</button>
//             <Child greet = {sayHello}/> 
//         </div> //this is the prop that are passed to Child component
//     );
// }

// export default Parent;


//Combining useCallback with React.memo

//Child Component
const Child = React.memo(function Child({greet}){ // see in the console no unneceassary child component rendering happens using React.memo with useCallback.
    console.log("Child component Rendered!");

return(
    <div>
        <button onClick={greet}>Say Hello</button> 
    </div> 
);
});

//Parent Component

function Parent(){
    
    const[count , setCount] = useState(0);

    const sayHello = useCallback(()=>{ 
        console.log("Hello!");
    },[]);

    return(
        <div>
            <button onClick = {()=> setCount(count + 1)}>Count Increase Button {count}</button>
            <Child greet = {sayHello}/> 
        </div> 
    );
}

export default Parent;