import RandomQuote from './RandomQuote';

const Home = ({quotes}) => {
    
    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            {quotes && <RandomQuote quotes={quotes.filter(quote => quote.id === randomNumber)} />}
        </div>
    );
}
 
export default Home;