import './Splash.css'
import '../../index.css'
import Logo from '../../image/logo.png'
import { useEffect, useState } from 'react'
import {
    Navigate, useNavigate,
} from 'react-router-dom';

function Splash() {

    var [loading, setLoading] = useState(true)
    var navigate = useNavigate()

    useEffect(() => {
        console.log("Started");

        setTimeout(() => {
            console.log("Timer");
            localStorage.setItem('splash', true);
            setLoading(false)
        }, 5000);

    }, [])



    if (loading) {
        return (
            <div className="splash | flex fx-ai-c fx-jc-c">
                <img src={Logo} alt="" />
            </div>
        )
    }
    else {
        return navigate("/dictionary")
    }

}

export default Splash;