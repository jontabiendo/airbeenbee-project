import { useDispatch } from 'react-redux';
import React from 'react';
import { useModal } from '../../context/Modal';
import { deleteReviewThunk } from '../../store/reviewsReducer'
import { useHistory } from 'react-router-dom';

import '../Spots/DeleteModal.css'

const DeleteReviewModal = ({ id, spotId }) => {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const history = useHistory()

    const handleDelete = async (e) => {
        dispatch(deleteReviewThunk(id, spotId))
            .then(closeModal())        
            .then(history.push(`/spots/${spotId}`))
    }

    return (
        <div className='delete-modal'>
            <h2>Confirm Delete</h2>
            <p>
                Are you sure you want to delete this review?
            </p>
            <button id='confirm-delete-button' onClick={(e) => handleDelete(e)}>Yes (Delete Review)</button>
            <button id='cancel-delete-button' onClick={closeModal}>No (Keep Review)</button>
        </div>
    )
}

export default DeleteReviewModal;
