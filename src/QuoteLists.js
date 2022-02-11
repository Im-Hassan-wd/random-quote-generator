import { useParams } from "react-router-dom";

const QuoteLists = () => {
    const { author } = useParams();

    return (
        <div className="quote-list">
            <h2>Quote lists - { author } </h2>
        </div>
    );
}

export default QuoteLists;