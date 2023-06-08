import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotTile from './SpotTile';
import { getUserSpotsThunk } from '../../store/spotsReducer';

import './SpotTile.css'

const ManageSpots = () => {
    const dispatch = useDispatch();
    const userSpots = useSelector((state) => state.spots.allSpots);

    useEffect(() => {
        dispatch(getUserSpotsThunk())
    }, [dispatch, userSpots]);

    if(!userSpots) return null;

    console.log(userSpots)

    return (
        <div className='manage-spots-div'>
            <div className='manage-spots-header'>
                <h1>Manage Your Spots</h1>
                <button>Create a New Spot</button>
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
