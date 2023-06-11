import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getSingleSpotThunk } from '../../store/spotsReducer';
import { useParams } from 'react-router-dom';
import SpotReviews from '../Reviews/SpotReviews';
import { getSpotReviewsThunk } from '../../store/reviewsReducer';

import './singleSpot.css'

const SingleSpot = () => {
    const dispatch = useDispatch();
    const spotData = useSelector((state) => state.spots.singleSpot);
    const { spotId } = useParams();


    useEffect(() => {
        dispatch(getSingleSpotThunk(spotId));
        dispatch(getSpotReviewsThunk(spotId))
    }, [dispatch])

    useEffect(() => {

    }, [spotData])

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
                <div id='preview-img'>
                    <img src={preview[0].url} alt="spot preview image"></img>
                </div>
                <div className='normal-img'>
                    <div className='small-spot-images'>
                        <img src={images.shift().url} alt="spot image"></img>
                    </div>
                    <div className='small-spot-images'>
                        <img src={images.shift().url} alt="spot image"></img>
                    </div>
                    <div className='small-spot-images'>
                        <img src={images.shift().url} alt="spot image"></img>
                    </div>
                    <div className='small-spot-images'>
                        <img src={images.shift().url} alt="spot image"></img>
                    </div>
                </div>
            </div>
            <div className="spot-desc-actions">
                <div className="spot-desc">
                    <h3>Hosted by {spotData.Owner.firstName} {spotData.Owner.lastName}</h3>
                    <p>{spotData.description}</p>
                </div>
                <div className="spot-action">
                    <div id="action-info">
                        <p>${spotData.price} night</p>
                        <div id='review-reserve'>
                            <p><i className="fa-solid fa-star"></i> </p>
                            {spotData.numReviews > 0 && <p>{Math.round(spotData.avgStarRating * 100) / 100} · {spotData.numReviews} reviews</p>}
                            {spotData.numReviews === 0 && <p> New</p>}
                        </div>
                    </div>
                    <button onClick={() => alert('Feature Coming Soon...')}id="reserve-button">Reserve</button>
                </div>
            </div>
        </div>
        
        <SpotReviews spotId={spotData.id}  />
        </>
    )
}

export default SingleSpot;
