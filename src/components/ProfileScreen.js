import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/userSlice';
import Nav from './Nav';
import './ProfileScreen.css'
import { auth } from '../firebase';


function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Netflix avatar"
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                        <h3>Plans (Current Plan: premium)</h3>
                        <h4>Renewal date: 05/12/2021</h4>
                        
                        <div className="profileScreen__levels">
                            <div className="profileScreen__standard">
                                <h5>Netflix Standard</h5>
                                <button>Subscribe</button>
                            </div>
                            <div className="profileScreen__basic">
                                <h5>Netflix Basic</h5>
                                <button>Subscribe</button>
                            </div>
                            <div className="profileScreen__premium">
                                <h5>Netflix premium</h5>
                                <button>Current Package</button>
                            </div>
                        </div>
            
                            <button 
                                className="profileScreen__signOut"
                                onClick={() =>auth.signOut()}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
