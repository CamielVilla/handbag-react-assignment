import React from "react";

function Tile ({title, image, content, children}) {
    if (content === "image") {
        return (
            <section>
                <img alt={title} src={image}/>
            </section>
        )
    }
    else if (content ==="text"){
        return (
           <section>
               <h2>{title}</h2>
               {children}
           </section>
        )
    }
}


export default Tile;
