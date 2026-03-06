//Passing Parameters in Event Handlers

function EventParameters(){
    const todos = [
        {id : 1 , text : "Learn React"},
        {id : 2 , text : "Build Project"},
        {id : 3 , text : "Focus on Python"}
    ];

    function deleteTodo(idToRemove){
        console.log("Deleted Todo ID : " , idToRemove);
    }

    return(
        <div>
            {todos.map(todo=>
                <div key = {todo.id}>{todo.text}
                <button onClick = {() => deleteTodo(todo.id)}> DELETE A TODO</button></div>
            )}
        </div>
    );
}

export default EventParameters;