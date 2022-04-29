import React from "react";


function Button ({message, disabled}) {
   let value = false;
   if(disabled){
       value = true;
    }
    return (
       <button type="button" disabled={value} className="buttonName"
               onClick={ () => console.log(message)}>
           {message}
       </button>
    )
}
export default Button
