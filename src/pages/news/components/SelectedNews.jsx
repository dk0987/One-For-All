import './SelectedNews.css';
import '../../../index.css'

function SelectedNews({ data  }) {
    return (
        <div className="selected-news ">
            <img src={data.urlToImage} alt="" />
            <div className="selected-news-detail | bg-clr-400" >
                <div className="news-detail-heading | start ">
                    <h2 className='bold fs-500 letter-spacing'>{data.title}</h2>
                </div>

                <div className="news-detail-info | start ">
                    <p className='light fs-300 italic '>{data.content} <a href={data.url} className='txt-clr-400 bold' target= "new" >see more...</a></p>
                    <h3 className='fs-300 bold italic letter-spacing end'>{data.author}</h3>
                </div>
            </div>

        </div>
    );
}

export default SelectedNews;