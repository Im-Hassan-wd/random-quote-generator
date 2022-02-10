import { useParams } from "react-router-dom";

const QuoteLists = () => {
    const {} = useParams();

    return (
        <div className="quote-list">
            <h2>Quote lists</h2>
        </div>
    );
}
 
export default QuoteLists;