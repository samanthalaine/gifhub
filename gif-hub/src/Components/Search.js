import { Button, ImageList, TextField } from "@material-ui/core";
import React from "react";
import { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ImageListItem } from "@material-ui/core";
import { ImageListItemBar } from "@material-ui/core";
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";
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
const Search = () => {
  const classes = useStyles()
    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);
    const [loadingState, setLoadingState] = useState(false);
  
  const searchGif = () => {
    if(search.length > 0){
      setLoadingState(true);
      fetch(GIPHY_API+search)
      .then((res)=>{
        setLoadingState(false);
        return res.json();
      })
      .then((result)=>{
        //console.log(result);
        setGifs(result.data)
      })

    }
  }
  return (
    <div>
      <div className="header">
        <div>
          <TextField
          className="search-bar"
            type="text" 
            placeholder="Search GIF"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            id="standard-full-width"
          label="Search Gifs"
          style={{ margin: 8 }}
          placeholder="Search"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }} 
          />
          <Button className={classes.root}onClick={searchGif}>
            Search
          </Button>
        </div>
      </div>
      <div className="result">
        {
          (loadingState) ? (
            <div className="loading">
              <div className="loader">
              </div>
            </div>
          ) : (
            <div className="list">
              <ImageList rowHeight="auto" className={classes.imageList}>
              {
                gifs.map((gif)=>{
                  return (
                      <ImageListItem key={gif.id}>
           
                            <img src={gif.images.fixed_width.url} alt={gif.title} />
                      <ImageListItemBar
                          title={gif.title}
                          subtitle={<span>by:{gif.username !== "" ? gif.username : "Unknown"}</span>}/>
                      </ImageListItem>  
                    
                  )
                })
              }
              </ImageList>
            </div>
          )
        }
      </div>
    </div>
  )
}


export default Search;
