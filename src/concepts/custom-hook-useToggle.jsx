import { useState } from "react";
import { useEffect } from "react";

function useToggle(){

    const[value , setValue] = useState(false);

    function toggle(){
        setValue(prev => !prev);
    }
    return{value , toggle};
}
export default useToggle;