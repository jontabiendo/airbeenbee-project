import { Route, Link } from 'react-router-dom';

const SpotPreview = ({ spotData }) => {
    const { id, previewImage, city, state, price } = spotData;

    return (
        <li key={id}>
            <Link to={`/spots/${id}`}>
                <img src={previewImage}></img>
                <h4>{city}, {state}</h4>
                <p>{price} night</p>
            </Link>
        </li>
    )
}

export default SpotPreview
