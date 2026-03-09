import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import React from "react";
//Child Component
//  const Child = React.memo(function Child(){
//                                 console.log("Child Rendered!");
                                    
//                             return (
//                                 <div>
//                                     <button >Child Button</button>
//                                 </div>
//                             )});


// //Parent Component
// function Renders(){
//     const[count , setCount] = useState(0);
    
//     console.log("App Render");

//     return(
//         <div>
//             <button onClick = {()=> setCount(count + 1)}>Increment Count {count}</button>

//             <Child />
            
//         </div>//child will not render again and again as child component is packed inside React.memo
//     );
// }

// export default Renders;

//passing functions as props 

// //Child Component

//     const Child = React.memo(function Child({onClick}){
//                                 console.log("Child Rendered!");
                                    
//                             return (
//                                 <div>
//                                     <button onClick = {onClick}>Child Button</button>
//                                 </div>
//                             )});


// //Parent Component
// function Renders(){
//     const[count , setCount] = useState(0);
    
//     console.log("App Render");

//     function handleClick(){
//         console.log("Child Button Clicked!");
//     }
    
//     return(
//         <div>
//             <button onClick = {()=> setCount(count + 1)}>Increment Count {count}</button>

//             <Child onClick = {handleClick}/>
            
//         </div>//child  render again and again although child component is packed inside React.memo, but React.memo fails as we have passed function as the props inside child , and we know that in react functions re render every time, so every time react.memo thinks this is a new prop but it was the same, and renders the child component again.
//     );
// }

// export default Renders;


//Using useCallback in normal function
// //Child Component

//     const Child = React.memo(function Child({onClick}){
//                                 console.log("Child Rendered!");
                                    
//                             return (
//                                 <div>
//                                     <button onClick = {onClick}>Child Button</button>
//                                 </div>
//                             )});


// //Parent Component
// function Renders(){
//     const[count , setCount] = useState(0);
    
//     console.log("App Render");

//     const handleClick = useCallback(()=>{
//         console.log("Child Button Clicked!");
//     },[]);
    
//     return(
//         <div>
//             <button onClick = {()=> setCount(count + 1)}>Increment Count {count}</button>

//             <Child onClick = {handleClick}/>
            
//         </div>//now child will not render when the parent components renders, because we have memorized the function handleClick using useCallback.
//     );
// }

// export default Renders;


//useMemo comes into play when objects aand arrays needs to be memorized;

//Child Component

    const Child = React.memo(function Child({user}){
                                console.log("Child Rendered!");
                                    
                            return (
                                <div>
                                    <button onClick = {()=> console.log(user.name)}>Child Button</button>
                                </div>
                            )});


//Parent Component
function Renders(){
    const[count , setCount] = useState(0);
    
    console.log("App Render");

    const user = useMemo(()=> {
        return{name : "Lovey"} 
    },[]);
    
    return(
        <div>
            <button onClick = {()=> setCount(count + 1)}>Increment Count {count}</button>

            <Child user = {user}/>
            
        </div>//
    );
}

export default Renders;






