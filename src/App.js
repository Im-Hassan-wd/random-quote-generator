import "./App.css";
import Home from "./Home";
import Navbar from './Navbar';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const randomNumber = Math.ceil(Math.random() * 3);

  useEffect(() => {
      fetch("http://localhost:8000/quote")
        .then(res => {
          if(!res.ok) {
            throw Error("Could not fecth the data");
          }
          return res.json();
      }).then(data => {
          setQuotes(data);
          setIsLoading(false);
          setError(null);
      }).catch(err => {
          setIsLoading(false);
          setError(err.message);
          console.log(err.message)
      })
  }, []);

  return (
    <div className="app">
      <div className="content">
        <Navbar navlink = "random" />
      </div>
      <Home quotes={quotes} error={error} isLoading={isLoading} randomNumber={randomNumber} />
    </div>
  );
}
 
export default App;
