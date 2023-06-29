import './Splash.css'
import '../../index.css'
import Logo from '../../image/logo.png'
import { useEffect } from 'react'
import {
    Navigate,
  } from 'react-router-dom';

function Splash() {

    useEffect(() => {
        setTimeout(() => {
            <Navigate to={"/dictionary"} />
        }, 1000);
    }, [])


    return (
        <div className="splash | flex fx-ai-c fx-jc-c">
            <img src={Logo} alt="" />
        </div>
    )
}

export default Splash;