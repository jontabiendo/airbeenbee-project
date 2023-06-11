import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotTile from './SpotTile';
import { getUserSpotsThunk } from '../../store/spotsReducer';
import { useHistory } from 'react-router-dom';

import './ManageSpots.css'
import './SpotTile.css'

const ManageSpots = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const userSpots = useSelector((state) => state.spots.allSpots);

    useEffect(() => {
        dispatch(getUserSpotsThunk())
    }, [dispatch]);

    if(!userSpots) return null;

    return (
        <div className='manage-spots-div'>
            <div className='manage-spots-header'>
                <h2>Manage Spots</h2>
                <button onClick={() => history.push('/spots/new')}>Create a New Spot</button>
            </div>
            <ul id="spot-list">
                {Object.values(userSpots).map(spot => 
                    <li>
                        <SpotTile manage='manage' spotData={spot} />
                    </li>
                )
                }
            </ul>
        </div>
    )
}

export default ManageSpots;
