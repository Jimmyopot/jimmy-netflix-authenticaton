import React, { useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img 
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                    alt="Netflix logo"
                />

                <img 
                    className="nav__avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGndWhkMy59wkA_6w4tXXBLrb3hR5ewNLeHw&usqp=CAU"
                    alt="Netflix avatar"
                />
            </div>
        </div>
    )
}

export default Nav
