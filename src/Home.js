import RandomQuote from './RandomQuote';

const Home = ({quotes, isLoading, randomNumber}) => {
    
    return (
        <div className="home">
            { isLoading && <div className='loading'>Loading...</div>}
            {quotes && <RandomQuote quotes={quotes.filter(quote => quote.id === randomNumber)} />}
        </div>
    );
}
 
export default Home;