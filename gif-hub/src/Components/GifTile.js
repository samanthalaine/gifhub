import React from "react"

function GifTile({gif}){
    console.log(gif)
    return(
        <div className="card">
            <div className= "image">
                <img src={gif.images.fixed_width.url}></img>
            </div>
            <div className="title">
                <p>{gif.title}</p>
            </div>
            <div className="rating">
                <p>{gif.rating}</p>
            </div>
        </div>

    )

}


export default GifTile;