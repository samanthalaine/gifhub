import { Button, ImageList, TextField } from "@material-ui/core";
import React from "react";
import { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ImageListItem } from "@material-ui/core";
import { ImageListItemBar } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";
const useStyles = makeStyles((theme) => ({
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: "20px 0px 20px 700px"
  },
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
    marginLeft: "10px",
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover':{
        background: "black"
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));
const Search = () => {
  const classes = useStyles()
    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);
    const [loadingState, setLoadingState] = useState(false);
  
  const searchGif = (e) => {
    e.preventDefault()
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
        <Paper component="form" className={classes.search}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search for GIF's"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
        type="text" 
      />
      <IconButton onClick={searchGif} type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Paper>
          {/* <TextField
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
          <Button onClick={searchGif}>
            Search
          </Button> */}
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
            <div className={classes.root}>
              <ImageList rowHeight={300} cols={4} className={classes.imageList}>
              {
                gifs.map((gif)=>{
                  return (
                      <ImageListItem key={gif.id} className={classes.item}>
           
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
