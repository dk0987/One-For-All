import './Todays-future.css'
import '../../../index.css'

function TodaysFuture({ data }) {

    return (
        <div className="todays-future  ">
            {
                data.forecast.forecastday[0].hour.map((item, index) => (
                    <div className="time-item">
                        <h4 className='fs-300 letter-spacing '>{new Date(item.time).getHours() + ":" + new Date(item.time).getMinutes() + 0}</h4>
                        <img src={(item.condition.icon).replaceAll("64" , "128")} alt="" />
                        <h3 className=' letter-spacing  fs-300'>{item.condition.text}</h3>
                        <h3 className='bold letter-spacing  fs-300'>{item.temp_c}&#8451;</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default TodaysFuture;