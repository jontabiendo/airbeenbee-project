import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getSpotReviewsThunk } from '../../store/reviewsReducer';
import ReviewTile from './ReviewTile'

const SpotReviews = ({ spotId, spotReviews }) => {
    const dispatch = useDispatch();
    // const reviewsData = useSelector((state) => state.reviews.spot)

    // useEffect(() => {
    //     dispatch(getSpotReviewsThunk(spotId))
    // }, [dispatch])

    // if(!Object.values(reviewsData).length) return null;

    return (
        <div className="spot-reviews-div">
            <ul>
                {Object.values(spotReviews).map(review => (
                    <li key={review.id}>
                        <ReviewTile reviewData={review} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SpotReviews;
