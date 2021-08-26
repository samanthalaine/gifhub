import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      marginLeft: "650px",
      marginTop: "50px",
    },
    media: {
      height: 200,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "red",
    },
  }));

function ItemDetail(){
const classes = useStyles();
let {id} = useParams()
 const [details, setDetails] = useState({
     images:{
         fixed_width:{}
     },
     user:{
         avatar_url:{}
     }
 })
 console.log(details.user)
 
 

    useEffect(() => {
        fetchItem()
    }, [])
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=xjRmS04E6Syed3yZKqVZZ301OmqO5rvL`)
        const Item = await fetchItem.json(); 
        setDetails(Item.data)    
    }   
    return(
       <div>
           <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar alt="BB" src={details.user.avatar_url !== false ? details.user.avatar_url: ""} />
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={details.title}
        subheader={details.trending_datetime}
      />
      <CardMedia
        className={classes.media}
        image={details.images.fixed_width.url}
        title="gif"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Username:{details.username}
          <br></br>
          Type:{details.type}
          <br></br>
          Rating:{details.rating}
        </Typography>
      </CardContent>
      </Card>
       </div>
    )
}








export default ItemDetail;