import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Modal, useModal } from '../../context/Modal';
import { createSpotReviewThunk } from '../../store/reviewsReducer';
import './ReviewFormModal.css';

const ReviewFormModal = ({ id }) => {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const [review, setReview] = useState('');
    const [currentStars, setCurrentStars] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const handleSubmit = async () => {
        dispatch(createSpotReviewThunk({
            id,
            review,
            stars: currentStars
        }))
            .then(closeModal())
    }

    const onChange = (number) => {
        setDisabled(true)
        setCurrentStars(number);
      };
    
    const starFill = (num) => {
        if (currentStars >= num) return "filled"
        else return "empty"
      }

    //   console.log(currentStars, disabled)

    return (
        <>
            <h3>How was your stay?</h3>
            <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder='Leave your review here...' />
            <div className="rating-input">
        <div className={starFill(1)} onMouseEnter={!disabled ? (e) =>  setCurrentStars(1) : null} onMouseLeave={() => setCurrentStars(currentStars)} onClick={() => onChange(1)}>
        <i className="fa-solid fa-star"></i>
        </div>
        <div className={starFill(2)} onMouseEnter={!disabled ? (e) => setCurrentStars(2) : null} onMouseLeave={() => setCurrentStars(currentStars)} onClick={() => onChange(2)} >
        <i className="fa-solid fa-star"></i>
        </div>
        <div className={starFill(3)} onMouseEnter={!disabled ? (e) => setCurrentStars(3) : null} onMouseLeave={() => setCurrentStars(currentStars)} onClick={() => onChange(3)} >
        <i className="fa-solid fa-star"></i>
        </div>
        <div className={starFill(4)} onMouseEnter={!disabled ? (e) => setCurrentStars(4) : null} onMouseLeave={() => setCurrentStars(currentStars)} onClick={() => onChange(4)} >
        <i className="fa-solid fa-star"></i>
        </div>
        <div className={starFill(5)} onMouseEnter={!disabled ? (e) => setCurrentStars(5) : null} onMouseLeave={() => setCurrentStars(currentStars)} onClick={() => onChange(5)} >
        <i className="fa-solid fa-star"></i>
        </div>
      </div>
            <button onClick={handleSubmit} disabled={review.length < 10}>Submit Your Review</button>
        </>
    )
}

export default ReviewFormModal;
