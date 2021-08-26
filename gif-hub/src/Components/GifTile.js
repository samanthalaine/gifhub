import React from "react"
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';






function GifTile({gif}){
    console.log(gif.user)
    return(
        <ImageListItem key={gif.id}>
            <img src={gif.images.fixed_width.url} alt={gif.title} />
            <ImageListItemBar
              title={gif.title}
              subtitle={<span>by:{gif.username !== "" ? gif.username : "Unknown"}</span>}
            //   actionIcon={
            //     <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
            //       <InfoIcon />
            //     </IconButton>
            //   }
            />
        </ImageListItem>

    )

}


export default GifTile;



{/* <div className= "image">
        <img src={gif.images.downsized_large.url}></img>
    </div>
    <div className="title">
        <p>{gif.title}</p>
    </div>
    <div className="rating">
        <p>{gif.rating}</p>
    </div> */}