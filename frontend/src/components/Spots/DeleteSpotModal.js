import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useModal } from '../../context/Modal';
import { deleteSpotThunk } from '../../store/spotsReducer'
import { useHistory } from 'react-router-dom';

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
        <>
            <h2>Confirm Delete</h2>
            <p>
                Are you sure you want to remove this spot from the listings?
            </p>
            <button onClick={(e) => handleDelete(e)}>Yes (Delete Spot)</button>
            <button onClick={closeModal}>No (Keep Spot)</button>
        </>
    )
}

export default DeleteSpotModal;
