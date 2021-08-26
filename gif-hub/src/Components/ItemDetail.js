import React, {useEffect, useState} from "react"
import { ImageListItem } from "@material-ui/core"
import { ImageListItemBar } from "@material-ui/core"


function ItemDetail({ match }){
    
 const [detials, setDetails] = useState({})
 console.log(match)
 
 

    // useEffect(() => {
    //     fetchItem()
    // }, [])
    // const fetchItem = async () => {
    //     const fetchItem = await fetch(`https://api.giphy.com/v1/gifs/${match}?api_key=xjRmS04E6Syed3yZKqVZZ301OmqO5rvL`)
    //     const Item = await fetchItem.json();     
    // }
    return(
       <div></div>
    )
}








export default ItemDetail;