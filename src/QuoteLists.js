import { useParams } from "react-router-dom";

const QuoteLists = () => {
    const { author } = useParams();
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("http://localhost:8000/quote")
        .then(res => {
          if(!res.ok) {
            throw Error("Could not fecth the data");
          }
          return res.json();
      }).then(data => {
          setQuotes(data);
          setIsLoading(false);
          setError(null);
      }).catch(err => {
          setIsLoading(false);
          setError(err.message);
          console.log(err.message)
      })
  }, []);

    return (
        <div className="quote-list">
            <h2>Quote lists - { author } </h2>
        </div>
    );
}

export default QuoteLists;