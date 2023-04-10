import '../../../index.css'
import './MovieList.css'
import Star from './../../../image/star.png'
function MovieList({ data , onMovieitem }) {

    return (
        <div className="movieList | column-for-mobile row-for-desktop ">
            {data.slice(0,  6).map((movie, index ) => (
                
                <div className="list-item"  onClick={() => onMovieitem(index)}>
                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                    <h4 className='fs-300 bold start letter-spacing'>{movie.title} </h4>
                    <div className="rating-star | flex fx-ai-c">
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <h6 className='fs-300 bold start letter-spacing uppercase'>{movie.vote_average}</h6>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default MovieList;