import "./App.css";
import Home from "./Home";
import Navbar from './Navbar';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuoteLists from "./QuoteLists";

const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const random = Math.ceil(Math.random() * 3)
  const generate = () => {
  //   const generated = quotes.filter(quote => quote.id === random)
  //   setQuotes(generated.body)
  //   console.log(generated, random)
  }


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
    <Router>
      <div className="app">
        <Navbar navlink = "random" generate={generate} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home quotes={quotes} error={error} isLoading={isLoading} randomNumber={random} />
            </Route>
            <Route path="/quotelists">
              <QuoteLists />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
 
export default App;
