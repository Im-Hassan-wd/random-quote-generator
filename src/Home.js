import RandomQuote from './RandomQuote';

const Home = ({quotes, isLoading, randomNumber, error, handleClick}) => {
    
    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            {quotes && <RandomQuote handleClick={handleClick} quotes={quotes.filter(quote => quote.id === randomNumber)} />}
        </div>
    );
}
 
export default Home;