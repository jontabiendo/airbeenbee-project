import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Modal, useModal } from '../../context/Modal';

const ReviewFormModal = () => {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState(0)

    const handleSubmit = async () => {
        console.log('submission pending...')
    }

    return (
        <>
            <h3>How was your stay?</h3>
            <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder='Leave your review here...' />
            <p>Stars</p>
            <button onClick={handleSubmit} disabled={review.length < 10}>Submit Your Review</button>
        </>
    )
}

export default ReviewFormModal;
