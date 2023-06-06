import { Route, Link } from 'react-router-dom';

import './SpotTile.css';

const SpotTile = ({ spotData }) => {
    const { id, previewImage, city, state, price, avgRating } = spotData;

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
        </div>
    )
}

export default SpotTile;
