import { useEffect, useState } from "react";

// function FetchApi(){

//     const[users , setUsers] = useState([]);
//     const[loading , setLoading] = useState(true);

//     useEffect(()=>{
//         async function fetchUsers() {

//             const res = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await res.json();
        
//             setUsers(data);
//             setLoading(false);
//         }
//         fetchUsers();
//     },[]);
//     if(loading){
//         return(<p>Loading...</p>);
//     }

//     return(
//         <div>
            
//             {users.map(user=>(
//                 <div key = {user.id}>{user.name} , {user.email}</div>
//             ))}
//         </div>
//     );
// }

// export default FetchApi;

//lets add error state now 

// function FetchApi(){

//     const[users , setUsers] = useState([]);
//     const[loading , setLoading] = useState(true);
//     const[error , setError] = useState(null);

//     useEffect(()=>{
//         async function fetchUsers() {
//         try{
//             const res = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await res.json();
        
//             setUsers(data);
//         }
//         catch(err){
//             setError("Failed to load, Error encountered !");

//         }
//         finally{
//             setLoading(false);
//         }
//         }
//         fetchUsers();
//     },[]);

//     if(loading){
//         return(<p>Loading...</p>);
//     }

//     if(error){
//         return(<p>{error}</p>);
//     }

//     return(
//         <div>
            
//             {users.map(user=>(
//                 <div key = {user.id}>{user.name} , {user.email}</div>
//             ))}
//         </div>
//     );
// }

// export default FetchApi;

//Cancelling API requests: Using in built web API provided by the browser-AbortController();

// function FetchApi(){

//     const[users , setUsers] = useState([]);
//     const[loading , setLoading] = useState(true);
//     const[error , setError] = useState(null);

//     useEffect(()=>{
//         const controller = new AbortController();
//         async function fetchUsers() {
//         try{
//             const res = await fetch("https://jsonplaceholder.typicode.com/users",{signal : controller.signal});
//             const data = await res.json();
        
//             setUsers(data);
//         }
//         catch(err){
//             if(err.name !== "AbortError"){
//             setError(err.message);
//             }

//         }
//         finally{
//             setLoading(false);
//         }
//         }
//         fetchUsers();

//         return() => {
//             controller.abort();
//         };

//     },[]);

//     if(loading){
//         return(<p>Loading...</p>);
//     }

//     if(error){
//         return(<p>{error}</p>);
//     }

//     return(
//         <div>
            
//             {users.map(user=>(
//                 <div key = {user.id}>{user.name} , {user.email}</div>
//             ))}
//         </div>
//     );
// }

// export default FetchApi;

//Doing same work but this time using custom hook that we created 

import useFetch from "./cutom-hook-of-fetchapi";

function FetchApi(){

    const {users , loading , error} = useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading){
        return ( <p>Loading...</p>);
    }

    if(error){
        return ( <p>{error}</p>);
    }

    return(
        <div>
            {users.map(user => (
                <div key = {user.id}>{user.name}</div>
            ))}
        </div>
    );
}

export default FetchApi;



