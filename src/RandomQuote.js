const RandomQuote = ({quotes}) => {
    return (
        <div className="random-quote">
            {quotes.map(quote =>(
                <div className="quote-preview" key={quote.id}>
                   <p>{ quote.body }</p>
                   <div className="quote-author"> {quote.author} </div>
                </div>
            ))}
        </div>
    );
}
 
export default RandomQuote;