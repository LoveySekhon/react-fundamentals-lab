import { useState } from "react";

function DeleteTodoState(){
    const[todos , setTodos] = useState([
        {id : 1 , text : "Learn React"},
        {id : 2 , text : "Learn Python"},
        {id : 3 , text : "Complete Course"},
        {id : 4 , text : "Practice DSA"},
        {id : 5 , text : "Go to Gym"}
    ]);

    function deleteTodo(idToRemove){
        setTodos(prev => prev.filter(todo => todo.id !== idToRemove));

        console.log("Deleted Todo ID : " , idToRemove);
    }

    return(
        <div>
            {todos.map(todo =>
                <div key = {todo.id}>{todo.text}
                <button onClick = {() => deleteTodo(todo.id)}>Delete</button></div>
            )}
        </div>
    )
}

export default DeleteTodoState;