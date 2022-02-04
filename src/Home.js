import RandomQuote from './RandomQuote';

const Home = ({data, randomNumber}) => {
    console.log(data);
    
    return (
        <div className="home">
            {/* { isLoading && <div>Loading...</div>} */}
            <RandomQuote data={data.filter(quote => quote.id === randomNumber)} />
        </div>
    );
}
 
export default Home;