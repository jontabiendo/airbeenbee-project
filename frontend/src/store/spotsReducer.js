import { csrfFetch } from '../csrf';
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

const getSingleSpotAction = spotId => {
    return {
        type: GET_SINGLE_SPOT,
        spotId
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
    console.log(data)

    dispatch(getSingleSpotAction(data))
    return data;
}

const initialState = {
    singleSpot: {},
    allSpots: {}
}

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS:
            const newState = {...state};
            newState.allSpots = {...action.spots}
            return newState;
        default:
            return state
    }
}

export default spotsReducer;
