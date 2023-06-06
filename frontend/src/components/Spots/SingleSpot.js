import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { thunkReadSpot } from '../../store/spots/singleSpotReducer';
import { useParams } from 'react-router-dom';

const SingleSpot = () => {
    const dispatch = useDispatch();
    const spotData = useSelector((state) => state.spots.singleSpot);
    const { spotId } = useParams();

    useEffect(() => {
        dispatch(thunkReadSpot(spotId));
    }, [dispatch])

    if (!spotData) return null;

    return (
        <>
            <h2>Spot info</h2>
        </>
    )
}

export default SingleSpot;
