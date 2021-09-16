import { useState, useEffect} from 'react';


const Home = () => {
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/quote")
         .then(res => {
            return res.json();
        }).then(data => {
            setQuotes(data);
            setIsLoading(true);
        })
    }, []);

    return (
        <div className="home">
            { quotes && <div>Home</div> }
        </div>
    );
}
 
export default Home;