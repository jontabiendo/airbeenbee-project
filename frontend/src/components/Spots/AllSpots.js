import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { getAllSpotsThunk } from '../../store/spots/allSpotsReducer';

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
                {/* {for (let spot of spots) {
                    <li key={spot.id}>
                        <Link to={`/spots/:spotId`}>
                            <img src={spot.previewImage}></img>
                            <h4>{spot.city}, {spot.state}</h4>
                            <p>{spot.price} night</p>
                        </Link>
                    </li>
                }} */}
            </ul>
        </>
    )
}

export default AllSpots;
