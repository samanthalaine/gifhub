import React from 'react'
import GifTile from './GifTile'
import { ImageList } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function MainContent({gif, handleClick}) {


    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
        },
        imageList: {
          width: "auto",
          height: "auto",
          paddingLeft: '50px'
        },
        icon: {
          color: 'rgba(255, 255, 255, 0.54)',
        },
      }));
      const classes = useStyles()
    
    return (
        
        
        <div className="main">
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
