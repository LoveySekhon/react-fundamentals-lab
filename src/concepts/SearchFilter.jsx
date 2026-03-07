
import { useState } from "react";

function SearchFilter(){

    const[todos , setTodos]  = useState([
        {id : 1 , text : "Learn React"},
        {id : 2 , text : "Practice React"},
        {id : 3 , text : "Learn Javascript"},
        {id : 4 , text : "Project React"}
    ]);

    const[searchText , setSearchText] = useState("");

    const filteredTodos = todos.filter(todo => 
                                    todo.text.toLowerCase()
                                    .includes(searchText.toLowerCase()));

    return(
        <div>
            <input placeholder="Search Todo"
                    value = {searchText}
                    onChange = {(e)=>setSearchText(e.target.value)} />
        {filteredTodos.length === 0 && (
            <p>No Matching Todos</p>
        )}
        {filteredTodos.map(todo => (
            <div key = {todo.id}>{todo.text}</div>
        ))}
        </div>
    );
}

export default SearchFilter;