const RandomQuote = ({quotes}) => {
    
    return (
        <div className="random-quote">
            {quotes.map(quote =>(
                <div className="quote-preview" key={quote.id}>
                   <p className="quote-body">{ quote.body }</p>
                   <div className="quote-description"> 
                        <div onClick={(e) => console.log(e.target.children[0].textContent)}>
                            <h3>{ quote.author }</h3>
                            <p>{ quote.category}</p>
                        </div>
                   </div>
                </div>
            ))}
        </div>
    );
}
 
export default RandomQuote;