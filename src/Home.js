import RandomQuote from './RandomQuote';

const Home = ({data, randomNumber}) => {
    
    return (
        <div className="home">
            {/* { isLoading && <div>Loading...</div>} */}
            <RandomQuote data={data.filter(quote => quote.id === randomNumber)} />
        </div>
    );
}
 
export default Home;