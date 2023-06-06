import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';

import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user)


    return (
        <div id="navigation">
            <ul>
                <li id='home'>
                    <NavLink to='/'>
                        <h1>airbnb</h1>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/spots/new'>
                        <p>Create a New Spot</p>
                    </NavLink>
                </li>
                <li>
                    {isLoaded && <ProfileButton user={sessionUser} />}
                </li>
            </ul>
        </div>
    )
};

export default Navigation;
