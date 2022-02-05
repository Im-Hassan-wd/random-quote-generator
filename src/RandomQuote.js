import { Link } from "react-router-dom";

const RandomQuote = ({data}) => {
    
    return (
        <div className="random-quote">
            {data.map(quote =>(
                <div className="quote-preview" key={quote.id}>
                   <p className="quote-body">{ quote.body }</p>
                   <a to="" className="quote-description"> 
                        <h3>{ quote.author }</h3>
                        <p>{ quote.category}</p>
                   </a>
                </div>
            ))}
        </div>
    );
}
 
export default RandomQuote;