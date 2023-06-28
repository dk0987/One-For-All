import SelectedMovie from "./components/SelectedMovie";
import Generes from "./components/Generes";
import MovieList from "./components/MovieList";
import '../../index.css'
import './Movie.css'

import { useState, useEffect } from 'react';

function Movie() {


    const randomInteger = ((min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    })

    const shuffleArray = ((array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    })

    const API_KEY = "631609a6656fa51347769b79262503b0"
    const [data, setData] = useState([])
    const [loadingList, setLoadingList] = useState(true)
    let [currentSelected, setCurrentSelected] = useState(randomInteger(1, 20))
    const genreIDs = [
        28,
        12,
        16,
        53,
        27,
        35
    ]
    const region = [
        "IN",
        "US"
    ]

    useEffect(() => {
        getData(genreIDs[0]);
    });

    const getData = ((genreID) => {
        const requestedOptions = {
            method: "GET",
        };
        console.log("dgs")

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&region=${region[randomInteger(0, 1)]}&with_genres=${genreID}&page=${randomInteger(1, 50)}`, requestedOptions)
            .then(response => response.json())
            .then((result) => {
                setData(shuffleArray(result.results))
                console.log(result);
                setLoadingList(false);
            })
    })


    const onAnimation = (() => {
        getData(genreIDs[2])
    })
    const onAction = (() => {
        getData(genreIDs[0])
    })
    const onAdventure = (() => {
        getData(genreIDs[1])
    })
    const onThriller = (() => {
        getData(genreIDs[3])
    })
    const onHorror = (() => {
        getData(genreIDs[4])
    })
    const onComedy = (() => {
        getData(genreIDs[5])
    })






    if (loadingList) {

    }
    else {
        return (
            <div className="movie">
                <SelectedMovie data={data[currentSelected]} />
                <div className="generes-box | column-for-mobile row-for-desktop">
                    <h3 className="uppercase bold">Popular</h3>
                    <Generes name="Action" onClick={onAction} />
                    <Generes name="Adventure" onClick={onAdventure} />
                    <Generes name="Animation" onClick={onAnimation} />
                    <Generes name="Thriller" onClick={onThriller} />
                    <Generes name="Horror" onClick={onHorror} />
                    <Generes name="Comedy" onClick={onComedy} />
                </div>
                <MovieList data={data} onMovieitem={(index) => {
                    setCurrentSelected(index)
                }} />
            </div>
        );
    }


}

export default Movie;