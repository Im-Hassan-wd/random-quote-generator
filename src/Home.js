import RandomQuote from './RandomQuote';

const Home = ({quotes, isLoading, error, handleClick}) => {
    
    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            {quotes && <RandomQuote handleClick={handleClick} quotes={quotes} />}
        </div>
    );
}
 
export default Home;