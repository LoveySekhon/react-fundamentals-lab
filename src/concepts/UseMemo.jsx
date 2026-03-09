import { useState } from "react";
import { useMemo } from "react";

function UseMemo(){

    const[number , setNumber] = useState(0);

    const square = useMemo(()=>{
                    return number * number;
                    },[number]);

    return(
        <div>
            <h2>{square}</h2>

            <button onClick = {()=> setNumber(number + 1)}>Increase</button>
        </div>
    );
}

export default UseMemo;