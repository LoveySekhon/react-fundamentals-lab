import { useState } from "react";
import { useRef } from "react";
//Controlled Component -- entered value is controlled by React state - setText;
// function Controlled(){
//     const[text , setText] = useState("");
//     //console.log("Entered text : " , text);
//     return(
//         <div>
//             <input value = {text}
//                      onChange = {(e) => setText(e.target.value)} /> 
//         <p>{text}</p>
//         </div>

//     );
// }

// export default Controlled;


//Uncontrolled Component - Entered value will be managed by DOM

// function Uncontrolled(){
//     const inputRef = useRef(null);

//     function handleClick(){
//         console.log(inputRef.current.value);
//     }
    
//     return(
//         <div>
//             <input ref = {inputRef}/>
//             <button onClick = {handleClick}>Submit</button>
//         </div>
//     );
// }

// export default Uncontrolled;

//Swtiching between uncontrolled to controlled - bad practice of coding

// function Controlled(){
//     //const[text , setText] = useState(); // bad coding- component gives warning that you are switching between uncontrolled to controlled
//     const[text , setText] = useState(""); // Correct way to use State
//     return(
//         <div>
//             <input value = {text}
//             onChange = {(e) => setText(e.target.value)} />

//             <p>{text}</p>
//         </div>
//     );
// }

// export default Controlled;

//Dom manages value -- uncontrolled component
function Controlled(){
   
    const[text , setText] = useState(""); 
    return(
        <div>
            <input defaultValue={text}/>

            <p>{text}</p>
        </div>
    );
}

export default Controlled;