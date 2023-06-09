import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';

import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user)


    return (
        <div id="navigation">
            <ul id='nav-list'>
                <li>
                    <NavLink to='/'>
                        <div id='home'>
                            <img id='home-icon' src={require('./airbnb-logo.png')} />
                            <h1>airbnb</h1>
                        </div>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/spots/new'>
                        <p>Create a New Spot</p>
                    </NavLink>
                </li> */}
                <li id='right-nav'>
                    <NavLink to='/spots/new'>
                        <p id="create-spot-button">Create a New Spot</p>
                    </NavLink>
                    {isLoaded && <ProfileButton user={sessionUser} />}
                </li>
            </ul>
        </div>
    )
};

export default Navigation;
