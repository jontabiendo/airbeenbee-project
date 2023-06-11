import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import DeleteSpotModal from './DeleteSpotModal';

import './SpotTile.css';

const SpotTile = ({ spotData, manage }) => {
    const { id, previewImage, city, state, price, avgRating, name } = spotData;
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => setShowMenu(false);

    let spotTileClassName = 'spot-tile' + (manage ? " manage" : "")

    return (
        <div className={spotTileClassName} key={id}>
            <Link tooltip={name} to={`/spots/${id}`}>
                <img src={previewImage}></img>
                <div id='tile-text'>
                    <div className='tile-upper'>
                        <h4>{city}, {state}</h4>
                        <p><i className="fa-solid fa-star"></i> {(Math.round(avgRating * 100) / 100) || 'New'}</p>
                        </div>
                    <p>${price} night</p>
                    </div>
            </Link>
                    {manage ? (
                        <div className='manage-buttons-div'>
                            <Link id='manage-update-button' to={`/spots/${id}/edit`}>
                                Update
                            </Link>
                            <OpenModalButton buttonText="Delete" onButtonClick={closeMenu} modalComponent={<DeleteSpotModal id={id} />} />
                        </div>
                    ) : null }
        </div>
    )
}

export default SpotTile;
