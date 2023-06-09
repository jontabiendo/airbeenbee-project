import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getSingleSpotThunk } from '../../store/spotsReducer';
import { useParams } from 'react-router-dom';
import SpotReviews from '../Reviews/SpotReviews';
import OpenModalButton from '../OpenModalButton';
import ReviewFormModal from '../Reviews/ReviewFormModal';
import { getSpotReviewsThunk } from '../../store/reviewsReducer';

import './singleSpot.css'

const SingleSpot = () => {
    const dispatch = useDispatch();
    const spotData = useSelector((state) => state.spots.singleSpot);
    const spotReviews = useSelector((state) => state.reviews.spot)
    const sessionUser = useSelector((state) => state.session.user)
    const { spotId } = useParams();
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => setShowMenu(false);

    useEffect(() => {
        dispatch(getSingleSpotThunk(spotId));
        dispatch(getSpotReviewsThunk(spotId))
    }, [dispatch])

    if (!Object.values(spotData).length) return null;

    const images = [...spotData.SpotImages]
    const preview = images.splice(images.find(img => img.preview === true), 1)
    const imagesObj = {}
    images.forEach(img => imagesObj[img.id] = img)

    return (
        <>
        <div id="single-spot-div">
            <h2>{spotData.name}</h2>
            <h4>{spotData.city}, {spotData.state}, {spotData.country}</h4>
            <div className="single-spot-images">
                <img src={preview[0].url} alt="spot preview image"></img>
                {images.length ? <div className='normal-img'>
                    <img src={images.shift().url} alt="spot image"></img>
                    <img src={images.shift().url} alt="spot image"></img>
                    <img src={images.shift().url} alt="spot image"></img>
                    <img src={images.shift().url} alt="spot image"></img>
                </div> : null}
            </div>
            <div className="spot-desc-actions">
                <div className="spot-desc">
                    <h3>Hosted by {spotData.Owner.firstName} {spotData.Owner.lastName}</h3>
                    <p>{spotData.description}</p>
                </div>
                <div className="spot-action">
                    <div id="action-info">
                        <p>${spotData.price} night</p>
                        <p><i className="fa-solid fa-star"></i> </p>
                        {spotData.numReviews > 0 && <p>{spotData.avgStarRating} - {spotData.numReviews} reviews</p>}
                        {spotData.numReviews === 0 && <p> New</p>}
                    </div>
                    <button onClick={() => alert('Feature Coming Soon...')}id="reserve-button">Reserve</button>
                </div>
            </div>
        </div>
        <div>
            <h3><i className="fa-solid fa-star"></i> {spotData.numReviews > 0 && <p>{spotData.avgStarRating} - {spotData.numReviews} reviews</p>}
                        {spotData.numReviews === 0 && <p> New</p>}</h3>
            {sessionUser && <div>
                <OpenModalButton buttonText="Post Your Review" onButtonClick={closeMenu}  modalComponent={<ReviewFormModal id={spotId} />} />
                </div>}
        </div>
        <SpotReviews spotId={spotData.id} spotReviews={spotReviews} />
        </>
    )
}

export default SingleSpot;
