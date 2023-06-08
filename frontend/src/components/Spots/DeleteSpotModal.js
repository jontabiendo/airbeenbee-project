import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useModal } from '../../context/Modal';
import { deleteSpotThunk } from '../../store/spotsReducer'

const DeleteSpotModal = ({ id }) => {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        dispatch(deleteSpotThunk(id))
        closeModal()
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
