import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { Link, Route } from 'react-router-dom'
import { getAllSpotsThunk } from '../../store/spots/allSpotsReducer';
import SpotPreview from './SpotPreview';

const AllSpots = () => {
    const dispatch = useDispatch();
    const spots = useSelector((state) => state.spots.allSpots)

    useEffect(() => {
        dispatch(getAllSpotsThunk())
    }, [dispatch])



    return (
        <>
            <h2>All Spots</h2>
            <ul>
                {Object.values(spots).map(spot => (
                    <SpotPreview spotData={spot} key={spot.id} />
                    )
                )}
            </ul>
        </>
    )
}

export default AllSpots;
