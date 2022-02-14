import RandomQuote from './RandomQuote';
import useFetch from "./useFetch";

const Home = () => {
    const { data: quotes, isLoading, error } = useFetch("http://localhost:8000/quote");
    const random = Math.ceil(Math.random() * 3);
    
    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            {quotes && <RandomQuote quotes={quotes.filter(quote => quote.id === random)} />}
        </div>
    );
}
 
export default Home;