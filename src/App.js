import { useState, useEffect} from 'react';
import "./App.css";
import Home from "./Home";

const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        <button>random</button>
      </div>
      <Home />
    </div>
  );
}
 
export default App;
