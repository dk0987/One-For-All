import './News.css'
import '../../index.css'
import SelectedNews from './components/SelectedNews'
import NewsList from './components/NewsList'
import { useState, useEffect } from 'react';


function News() {
    const newsapi = 'b8203465c7174654926e726f7f7d1be8'
    const country = "in"
    const category = "sports"
    const [data, setData] = useState([])
    let [page, setPage] = useState(0)
    const pageSize = 8 ;
    const [loading, setLoading] = useState(true)
    let [currentSelected, setCurrentSelected] = useState(0)

    const onPrev = (() => {
        if(page > 0){
            console.log("prev")
            setPage(page--);
            getData(page);
        }
    })

    const onNext = (() => {
        if(page < 10){
            console.log("next")
            setPage(page++);
            getData(page);
        }
    })


    useEffect(() => {
       getData(page)
    });

    const getData = ((pageNumber) => {
        
        const requestedOptions = {
            method: "GET",
        };

        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${newsapi}&page=${pageNumber}&pageSize=${pageSize}`, requestedOptions)
            .then(response => response.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
    }) 



    if (!loading) {
        return (
            <div className="news | column-for-mobile row-for-desktop ">
                <SelectedNews 
                data={data.articles[currentSelected]}
                />
                <NewsList 
                data={data} 
                onNext = {onNext} 
                onPrev = {onPrev} 
                onNewsItem = {(index) => {
                    setCurrentSelected(index)
                    
                    console.log(currentSelected);
                }}/>
            </div>

        );
    }

    else {
        return (
            <div className="news | flex fx-jc-sb fx-ai-c">

            </div>
        )
    }

}

export default News;