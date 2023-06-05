import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user)

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <li>
                <ProfileButton id='navElement' user={sessionUser} />
            </li>
        );
    } else {
        sessionLinks = (
            <li>
                <OpenModalButton buttonText="Log In" modalComponent={<LoginFormModal />} />
                <OpenModalButton buttonText="Sign Up" modalComponent={<SignupFormModal />} />
            </li>
        );
    }

    return (
        <ul>
            <li>
                <NavLink to='/'>
                    Home
                </NavLink>
            </li>
            {isLoaded && sessionLinks}
        </ul>
    )
};

export default Navigation;
