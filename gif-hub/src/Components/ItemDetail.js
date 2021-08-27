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
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    loader: {
        margin: "200px auto 0 auto",
        display: 'flex',
        justifyContent: "center",
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    root: { 
      maxWidth: 600,
      margin: "50px auto",
      
    },
    media: {
      paddingTop: '100%', // 16:9
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
 const [details, setDetails] = useState({})
 console.log(details.user)
 
 

    useEffect(() => {
        setTimeout(() => fetchItem(), 300)
        // fetchItem()
    }, [])
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=xjRmS04E6Syed3yZKqVZZ301OmqO5rvL`)
        const Item = await fetchItem.json(); 
        setDetails(Item.data)    
    }   
    if(Object.keys(details).length !== 0){
        return(
            <div>
                <Card className={classes.root}>
           <CardHeader
             avatar={
                 <Avatar alt="?" src={details.user ? details.user.avatar_url: "Unknown"} />
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
             image={details.images.original.url}
             title="gif"
           />
           <CardContent>
             <Typography className="cardDetails" variant="body2" color="textSecondary" component="p">
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
    else{
        return(
    <div className={classes.loader}>
      <CircularProgress />
    </div>)
    }
   
}








export default ItemDetail;