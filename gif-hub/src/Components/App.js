import React, {useEffect, useState} from "react"
import MainContent from "./MainContent"
import Header from './Header'
import Login from "./Login";
import ItemDetail from "./ItemDetail"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

  
  const [gif, setGif] = useState([])
  useEffect(function effectFunction() {
    async function fetchGifs() {
        const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=xjRmS04E6Syed3yZKqVZZ301OmqO5rvL&limit=35&rating=r');
        const json = await response.json();
        setGif(json.data);
    }
    fetchGifs();
}, []);

  // console.log(gif)
//  const imageUrl= gif.data.image_url
//Action item 1 - make sign up 
//- backend handles logic
//- Look into json server docs.
//- Need 2 routes, one for sign up and one for log in.
//Action item 2 - make sign up component.
//Action item 3 - style sign up and login components
//Action item 4 - click on image


  return (
  <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" exact>
          <MainContent gif={gif}/>
        </Route>
        <Route path="/:id">
          <ItemDetail gif={gif}/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
