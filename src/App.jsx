//UseState 
// import { useState } from "react";

// function App(){
//     const[count , setCount] = useState(5);
//     console.log(count);

//     function addTen(){
//         setCount(count + 10);
//     }
//     // console.log(count);

//     function reset(){
//         setCount(5);
//     }

//     return(
//         <div>
//             <h1>
//                 {count}
//             </h1>
//             <button onClick={addTen}>Add 10</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
// }

// export default App;


//UseState and Array

// import { useState } from "react";

// function App(){
//     const[items , setItems] = useState([]);
//     console.log(items);

//     function addItem(){
//         setItems(prev => [...prev , prev.length + 1]);
//     }
//     // console.log(count);

//     function clearItems(){
//         setItems([]);
//     }

//     return(
//         <div>
//             <button onClick={addItem}>Add an Item</button>
//             <button onClick={clearItems}>Clear</button>

//             {items.map((item, index)=>(
//               <p key = {index}>{item}</p>
//             ))}
//         </div>
//     );
// }

// export default App;



//Removing an item from array using filter
// import { useState } from "react";

// function testComponent(){

// const[items , setItems] = useState([10 , 20 ,30, 40]);

// function removeItem(indexToRemove){
//     setItems(prev => prev.filter((item , index) => index !== indexToRemove));
// }

// return(
//     <div>
//         {items.map((item , index) =>(
//             <div key = {index}> 
//             {item}
//             <button onClick={()=> removeItem(index)}>Remove</button>
//             </div>
//         ))}
//     </div>
// )
// }
// export default testComponent();



//USING MAP TO RENDER JSX ELEMENTS

// function App(){
//   const todos = [
//   // {id:1, text:"Learn React"},
//   // {id:2, text:"Build project"},
//   // {id:3, text:"Apply for jobs"}
// ];

// return(
//   <div>
//     {todos.length === 0 && <p>No Todos Yet</p>}
//     {todos.map(todo => (
//     <ul>
//       <li key = {todo.id}>{todo.text}</li>
//     </ul>))}
//   </div>
// );
// }

// export default App;



//TERNARY OPEARTOT IN REACT 

//We have separated the concepts from App.jsx and written them in separate files and which one we have to call here we will simply import that.

// import TernaryOperator from "./concepts/ternaryOperator";

// function App(){
//   return(
//     <div>
//       <TernaryOperator/>
//     </div>
//   );
// }

// export default App;

//EventHandling.jsx

// import EventHandling from "./concepts/EventHandling";

// function App(){
//   return(
//     <div>
//       <EventHandling/>
//     </div>
//   );
// }

// export default App;


//EventParameters.jsx

// import EventParameters from "./concepts/EventParameters";

// function App(){
//   return(
//     <div>
//       <EventParameters/>
//     </div>
//   );
// }

// export default App;

//DeleteTodoState.jsx

// import DeleteTodoState from "./concepts/DeleteTodoState";

// function App(){
//   return(
//     <div>
//       <DeleteTodoState/>
//     </div>
//   );
// }

// export default App;

//AddTodoInput.jsx

// import AddTodoInput from "./concepts/AddTodoInput";

// function App(){
//   return(
//     <div>
//       <AddTodoInput/>
//     </div>
//   );
// }

// export default App;


//ControlledInputPractice.jsx

// import ControlledInputPractice from "./concepts/ControlledInputPractice";

// function App(){
//   return(
//     <div>
//       <ControlledInputPractice/>
//     </div>
//   );
// }

// export default App;


//ToggleTodo.jsx
// import ToggleTodo from "./concepts/ToggleTodo";

// function App(){
//   return(
//     <div>
//       <ToggleTodo/>
//     </div>
//   );
// }

// export default App;

//ConditionalRendering.jsx

// import ConditionalRendering from "./concepts/ConditionalRendering";

// function App(){
//   return(
//     <div>
//       <ConditionalRendering/>
//     </div>
//   );
// }

// export default App;


//mini-project --> TodoApp

// import TodoApp from "./mini-projects/todo-app/TodoApp";

// function App(){
//   return(
//     <div>
//       <TodoApp/>
//     </div>
//   );
// }

// export default App;


//SearchFilter.jsx
// import SearchFilter from "./concepts/SearchFilter";

// function App(){
//   return(
//     <div>
//       <SearchFilter/>
//     </div>
//   );
// }

// export default App;


//UseEffect.jsx

import UseEffect from "./concepts/UseEffect";

function App(){
  return(
    <div>
      <UseEffect/>
    </div>
  );
}

export default App;
