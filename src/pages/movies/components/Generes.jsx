import '../../../index.css'
import './Generes.css'

function Generes({name  , onClick}){
    return(
        <div className="generes | bg-clr-500" onClick={() => onClick()}>
            <h3 className='txt-clr-500'> {name}</h3>
        </div>
    );
}

export default Generes ;