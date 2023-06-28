import './Search-Weather.css'
import '../../../index.css'

function SearchWeather({ query, handleQuery, searchedData }) {
    if (searchedData <= 0 || searchedData.error != null ) {
        return (
            <div className="search-weather">
                <input type="search" name="searchBar" id="SearchBar" placeholder="Kolkata" className='' onChange={(e) => { handleQuery(e) }} value={query} />

            </div>
        )
    }
    else {
        return (
            <div className="search-weather">
                <input type="search" name="searchBar" id="SearchBar" placeholder="Kolkata" className='' onChange={(e) => { handleQuery(e) }} value={query} />

                <div className="searched-wheather | flex fx-jc-sa fx-ai-c">

                    <div className='searched-wheather-info | grid'>
                        <h4 className='fs-400 semi-bold letter-spacing start'>{searchedData.location.name }</h4>
                        <h4 className='fs-300 semi-bold letter-spacing start'>{searchedData.location.region}</h4>
                        <h4 className='fs-400 semi-bold letter-spacing start'>{searchedData.location.country}</h4>
                        <h5 className='fs-300  letter-spacing start'>{searchedData.current.condition.text}</h5>
                        <h5 className='fs-300  letter-spacing start'>{new Date(searchedData.location.localtime).getHours() + ":" + new Date(searchedData.location.localtime).getMinutes()  }</h5>
                    </div>
                    <div className='searched-weather-image-celsius'>
                        <h3 className='fs-500 semi-bold letter-spacing start'>{searchedData.current.temp_c}&#8451;</h3>
                        <img src={(searchedData.current.condition.icon).replaceAll("64" , "128")} alt="" />
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchWeather;