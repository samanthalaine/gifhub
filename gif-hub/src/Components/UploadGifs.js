import React from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ImageListItem } from "@material-ui/core";
import { ImageList } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)',
    
    
    border: 0,
    marginLeft: "10px",
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover':{
        background: "black"
    }
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
      <ImageList rowHeight="auto" className={classes.imageList}>
        <h1>Upload Gif</h1>
        
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
         
        
          gif.map((gif) => 
        <ImageListItem >
           <img src={gif.secure_url} />
        </ImageListItem>  )
          
       )}
      </ImageList>
    )
  }

export default UploadGifs
