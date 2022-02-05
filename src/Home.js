import { useState, useEffect} from 'react';
import RandomQuote from './RandomQuote';

const randomNumber = Math.trunc(Math.random() + 1  * 3);

const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/quote")
         .then(res => {
            return res.json();
        }).then(data => {
            setQuotes(data);
            setIsLoading(false);
        })
    }, []);

    return (
        <div className="home">
            { isLoading && <div>Loading...</div>}
            {quotes && <RandomQuote quotes={quotes.filter(quote => quote.id === randomNumber)} />}
        </div>
    );
}
 
export default Home;