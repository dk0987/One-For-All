import './NewsList.css'
import './../../../index.css'

function NewsList({ data, onPrev, onNext, onNewsItem }) {
    return (
        <div className="news-list">
            <h4 className='start letter-spacing fs-300 bold'>TOP STORIES</h4>
            {
                data.articles.map((news, index) => (
                    <div className="news-list-item | flex bg-clr-400" onClick={() => onNewsItem(index)}>
                        <div className="news-item-image">
                            <img src={news.urlToImage} alt="" />
                        </div>

                        <div className="news-item-detail" >
                            <h5 className='fs-300 start bold' >{news.title}</h5>
                            <p className='fs-300 start light italic'>{news.author}</p>
                        </div>

                    </div>
                ))
            }

            <div className="prev-next | flex fx-jc-sb">
                <h4 className='fs-300 bold txt-clr-400 italic' onClick={() => onPrev()}>Prev</h4>
                <h4 className='fs-300 bold txt-clr-400  italic' onClick={() => onNext()} >Next</h4>
            </div>
        </div>
    );
}

export default NewsList;