import RandomQuote from './RandomQuote';

const Home = ({quotes, isLoading, error }) => {
    
    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            {quotes && <RandomQuote quotes={quotes} />}
        </div>
    );
}
 
export default Home;