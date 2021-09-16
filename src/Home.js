import { useState, useEffect} from 'react';


const Home = () => {
    const [quotes, setQuotes] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/quote")
         .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        })
    }, []);

    return (
        <div className="home">
            <h2>Quotes</h2>
        </div>
    );
}
 
export default Home;