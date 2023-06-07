import { csrfFetch } from './csrf';
import thunk from 'redux-thunk';

const GET_ALL_SPOTS = '/spots/GET/all';
const POST_SINGLE_SPOT = 'spot/POST/single';
const GET_SINGLE_SPOT = 'spot/GET/single';
const PUT_SINGLE_SPOT = 'spot/PUT/single';
const DELETE_SINGLE_SPOT = '/spot/DELETE/single';

const readAllSpots = spots => {
    return {
        type: GET_ALL_SPOTS,
        spots
    }
};

const getSingleSpotAction = spot => {
    return {
        type: GET_SINGLE_SPOT,
        spot
    }
};

const updateSpotAction = spot => {
    return {
        type: PUT_SINGLE_SPOT,
        spot
    }
}

export const getAllSpotsThunk = () => async dispatch => {
    const res = await csrfFetch('/api/spots');

    const data = await res.json();

    const normalizedData = {}
    Object.values(data.Spots).forEach(spot => {
        normalizedData[spot.id] = spot
    })
    
    dispatch(readAllSpots(normalizedData));
    return data;
};

export const getSingleSpotThunk = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}`);

    const data = await res.json();

    dispatch(getSingleSpotAction(data))
    return data;
};

export const createSpotThunk = (spot) => async dispatch => {
    const { country, address, city, state, description, title, price, images } = spot;
    
    const res = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country,
            address,
            city,
            state,
            description,
            name: title,
            price,
            lng: -122.4730327,
            lat: 37.7645358
        })
    });

    const data = await res.json();

    for await (const img of images) {
        const { preview, url } = img;
        const imgRes = await csrfFetch(`/api/spots/${data.id}/images`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                preview,
                url
            })
        })
    }
    return data;
};

export const editSpotThunk = (spot) => async dispatch => {
    const { country, address, city, state, description, title, price, images, id } = spot;
    console.log(spot)
    
    const res = await csrfFetch(`/api/spots/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country,
            address,
            city,
            state,
            description,
            name: title,
            price,
            lng: -122.4730327,
            lat: 37.7645358
        })
    });

    const data = await res.json();

    for await (const img of images) {
        const { preview, url } = img;
        const imgRes = await csrfFetch(`/api/spots/${data.id}/images`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                preview,
                url
            })
        })
    }
    return data;
}

export const getUserSpotsThunk = () => async dispatch => {
    const res = await csrfFetch(`/api/spots/current`);

    const data = await res.json();
    console.log('getUserSpotsThunk ', data)

    dispatch(readAllSpots(data))
    return data;
}

const initialState = {
    singleSpot: {},
    allSpots: {}
}

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS:
            return {
                ...state,
                allSpots: action.spots
            }
        case GET_SINGLE_SPOT:
            return {
                ...state,
                singleSpot: action.spot
            }
        default:
            return state
    }
}

export default spotsReducer;
