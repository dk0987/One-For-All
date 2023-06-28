import SearchBar from "./component/SearchBar";
import SearchedResult from "./component/SearchedResult";
import './Dictionary.css';
import { useState , useEffect } from 'react';


function Dictionary() {
    const [query, setQuery] = useState("game");
    const [data, setData] = useState([])

    const handleSubmission = (e) => {
        const requestedOptions = {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e}`, requestedOptions)
            .then(response => response.json())
            .then((result) => {
                if (result[0] != null) {
                    setData(result);
                }
            })
    }

    useEffect(() => {
        handleSubmission(query);
    });

    return (
        <div className="dictionary | grid">
            <SearchBar query={query}
             handleQuery={(e) => {
                setQuery(e)
                handleSubmission(e)
            }} />
            <SearchedResult data={data} />
        </div>
    );
}

export default Dictionary;