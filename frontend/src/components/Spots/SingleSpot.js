import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { getSingleSpotThunk } from '../../store/spotsReducer';
import { useParams } from 'react-router-dom';

const SingleSpot = () => {
    const dispatch = useDispatch();
    const spotData = useSelector((state) => state.spots.singleSpot);
    const { spotId } = useParams();
    console.log(spotId)

    useEffect(() => {
        dispatch(getSingleSpotThunk(spotId));
    }, [dispatch])

    if (!spotData) return null;

    console.log('spotData ', spotData)

    return (
        <>
            <h2>{spotData.name}</h2>
        </>
    )
}

export default SingleSpot;
