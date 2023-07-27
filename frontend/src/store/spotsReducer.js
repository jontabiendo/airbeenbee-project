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

const deleteSpotAction = id => {
    return {
        type: DELETE_SINGLE_SPOT,
        id
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
    const formData = new FormData();
    // formData.append("country", country);
    // formData.append("address", address);
    // formData.append("city", city);
    // formData.append("state", state);
    // formData.append("description", description);
    // formData.append("title", title);
    // formData.append("price", price);

    Array.from(images).forEach(image => formData.append("images", image));
    
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

    const imgRes = await csrfFetch(`/api/spots/${data.id}/images`, {
        method: 'POST',
        body: formData
    })

    const imgData = await imgRes.json();

    // for await (const img of images) {
    //     const { preview, url } = img;
    //     const imgRes = await csrfFetch(`/api/spots/${data.id}/images`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             preview,
    //             url
    //         })
    //     })
    // }
    return data;
};

export const editSpotThunk = (spot) => async dispatch => {
    const { country, address, city, state, description, title, price, images, id } = spot;
    
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
    return data;
}

export const getUserSpotsThunk = () => async dispatch => {
    const res = await csrfFetch(`/api/spots/current`);

    const data = await res.json();
    const normalizedData = {}
    Object.values(data.Spots).forEach(spot => {
        normalizedData[spot.id] = spot
    })

    dispatch(readAllSpots(normalizedData))
    return data;
};

export const deleteSpotThunk = (id) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE'
    })

    const data = await res.json()

    dispatch(deleteSpotAction(id))

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
        case DELETE_SINGLE_SPOT:
            const newState = {...state, allSpots: {...state.allSpots}}
            delete newState.allSpots[action.id]
            return newState;
        default:
            return state
    }
}

export default spotsReducer;
