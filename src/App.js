import Home from "./Home";
import data from "./data/db.json";
import "./App.css";

const randomNumber = Math.floor(Math.random() * 3);

const App = () => {

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
