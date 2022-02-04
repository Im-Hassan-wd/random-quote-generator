import { useState, useEffect} from 'react';
import Home from "./Home";
import data from "./data/db.json";
import "./App.css";

const randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

const App = () => {
  const [quotes, setQuotes] = useState(null);

  return (
    <div className="app">
      <div className="content">
        <button>random</button>
      </div>
      {data && <Home data={data.quote} randomNumber={randomNumber} />}
    </div>
  );
}
 
export default App;
