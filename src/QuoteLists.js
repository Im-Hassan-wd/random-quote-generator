import { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

const QuoteLists = () => {
    const { author } = useParams();
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("http://localhost:8000/quote/" + author)
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

  console.log(quotes)

    return (
        <div className="quote-list">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { quotes && (
               <p className="quote-body">{ quotes.body }</p> 
            )}
        </div>
    );
}

export default QuoteLists;