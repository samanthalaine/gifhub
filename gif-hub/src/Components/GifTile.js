import React from "react"
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
// import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    imageList: {
      width: "auto",
      height: "auto",
      paddingLeft: '50px',
    },
    item:{
      border: "5px solid #000000",
      borderRadius: "2px",
      margin: "10px 10px 10px 10px"
    }})



function GifTile({gif, handleClick}){
    const classes = useStyles()
    // console.log(gif.user)
    return(
        <ImageListItem className={classes.item} key={gif.id}  onClick={handleClick}>
           
            <img src={gif.images.fixed_width.url} alt={gif.title} />
            <Link to={`/gif/${gif.id}`}>
            <ImageListItemBar
              title={gif.title}
              subtitle={<span>by:{gif.username !== "" ? gif.username : "Unknown"}</span>}
            //   actionIcon={
            //     <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
            //       <InfoIcon />
            //     </IconButton>
            //   }
            />
            </Link>
        </ImageListItem>

    )

}


export default GifTile;



/* <div className= "image">
        <img src={gif.images.downsized_large.url}></img>
    </div>
    <div className="title">
        <p>{gif.title}</p>
    </div>
    <div className="rating">
        <p>{gif.rating}</p>
    </div> */