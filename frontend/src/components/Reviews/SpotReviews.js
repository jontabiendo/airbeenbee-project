import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile';
import OpenModalButton from '../OpenModalButton';
import ReviewFormModal from '../Reviews/ReviewFormModal';

const SpotReviews = ({ spotId }) => {
    const dispatch = useDispatch();
    let reviews = useSelector((state) => state.reviews.spot)
    const spotData = useSelector((state) => state.spots.singleSpot)
    const [showMenu, setShowMenu] = useState(false);
    const sessionUser = useSelector((state) => state.session.user)
    
    const closeMenu = () => setShowMenu(false);

    let reviewPlural = ''
    if (spotData.numReviews > 1) reviewPlural = 's'

    reviews = Object.values(reviews).sort((a, b) => b.id - a.id)

    return (
        <div className="spot-reviews-div">
            <div className='spot-reviews-header'>
                <h3><i className="fa-solid fa-star"></i> {spotData.numReviews > 0 && <p>{Math.round(spotData.avgStarRating * 100) / 100} · {spotData.numReviews} review{reviewPlural}</p>}
                {spotData.numReviews === 0 && <p> New</p>}</h3>
                {sessionUser && sessionUser.id !== spotData.ownerId && <div> <OpenModalButton buttonText="Post Your Review" onButtonClick={closeMenu}  modalComponent={<ReviewFormModal id={spotId} />} />
                </div>}
            </div>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <ReviewTile reviewData={review} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SpotReviews;
