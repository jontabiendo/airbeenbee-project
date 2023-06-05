import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { getAllSpotsThunk } from '../../store/spots/allSpotsReducer';

const AllSpots = () => {
    const dispatch = useDispatch();
    const spots = useSelector((state) => state.spots.allSpots)

    useEffect(() => {
        // dispatch(getAllSpotsThunk())
    }, [])


    return (
        <>
            <h2>All Spots</h2>
            <Link to='/spots/1' >Spot 1</Link>
        </>
    )
}

export default AllSpots;
