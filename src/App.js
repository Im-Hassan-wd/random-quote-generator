import Home from "./Home";
import data from "./data/db.json";
import "./App.css";
import { useState } from "react";

const generateNumber = () => {
  return Math.floor(Math.random() * 3);
}
const randomNumber = generateNumber();
console.log(randomNumber)

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="app">
      <div className="content">
        <button onClick={(generateNumber)}>random</button>
      </div>
      {data && <Home data={data.quote} randomNumber={randomNumber} />}
    </div>
  );
}
 
export default App;
