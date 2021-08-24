import React, {useEffect, useState} from "react"
import MainContent from "./MainContent"
import Header from './Header'

function App() {

  const [gif, setGif] = useState([])
  useEffect(function effectFunction() {
    async function fetchGifs() {
        const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=xjRmS04E6Syed3yZKqVZZ301OmqO5rvL&limit=25&rating=r');
        const json = await response.json();
        setGif(json.data);
    }
    fetchGifs();
}, []);

  console.log(gif)
//  const imageUrl= gif.data.image_url


  return (
    <div className="App">
      <Header/>
      <MainContent gif={gif}/>
    </div>
  );
}

export default App;
