import "./App.css";
import Home from "./Home";
import Navbar from './Navbar';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const random = Math.ceil(Math.random() * 3);

  const handleClick = (e) => {
    const author = e.target.children[0].textContent;
    setUrl(`http://localhost:8000/quote?author=${author}`);
    console.log(url);
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home quotes={quotes} error={error} isLoading={isLoading} randomNumber={random} handleClick={handleClick} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
 
export default App;
