import { useState, useEffect} from 'react';
import "./App.css";
import Home from "./Home";
import Navbar from './Navbar';

const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const randomNumber = Math.ceil(Math.random() * 3);

  useEffect(() => {
      fetch("http://localhost:8000/quote")
        .then(res => {
          return res.json();
      }).then(data => {
          setQuotes(data);
          setIsLoading(false);
      })
  }, []);

  return (
    <div className="app">
      <div className="content">
        <Navbar navlink = "random" />
      </div>
      {isLoading && <div>Loading...</div>}
      {quotes && <Home quotes={quotes} isLoading={isLoading} randomNumber={randomNumber} />}
    </div>
  );
}
 
export default App;
