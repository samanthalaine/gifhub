import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ImageListItem, Typography } from "@material-ui/core";
import { ImageList } from '@material-ui/core';

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
    paddingLeft: '280px',
  },
  item:{
    border: "5px solid #000000",
    borderRadius: "2px",
    margin: "10px 10px 10px 10px"
  },
  button: {
    background: 'linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)',
    
    
    border: 0,
    marginLeft: "780px",
    borderRadius: 3,
    boxShadow: '0 1px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 20,
    '&:hover':{
        background: "black"
    }
  },
  header: {
    margin: "20px 0px 60px 680px ",
    color: "white"
  }
});

function UploadGifs() {
  const classes = useStyles()
  
    const [gif, setGif] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(gif)
  
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'samantha')
      setLoading(true)
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dqapspd5t/image/upload/?api_key793118652795214',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
      console.log(gif)
  
      setGif([...gif, file])
      setLoading(false)
    }
  
    return (
      <div>
        <Typography className={classes.header} variant="h1">Upload Gif</Typography>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
          className={classes.button}
        />
      <ImageList rowHeight={300} cols={4} className={classes.imageList}>
        
        {loading ? (
          <h3>Loading...</h3>
        ) : (
         
        
          gif.map((gif) => 
        <ImageListItem className={classes.item}>
           <img src={gif.secure_url} />
        </ImageListItem>  )
          
       )}
      </ImageList>
      </div>
    )
  }

export default UploadGifs
