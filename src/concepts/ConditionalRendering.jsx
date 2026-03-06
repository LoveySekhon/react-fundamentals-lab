// This component demonstrates conditional rendering by allowing users to toggle the completion status of their to-do items.
// Users can add new to-dos, mark them as completed, or delete them from the list. The completed to-dos are visually distinguished with a line-through style.

import { useState } from "react";

function ConditionalRendering(){
    const[todos , setTodos] = useState([
        {id : 1 , text : "Learn React" , completed : false},
        {id : 2 , text : "Learn Python" , completed : false},
        {id : 3 , text : "Complete Course" , completed : false},
        {id : 4 , text : "Practice DSA" , completed : false},
        {id : 5 , text : "Go to Gym" , completed : false}
    ]);

    const[text , setText] = useState("");

    function deleteTodo(idToRemove){
        setTodos(prev => prev.filter(todo => todo.id !== idToRemove));

        console.log("Deleted Todo ID : " , idToRemove);
    }

    function addTodo(){
        if(text.trim() === "" ) return;
        setTodos(prev => [...prev , {id : Date.now() , text, completed : false}]);
        setText("");  //Clears the input box after clicking add button
    }

    function toggleTodo(id){
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))

        console.log(`Item number` ,id, `modified`);
    }

    return(
        <div>
            <input 
            value = {text}
            onChange = {(e) => setText(e.target.value)} />
            <button onClick = {addTodo}>Add</button>
            {todos.length === 0 && <p>No Todos Yet</p>}
            {todos.map(todo =>
                <div key = {todo.id}
                 style={{textDecoration: todo.completed ? "line-through" : "none"}}
                >{todo.text}
                <button onClick = {() => deleteTodo(todo.id)}>Delete</button>

                <button onClick = {() => toggleTodo(todo.id)}>{todo.completed ? "Undo" : "Complete"}</button>

                </div>
            )}
        </div>
    )
}

export default ConditionalRendering;