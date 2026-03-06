
function TodoItem({todo, deleteTodo , toggleTodo}){

    return(
        <div  
            style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                {todo.text}

                <button onClick = {() => deleteTodo(todo.id)}>Delete</button>

                <button onClick = {() => toggleTodo(todo.id)}>
                    {todo.completed ? "Undo" : "Complete"}
                </button>
            </div>
    );
}

export default TodoItem;