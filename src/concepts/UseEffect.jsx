import { useEffect, useState } from "react";

// function UseEffect(){

//     const[count , setCount] = useState(0);

//     // useEffect(() => {
//     //     console.log("Component mounted!");
//     // },[]);   //---> only runs once during render 

//     useEffect(() =>{
//             console.log("Count is ", count);
//         },[count]);   //----> runs every time the button is clicked or the count is increased.

//     // useEffect(() => {
//     //     console.log("Component Rendered!");
//     // }); //----> Runs every render

//     return(
//         <div>
//             <p> count : {count} </p>

//             <button onClick={()=> setCount( count + 1)}>Increase</button>
//         </div>
//     );
// }

// export default UseEffect;


//set and get in useEffects

// function UseEffect(){
//     const[todos , setTodos] = useState([
//         {id : 1 , text: "Learn react"},
//         {id : 2 , text: "Learn react"},
//         {id : 3 , text: "Learn react"}
//     ]);

//     //Save Todos
//     useEffect(()=>{
//         localStorage.setItem("todos" , JSON.stringify(todos));
//     },[todos]);

//     //Load Todos
//     useEffect(()=>{
//         const storedTodos = localStorage.getItem("todos");
//         if(storedTodos){
//             setTodos(JSON.parse(storedTodos));
//         }
//     },[]);


//     return(
//         <div>
//             {todos.map(todo => (
//                 <div key ={todo.id}>{todo.text}</div>
//             ))}
//         </div>
//     )
// }

// export default UseEffect;


//small practice question -- concept - cleanup function-- every second is printing in the console.


function UseEffect(){
    useEffect(()=>{
        let seconds = 0;

        const id  = setInterval(()=>{
            seconds++;

            console.log(seconds);
        },1000);

        return () =>{
            clearInterval(id);
        }
    },[]);

    return(
        <div>
            <p>Timer Running...</p>
        </div>
    );
}

export default UseEffect;