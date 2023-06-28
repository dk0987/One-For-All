import './Wheather.css'
import '../../index.css'
import Todays from './components/Todays';
import NextDays from './components/Next-Days';
import { useState, useEffect } from 'react';

function Wheather() {

    const API_KEY = "c58711bfa7be4104b52152908212910"
    const [data, setData] = useState([])
    const [query, setQuery] = useState("tokyo")
    const [searchedData, setSearchedData] = useState([])

    useEffect(() => {
        getData();
        getSearchedData(query)
    }, []);

    const getData = (() => {
        const requestedOptions = {
            method: "GET",
        };
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=lucknow&days=${10}`, requestedOptions)
            .then(response => response.json())
            .then((result) => {
                setData(result)
            })
    })


    const getSearchedData = ((place) => {
        const requestedOptions = {
            method: "GET",
        };
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${place}`, requestedOptions)
            .then(response => response.json())
            .then((result) => {
                setSearchedData(result)
                console.log(result)
            })
    })

    if (data.length <= 0) {
        return (
            <div className="wheather | grid">

            </div>
        )
    }
    else {
        return (
            <div className="wheather | grid">
                <Todays
                    data={data}
                    query={query}
                    handleQuery={(e) => {
                        setQuery(e)
                        getSearchedData(e)
                    }}
                    searchedData={searchedData} />
                <h3 className='fs-300 semi-bold letter-spacing start upcoming-days-padding'>Upcoming 3 Days</h3>
                <NextDays data={data} />
            </div>
        )
    }

}

export default Wheather;