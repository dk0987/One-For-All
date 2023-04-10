import './Next-Days.css'
import '../../../index.css'
import NextDaysItem from './Next-Days-Item';

function NextDays({ data }) {
    return (
        <div className="next-days">
            {
                data.forecast.forecastday.map((day, index) => (
                    <NextDaysItem data={day} />
                ))
            }
        </div>
    )
}

export default NextDays;