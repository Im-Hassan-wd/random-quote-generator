import { Link } from "react-router-dom";

const RandomQuote = ({quotes}) => {
    
    return (
        <div className="random-quote">
            {quotes.map(quote =>(
                <div className="quote-preview" key={quote.id}>
                   <p className="quote-body">{ quote.body }</p>
                   <div className="quote-description"> 
                        <Link to={`/quotelists/${quote.author}`}>
                            <h3>{ quote.author }</h3>
                            <p>{ quote.category}</p>
                        </Link>
                   </div>
                </div>
            ))}
        </div>
    );
}
 
export default RandomQuote;