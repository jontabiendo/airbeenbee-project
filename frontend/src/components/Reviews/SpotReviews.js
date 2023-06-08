import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getSpotReviewsThunk } from '../../store/reviewsReducer';
// import ReviewTile from './ReviewTile'

const SpotReviews = ({ spotId }) => {
    const dispatch = useDispatch();
    const reviewsData = useSelector((state) => state.reviews.spot)

    useEffect(() => {
        dispatch(getSpotReviewsThunk(spotId))
    }, [dispatch])

    return (
        <h2>Reviews</h2>
        
    )
}

export default SpotReviews;
