import React from "react";
import "./Header.css"
import hero from './image/technology.png'
import whiteCircle from './image/main.png'

const Header = () => {
    return (
        <div className="color">
            <div className="header-container">
                <ul>
                    <div className="header-middle-container">
                        <li>
                            <h5 className="summer">SUMMER 2020</h5>
                        </li>
                        <li><h1>NEW COLLECTION</h1></li>
                        <li><h4>We know how large objects will act,
                            but things on a small scale.</h4></li>
                        <li>
                            <button>SHOP NOW</button>
                        </li>
                    </div>
                </ul>

                <ul>
                    <li>
                        <img  className="h-img"  src={whiteCircle} alt="name" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header