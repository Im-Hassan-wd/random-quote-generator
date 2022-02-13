import { useState, useEffect} from 'react';


const useFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl ] = useState("http://localhost:8000/quote");

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
            throw Error("Could not fecth the data");
            }
            return res.json();
        }).then(data => {
            setData(data);
            setIsLoading(false);
            setError(null);
        }).catch(err => {
            setIsLoading(false);
            setError(err.message);
        })
  }, []);

  return {
      data,
      isLoading,
      error
  }
}
 
export default useFetch;