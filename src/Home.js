import RandomQuote from './RandomQuote';

const Home = ({quotes, isLoading, randomNumber, error}) => {
    
    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            {quotes && <RandomQuote quotes={quotes.filter(quote => quote.id === randomNumber)} />}
        </div>
    );
}
 
export default Home;