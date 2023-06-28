import '../../../index.css'
import './Todays.css'
import TodaysCurrent from './Todays-current'
import TodaysFuture from './Todays-future'
import SearchWeather from './Search-Weather'

function Todays({ data, query, handleQuery, searchedData }) {
    return (
        <div className="todays | row-for-desktop column-for-mobile ">
            <TodaysCurrent data={data} />
            <div>
                <h3 className='fs-300 semi-bold letter-spacing start'>Todays</h3>
                <TodaysFuture data={data} />
                <SearchWeather query={query}
                    handleQuery={(e) => {
                        handleQuery(e.target.value)
                    }}
                    searchedData={searchedData}
                />
            </div>
        </div>
    )
}

export default Todays;