import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import OpenModalButton from '../OpenModalButton';

const ReviewTile = ({ reviewData }) => {
    const { User, createdAt, review } = reviewData;

    const created = new Date(createdAt)

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const month = months[created.getMonth() - 1]

    return (
        <>
            <h4>{User.firstName}</h4>
            <h5>{month} {created.getFullYear()}</h5>
            <p>{review}</p>
        </>
    )
}

/* data shape
    {
        ReviewImages: [],
        User: {
            firstName,
            id:
            lastName
        },
        id,
        review: description,
        spotId,
        starts,
        userId,
        updatedAt,
        createdAt
    }
*/

export default ReviewTile;
