import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { thunkReadSpot } from '../../store/spots/singleSpotReducer';

const SingleSpot = ({ spotId }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    let spotData;

    useEffect(() => {
        spotData = dispatch(thunkReadSpot(spotId));
    }, [])

    return (
        <>
            {/* <h2>{spotData.name}</h2> */}
        </>
    )
}

export default SingleSpot;
