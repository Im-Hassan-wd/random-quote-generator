import { useParams } from "react-router-dom";

const QuoteLists = () => {
    const { name } = useParams();

    return (
        <div className="quote-list">
            <h2>Quote lists - {name} </h2>
        </div>
    );
}
 
export default QuoteLists;