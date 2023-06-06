import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import { getSingleSpotThunk } from '../../store/spotsReducer';
import { useParams } from 'react-router-dom';

const findPreviewUrl = (imgArr) => {
    return imgArr.find(img => img.preview === true).url
}

const SingleSpot = () => {
    const dispatch = useDispatch();
    const spotData = useSelector((state) => state.spots.singleSpot);
    const { spotId } = useParams();

    useEffect(() => {
        dispatch(getSingleSpotThunk(spotId));
    }, [dispatch])

    if (!spotData) return null;

    const images = [...spotData.SpotImages]
    const preview = images.length ? findPreviewUrl() : null;

    return (
        <>
            <h2>{spotData.name}</h2>
            <h4>{spotData.city}, {spotData.state}, {spotData.country}</h4>
            <div className="single-spot-images">
                <img src={preview ? preview : null} ></img>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
            </div>
        </>
    )
}

export default SingleSpot;
