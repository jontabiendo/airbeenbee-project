import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { getSingleSpotThunk } from '../../store/spotsReducer';
import { useParams } from 'react-router-dom';

import './singleSpot.css'



const SingleSpot = () => {
    const dispatch = useDispatch();
    const spotData = useSelector((state) => state.spots.singleSpot);
    const { spotId } = useParams();

    useEffect(() => {
        dispatch(getSingleSpotThunk(spotId));
    }, [dispatch])

    if (!spotData) return null;

    const images = [...spotData.SpotImages]
    const preview = images.splice(images.find(img => img.preview === true), 1)
    const imagesObj = {}
    images.forEach(img => imagesObj[img.id] = img)

    console.log(spotData)

    return (
        <div id="single-spot-div">
            <h2>{spotData.name}</h2>
            <h4>{spotData.city}, {spotData.state}, {spotData.country}</h4>
            <div className="single-spot-images">
                <img src={preview.url} alt="spot preview image"></img>
                <div className='normal-img'>
                    <img src={images.shift() ? images.shift().url : "no image"} alt="spot image"></img>
                    <img src={images.shift() ? images.shift().url : "no image"} alt="spot image"></img>
                    <img src={images.shift() ? images.shift().url : "no image"} alt="spot image"></img>
                    <img src={images.shift() ? images.shift().url : "no image"} alt="spot image"></img>
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
                        <p><i className="fa-solid fa-star"></i> {spotData.avgRating} - {spotData.numReviews} reviews</p>
                    </div>
                    <button onClick={() => alert('Feature Coming Soon...')}id="reserve-button">Reserve</button>
                </div>
            </div>
        </div>
    )
}

export default SingleSpot;
