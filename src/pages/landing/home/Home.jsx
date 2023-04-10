import '../../../index.css'
import './Home.css'
import OneForAll from '../../../image/one-for-all-landing.png'
import LandingNav from '../../../components/LandingNav'
import Creators from '../creators/Creators'
import ContactUs from '../contact-us/ContactUs'
import { Outlet, Link } from "react-router-dom";


function Home() {
    return (
        <div className="home | bg-clr-600 ">
            <div className='hide-for-mobile'>

                <LandingNav />
            </div>
            <div className="image-button">
                <img src={OneForAll} alt="" />
                <Link to={"/dictionary"}>
                    <button className='semi-bold fs-400 ' >Get Started </button>
                </Link>
            </div>
            <Creators />
            <ContactUs />

        </div>
    )
}

export default Home;