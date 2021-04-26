import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                    className="loginScreen__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <button 
                    className="loginScreen__button"
                >
                    Sign In
                </button>

                <div className="loginScreen__gradient"></div>

                <div className="loginScreen__body">
                    <>
                        <h1>Unlimited films, Tv Programmes and more.</h1>
                    </>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen