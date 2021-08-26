import React from 'react'
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button"
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)',
      
      
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      '&:hover':{
          background: "black"
      }
    },
  });
  


const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position ="static" className="navbar">
            <Typography variant="h1" className="Title" >
                GifHub
            </Typography>
            <Toolbar>
                <Link to="/">
                    <Button className={classes.root}variant="contained" color="primary"type='home'>Home</Button>
                </Link>
                <Link to="/search">
                <Button className={classes.root} variant="contained" color="primary"type='search'>Search</Button>
                </Link>
                <Link to="/upload">
                <Button className={classes.root} variant="contained" color="primary"type='upload'>Upload Gif</Button>
                </Link>
                <Link to="/login">
                    <Button className={classes.root} variant="contained" color="primary"type='login'>Login</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header
