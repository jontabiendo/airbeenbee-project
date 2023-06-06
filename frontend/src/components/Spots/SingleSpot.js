import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { thunkReadSpot } from '../../store/spots/singleSpotReducer';

const SingleSpot = ({ spotId }) => {
    const dispatch = useDispatch();
    const spotData = useSelector((state) => state.spots.singleSpot)
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(thunkReadSpot(spotId));
    }, [dispatch])

    return (
        <>
            <h2>{spotData.name}</h2>
        </>
    )
}

export default SingleSpot;
