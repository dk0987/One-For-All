import './Creators.css'
import '../../../index.css'
import SRK from '../../../image/srk.png'
import DK from '../../../image/dk.png'

function Creators() {
    const data = [
        {
            name: "Priya Devi",
            about: "BCA is a three-year undergraduate programme in the field of computer science andinformation technology.. three-year undergraduate programme in the field of computer science andinformation technology. three-year undergraduate programme in the field of computer science andinformation technology. three-year undergraduate programme in the field of computer science andinformation technology.three-year undergraduate programme in the field of computer science andinformation technology. three-year undergraduate programme in the field of computer science andinformation technology.",
            img: SRK,
            color: "#000000",
            backgroundcolor: "#f00ca6"
        },
        {
            name: "Dilip Kumar Yadav (DK)",
            about: "BCA is a three-year undergraduate programme in the field of computer science andinforma.",
            img: DK,
            color: "#0f0c4d",
            backgroundcolor: "#000000"
        },
        {
            name: "Sneha Agrwal",
            about: "BCA is a three-year undergraduaty.",
            img: SRK,
            color: "#8fdac2",
            backgroundcolor: "#f43ca6"
        },
        {
            name: "Akshay Pratap ",
            about: "BCA is a three-year undergraduate programme in t.",
            img: SRK,
            color: "#00ffcc",
            backgroundcolor: "#0daca6"
        },
        {
            name: "Hritik Roshan",
            about: "BCA is a three-year undergraduate prog.",
            img: SRK,
            color: "#dd54ac",
            backgroundcolor: "#0d4ca6"
        },

    ]
    return (
        <div className="creators | bg-clr-700 ">
            <h3 className='creator-heading | fs-400 letter-spacing start semi-bold txt-clr-600'>Creators</h3>
            {
                data.map((item, index) => (
                    <div className="creator-card | column-for-mobile row-for-desktop " >
                        <div className="image-box" style={{ backgroundColor: item.color, left: index % 2 === 0 ? 0 : "87%" }}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className="about-creator | start" style={{ backgroundColor: item.backgroundcolor, paddingInlineStart: index % 2  === 0 ? "10rem" : "2rem", paddingInlineEnd: index % 2  === 0 ? "2rem" : "15rem" }}>
                            <h3 className='fs-500 bold letter-spacing txt-clr-500'>{item.name}</h3>
                            <h4 className='fs-300 semi-bold  letter-spacing txt-clr-500'>Student at Deen Dayal Upadhyaya</h4>
                            <h4 className='fs-300 semi-bold  letter-spacing txt-clr-500'>BCA 2020 - 2023</h4>
                            <p className='fs-300 semi-bold italic letter-spacing txt-clr-500'>{item.about}</p>
                        </div>


                    </div>
                ))
            }
        </div>
    )
}

export default Creators;