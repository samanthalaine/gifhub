import React from 'react'
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button"
import Avatar from '@material-ui/core/Avatar';
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';


const useStyles = makeStyles((theme) => ({
    addIcon: {
        '& > span': {
          margin: theme.spacing(2),
        },
      },
    Icon: {
        margin: "0 20px",
        webkitTapHighlightColor: "transparent",
      },
    root: {
      background: 'linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)',
      
      
      border: 0,
      borderRadius: 4,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      '&:hover':{
          background: "black"
      }
    },
    navBar:{
        width: "auto",
        display: "flex",
        zIndex: 1100,
        flexShrink: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgb(18, 18, 18)",
        backgroundImage: "rgb(18, 18, 18)",
        boxSizing: "content-box",
        borderWidth: "10px",
        borderBottom: " 10px solid",
        borderImage: "linear-gradient(to right bottom, #260B3C, #a053df)",
        borderImageSlice: 1,
        
        
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
  }));

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  


const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position ="static" className={classes.navBar}>
            <Avatar className={classes.large} alt="?" src="https://media2.giphy.com/media/yx3UeQNukOXTjbF59S/giphy.gif?cid=ecf05e47qy6muj2onpy97z2d95le3sn28qjxnckx4vjfi7dn&rid=giphy.gif&ct=g"/>
            <Typography variant="h1" className="Title" >
                GifHub
            </Typography>
            <Toolbar>
                <Link to="/">
                    <HomeIcon className={classes.Icon} fontSize="large" variant="contained" color="secondary"type='home'>Home</HomeIcon>
                </Link>
                <Link to="/search">
                <SearchSharpIcon className={classes.Icon}  fontSize="large" variant="contained" color="secondary"type='search'></SearchSharpIcon>
                </Link>
                <Link to="/upload">
                <AddCircleSharpIcon className={classes.Icon} fontSize="large" variant="contained" color="secondary"type='upload'>Upload Gif</AddCircleSharpIcon>
                </Link>
                <Link to="/login">
                    <PersonAddSharpIcon className={classes.Icon} fontSize="large" variant="contained" color="secondary"type='login'>Login</PersonAddSharpIcon>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header
