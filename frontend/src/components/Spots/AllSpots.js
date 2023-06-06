import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { Link, Route } from 'react-router-dom'
import { getAllSpotsThunk } from '../../store/spots/allSpotsReducer';
import SpotTile from './SpotTile';

const AllSpots = () => {
    const dispatch = useDispatch();
    const spots = useSelector((state) => state.spots.allSpots)

    useEffect(() => {
        dispatch(getAllSpotsThunk())
    }, [dispatch])

    return (
        <>
            <ul id="spot-list">
                {Object.values(spots).map(spot => (
                    <SpotTile spotData={spot} key={spot.id} />
                    )
                )}
            </ul>
        </>
    )
}

export default AllSpots;
