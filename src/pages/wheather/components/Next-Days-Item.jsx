import './Next-Days-Item.css'
import '../../../index.css'
import Cloud from '../,,/../../../image/cloud.png'

function NextDaysItem({ data }) {
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div className="next-days-item ">
            <h4 className='fs-300 letter-spacing '>{dayOfWeek[new Date(data.hour[0].time).getDay()]}</h4>
            <img src={(data.day.condition.icon).replaceAll("64" , "128")} alt="" />
            <h3 className='bold letter-spacing  fs-300'>{data.day.avgtemp_c}&#8451;</h3>
        </div>
    )
}

export default NextDaysItem;