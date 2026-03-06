//When Button is clicked, Print "Hello React" in Console

function EventHandling(){
    function handleClick(){
        console.log("Hello React");
    }
    return(
        <div>
            <button onClick = {handleClick}>Add To Cart</button>
        </div>
    );
}
export default EventHandling;