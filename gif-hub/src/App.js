import React, {useEffect, useState} from "react"

function App() {

  const [gif, setGif] = useState([])
  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=xjRmS04E6Syed3yZKqVZZ301OmqO5rvL&tag=&rating=g")
    .then((res) => res.json())
    .then((data) => setGif(data))

  }, [])

console.log(gif)
 const imageUrl= gif.data.image_url


  return (
    <div className="App">
      <img src={imageUrl}></img>
    </div>
  );
}

export default App;
