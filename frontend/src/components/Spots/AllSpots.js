import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { Link, Route } from 'react-router-dom'
import { getAllSpotsThunk } from '../../store/spotsReducer';
import SpotTile from './SpotTile';

const AllSpots = () => {
    const dispatch = useDispatch();
    const spots = useSelector((state) => state.spots.allSpots)
    
    useEffect(() => {
        dispatch(getAllSpotsThunk())
    }, [dispatch])

    if (!spots) return null;

    return (
        <>
            <ul id="spot-list">
                {Object.values(spots).map(spot => (
                    <li key={spot.id}>
                        <SpotTile spotData={spot} />
                    </li>
                    )
                )}
            </ul>
        </>
    )
}

export default AllSpots;
