import React from 'react'
import GifTile from './GifTile'
import { ImageList } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


function MainContent({gif, handleClick}) {


    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
        },
        imageList: {
          width: "500",
          height: "450",
          paddingLeft: '150px',
          paddingTop: "30px"
        },
        icon: {
          color: 'rgba(255, 255, 255, 0.54)',
        },
      }));
      const classes = useStyles()
    
    return (
        
        
        <div className={classes.root}>
            <ImageList rowHeight="auto" className={classes.imageList}>
            {

                gif.map((gif) => 
                
                <GifTile key={gif.id} gif={gif}  classes={classes}/>)

            }
            </ImageList>
           
        </div>
    )
}

export default MainContent
