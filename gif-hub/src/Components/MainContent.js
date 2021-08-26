import React from 'react'

import GifTile from './GifTile'


function MainContent({gif}) {
    console.log(gif)
    
    return (

        <div className="main-content">
           
            {gif.map((gif) => <GifTile key={gif.id} gif={gif}/>
            )}
        </div>
    )
}

export default MainContent
