import { useState } from "react";

import TodoList from "./TodoList";
import TodoInput from "./TodoInput";


function TodoApp(){

    const[todos , setTodos] = useState([
        {id : 1 , text : "Learn React" , completed : false},
        {id : 2 , text : "Practice React" , completed : false}
    ]);

    const[text , setText] = useState("");


    function addTodo(){
        if(text.trim() === "" ) return;

        setTodos(prev => [
            ...prev,{id : Date.now(), text , completed : false}
        ]);

        setText("");
    }

    function deleteTodo(id){
        setTodos(prev => 
            prev.filter(todo => todo.id !== id)
        );

        console.log("Deleted Todo ID : " , id);
    }

    function toggleTodo(id){

        setTodos(prev =>
            prev.map(todo =>
            todo.id === id ? {...todo , completed : !todo.completed} : todo
            )
        );

        console.log(`Item number` ,id, `modified`);
    }

    return(
        <div>
            <h2>Todo App</h2>

            <TodoInput
                text = {text}
                setText = {setText}
                addTodo = {addTodo}
                />

            <TodoList 
                todos = {todos}
                deleteTodo = {deleteTodo}
                toggleTodo = {toggleTodo}
                />
        </div>
    );
}

export default TodoApp;