
import './SearchBar.css';
import '../../../index.css';

function SearchBar({ query, handleQuery,}) {

    return (
        <div className="searchBar | flex fx-ai-c fx-jc-c">
            <input type="search" name="searchBar" id="SearchBar" placeholder="Ex. Online" className='bg-clr-400 border' 
            onChange={ (e) => {
                handleQuery(e.target.value)
            }}
             value={query}  />
        </div>
    );
}

export default SearchBar;