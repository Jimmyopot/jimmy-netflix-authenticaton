import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            {/* background, navbar(netflix, sign in button) */}
            <div className="loginScreen__background">
                <img 
                    className="loginScreen__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <button 
                    className="loginScreen__button"
                    onClick={() => setSignIn(true)}
                >
                    Sign In
                </button>

                <div className="loginScreen__gradient"></div>

                {/* body */}
                <div className="loginScreen__body">
                    {signIn ? (
                        <SignUpScreen />
                    ) : (
                        <>
                            <h1>Unlimited films, Tv Programmes and more.</h1>
                            <h2>Watch anywhere. Cancel anytime</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <div className="loginScreen__input">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button 
                                        className="loginScreen__getStarted"
                                        onClick={() => setSignIn(true)}
                                    >
                                        GET STARTED
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginScreen