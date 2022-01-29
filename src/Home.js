import RandomQuote from './RandomQuote';

const Home = ({quotes, isLoading, randomNumber}) => {
    console.log(quotes);
    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            {quotes && <RandomQuote quotes={quotes.filter(quote => quote.id === randomNumber)} />}
        </div>
    );
}
 
export default Home;