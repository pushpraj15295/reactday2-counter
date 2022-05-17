import React from "react";

let Counter = () => {
        
    const [count,setCount] = React.useState(0);

    return (

         <div>
             <h1 style={{color:count % 2 === 0 ? "green" : "red"}}>Counter App : {count}</h1>
             <button onClick={() => setCount(count +1)}>Increment</button>
             <button onClick={() => setCount(count -1)}>Decrement</button>
             <button onClick={() => setCount(count * 2)}>double</button>
         </div>
    )

}

export default Counter;