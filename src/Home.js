import RandomQuote from './RandomQuote';
import { useState} from "react";

const Home = ({ quotes, isLoading, error, handleClick, random }) => {
    const [active, setActive] = useState("active");
    
    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            {quotes && active === "active" ? <RandomQuote handleClick={handleClick} quotes={quotes.filter(quote => quote.id === random} /> : null}
            {quotes && active === "" ? <RandomQuote handleClick={handleClick} quotes={quotes} /> : null}
        </div>
    );
}
 
export default Home;
