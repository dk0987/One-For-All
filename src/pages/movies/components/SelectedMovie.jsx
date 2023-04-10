import '../../../index.css'
import './SelectedMoive.css'
import Star from './../../../image/star.png'

function SelectedMovie({ data }) {
    return (
        <div className="selectedMovie ">
            <img src={"https://image.tmdb.org/t/p/w1280/" + data.backdrop_path} alt="" />
            <div className="poster | hide-for-mobile">
                <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt="" />
            </div>
            <div className="movie-detail-poster">
                <div className="movie-detail">
                    <h2 className='fs-800 bold start uppercase'>{data.title}</h2>
                    <div className="rating |  flex fx-ai-c ">
                        <h4 className='fs-400 bold start letter-spacing uppercase'>Rating</h4>
                        <div className="rating-star | flex fx-ai-c">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <h6 className='fs-400 bold start letter-spacing uppercase'>{data.vote_average}</h6>
                        </div>
                    </div>
                    <div className="description">
                        <h4 className='fs-400 bold start letter-spacing uppercase'>Description</h4>
                        <p className='semi-bold fs-400 italic start'>{data.overview}</p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default SelectedMovie;