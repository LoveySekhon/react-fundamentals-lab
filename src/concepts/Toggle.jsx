import useToggle from "./custom-hook-useToggle";

function Toggle(){

    const{value , toggle }  = useToggle();

    return(
        <div>

            <button onClick = {toggle}>Toggle</button>
            <p>{value ? "ON" : "OFF"}</p>
        </div>
    );
}

export default Toggle;