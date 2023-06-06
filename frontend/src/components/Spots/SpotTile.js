import { Route, Link } from 'react-router-dom';

import './SpotTile.css';

const SpotTile = ({ spotData }) => {
    const { id, previewImage, city, state, price } = spotData;

    return (
        <div className='spot-tile'>
            <li key={id}>
                <Link to={`/spots/${id}`}>
                    <img src={previewImage}></img>
                    <div id='tile-text'>
                        <h4>{city}, {state}</h4>
                        <p>${price} night</p>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default SpotTile;
