//Add an item to list - User Input ( Input box appears when user clicks Add button)
import { useState } from "react";

function ControlledInputPractice(){
    const[todos , setTodos] = useState([
        {id : 1 , text : "Learn React"},
        {id : 2 , text : "Learn Python"},
        {id : 3 , text : "Complete Course"},
        {id : 4 , text : "Practice DSA"},
        {id : 5 , text : "Go to Gym"}
    ]);

    const[text , setText] = useState("");

    function deleteTodo(idToRemove){
        setTodos(prev => prev.filter(todo => todo.id !== idToRemove));

        console.log("Deleted Todo ID : " , idToRemove);
    }

    function addTodo(){
        if(text.trim() === "" ) return;
        setTodos(prev => [...prev , {id : Date.now() , text}]);
        setText("");  //Clears the input box after clicking add button
    }

    return(
        <div>
            <input 
            value = {text}
            onChange = {(e) => setText(e.target.value)} />
            <button onClick = {addTodo}>Add</button>
            {todos.map(todo =>
                <div key = {todo.id}>{todo.text}
                <button onClick = {() => deleteTodo(todo.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ControlledInputPractice;