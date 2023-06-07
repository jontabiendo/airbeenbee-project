import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import DeleteSpotModal from './DeleteSpotModal';

import './SpotTile.css';

const SpotTile = ({ spotData, manage }) => {
    const { id, previewImage, city, state, price, avgRating } = spotData;
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => setShowMenu(false);


    return (
        <div className='spot-tile' key={id}>
            <Link to={`/spots/${id}`}>
                <img src={previewImage}></img>
                <div id='tile-text'>
                    <div className='tile-upper'>
                        <h4>{city}, {state}</h4>
                        <p><i className="fa-solid fa-star"></i> {avgRating}</p>
                        </div>
                    <p>${price} night</p>
                    </div>
            </Link>
            {manage ? (
                <>
                    <Link to={`/spots/${id}/edit`}>
                        Update
                    </Link>
                    <OpenModalMenuItem itemText="Delete Spot" onItemClick={closeMenu} modalComponent={<DeleteSpotModal />} />
                </>
            ) : null }
        </div>
    )
}

export default SpotTile;
