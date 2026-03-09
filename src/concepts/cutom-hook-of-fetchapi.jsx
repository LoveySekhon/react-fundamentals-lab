import { useState } from "react";
import { useEffect } from "react";

function useFetch(url){

        const[users , setUsers] = useState([]);
        const[loading , setLoading] = useState(true);
        const[error , setError] = useState(null);
    
        useEffect(()=>{
            const controller = new AbortController();
            async function fetchUsers() {
            try{
                const res = await fetch(url,{signal : controller.signal});
                const data = await res.json();
            
                setUsers(data);
            }
            catch(err){
                if(err.name !== "AbortError"){
                setError(err.message);
                }
    
            }
            finally{
                setLoading(false);
            }
            }
            fetchUsers();
    
            return() => {
                controller.abort();
            };
    
        },[url]);

        return {users , loading , error};
}

export default useFetch;