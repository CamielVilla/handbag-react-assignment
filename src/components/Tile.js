import React from "react";



function Tile ({title, image, content, paragraph}){
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
                <p>{paragraph}</p>
            </section>
        )
    }
}

export default Tile
