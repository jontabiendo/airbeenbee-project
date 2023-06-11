import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useModal } from '../../context/Modal';
import { deleteSpotThunk } from '../../store/spotsReducer'
import { useHistory } from 'react-router-dom';

import './DeleteModal.css'

const DeleteSpotModal = ({ id }) => {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const history = useHistory()

    const handleDelete = async (e) => {
        dispatch(deleteSpotThunk(id))
            .then(closeModal())        
            .then(history.push('/spots/current'))
    }

    return (
        <div className='delete-modal'>
            <h2>Confirm Delete</h2>
            <p>
                Are you sure you want to remove this spot from the listings?
            </p>
            <button id='confirm-delete-button' onClick={(e) => handleDelete(e)}>Yes (Delete Spot)</button>
            <button id='cancel-delete-button' onClick={closeModal}>No (Keep Spot)</button>
        </div>
    )
}

export default DeleteSpotModal;
