import './Todays-current.css'
import '../../../index.css'
import UV from '../../../image/uv.png'
import WindSpeed from '../../../image/wind-speed.png'
import Humidity from '../../../image/humidity.png'

function TodaysCurrent({ data }) {
    const dataImg = data.current.condition.icon;
    const img = dataImg.replaceAll("64" , "128");
    return (
        <div className="todays-current | flex  fx-ai-c">

            <div className="current-info | grid ">
                <h4 className='fs-500 bold letter-spacing start'>{data.location.name}</h4>
                <h4 className='fs-300 bold letter-spacing start'>{data.location.region}</h4>
                <h4 className='fs-400 semi-bold letter-spacing start'>{data.location.country}</h4>
                <h3 className='fs-500 bold letter-spacing start'>{data.current.temp_c}&#8451;</h3>
                <h5 className='fs-400  letter-spacing start'>{data.current.condition.text}</h5>
                <h5 className='fs-400  letter-spacing start'>{new Date(data.location.localtime).getHours() + ":" + new Date(data.location.localtime).getMinutes() }</h5>

                <div className="extra-info | grid">
                    <div className='flex'>
                        <img src={UV} alt="" />
                        <h5>{data.current.uv}</h5>
                    </div>

                    <div className='flex'>
                        <img src={Humidity} alt="" />
                        <h5>{data.current.humidity}%</h5>
                    </div>

                    <div className='flex'>
                        <img src={WindSpeed} alt="" />
                        <h5>{data.current.wind_kph}km/h</h5>
                    </div>
                </div>
            </div>

            <div className="wheather-image">
                <img src={img} alt="" />
            </div>

        </div>
    )
}

export default TodaysCurrent