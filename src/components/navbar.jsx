import './navbar.css'
import '../index.css'
import Wheather from '../image/wheather.png'
import Dictionary from '../image/dictionary.png'
import Movie from '../image/movie.png'
import Game from '../image/game.png'
import News from '../image/news.png'
import Logo from '../image/logo.png'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    let [selected, setSelected] = useState(0)

    return (
        <div>
            <div className="navbar | hide-for-mobile">

                <nav className=' grid '>

                    <div className="logo | txt-clr-300 fs-500">
                        <Link to={"/home"}>
                            <img src={Logo} alt="" />
                        </Link>
                    </div>

                    <div className="navitem | grid">
                        <Link to={"/dictionary"}>
                            <img src={Dictionary} alt="" className={selected === 0 ? "active" : null} onClick={() => { setSelected(0) }} />
                        </Link>

                        <Link to={"/news"}>
                            <img src={News} alt="" className={selected === 1 ? "active" : null} onClick={() => { setSelected(1) }} />
                        </Link>

                        <Link to={"/movie"}>
                            <img src={Movie} alt="" className={selected === 2 ? "active" : null} onClick={() => { setSelected(2) }} />
                        </Link>

                        <Link to={"/wheather"}>
                            <img src={Wheather} alt="" className={selected === 3 ? "active" : null} onClick={() => { setSelected(3) }} />
                        </Link>

                        <Link to={"/tic-tac-toe"}>
                            <img src={Game} alt="" className={selected === 4 ? "active" : null} onClick={() => { setSelected(4) }} />
                        </Link>


                    </div>

                    <div>

                    </div>


                </nav>

            </div>

            <div className="mobile-nav | hide-for-desktop ">

                <nav className=' flex fx-jc-sa'>

                    <Link to={"/dictionary"}>
                        <img src={Dictionary} alt="" className={selected === 0 ? "active" : null} onClick={() => { setSelected(0) }} />
                    </Link>

                    <Link to={"/news"}>
                        <img src={News} alt="" className={selected === 1 ? "active" : null} onClick={() => { setSelected(1) }} />
                    </Link>

                    <Link to={"/movie"}>
                        <img src={Movie} alt="" className={selected === 2 ? "active" : null} onClick={() => { setSelected(2) }} />
                    </Link>

                    <Link to={"/wheather"}>
                        <img src={Wheather} alt="" className={selected === 3 ? "active" : null} onClick={() => { setSelected(3) }} />
                    </Link>

                    <Link to={"/tic-tac-toe"}>
                        <img src={Game} alt="" className={selected === 4 ? "active" : null} onClick={() => { setSelected(4) }} />
                    </Link>

                </nav>
            </div>
        </div>


    );
}

export default NavBar;