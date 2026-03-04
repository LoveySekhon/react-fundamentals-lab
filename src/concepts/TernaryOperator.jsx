//TERNARY OPEARTOT IN REACT 

function App(){
  const cart = [
    {id : 1 , name : "Box"},
    {id : 2 , name : "Toolkit"},
    {id : 3 , name : "Pencil"}
  ];

  return(
    <div>
      {cart.length > 0 ? (
        <ul>{cart.map(item => (
          <li key = {item.id}>{item.name}</li>))}</ul>
      ): <p>Cart is Empty</p>}
    </div>
  );
}

export default App;