import { useDispatch } from 'react-redux';
import React from 'react';
import { useModal } from '../../context/Modal';
import { deleteReviewThunk } from '../../store/reviewsReducer'
import { useHistory } from 'react-router-dom';

const DeleteReviewModal = ({ id, spotId }) => {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const history = useHistory()

    const handleDelete = async (e) => {
        dispatch(deleteReviewThunk(id))
            .then(closeModal())        
            .then(history.push(`/spots/${spotId}`))
    }

    return (
        <>
            <h2>Confirm Delete</h2>
            <p>
                Are you sure you want to delete this review?
            </p>
            <button onClick={(e) => handleDelete(e)}>Yes (Delete Review)</button>
            <button onClick={closeModal}>No (Keep Review)</button>
        </>
    )
}

export default DeleteReviewModal;
