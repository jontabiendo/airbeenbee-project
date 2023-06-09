import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getSpotReviewsThunk } from '../../store/reviewsReducer';
import ReviewTile from './ReviewTile'

const SpotReviews = ({ spotId, spotReviews }) => {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews.spot)

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
