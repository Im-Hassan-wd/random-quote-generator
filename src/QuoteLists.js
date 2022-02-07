import { useParams } from "react-router-dom";

const QuoteLists = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div className="quote-list">
            <h2>Quote lists - { id } </h2>
        </div>
    );
}

export default QuoteLists;