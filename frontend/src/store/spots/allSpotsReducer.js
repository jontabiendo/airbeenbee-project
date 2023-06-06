import { csrfFetch } from '../csrf';
import thunk from 'redux-thunk';

const READ = 'spot/READ'

const readAllSpots = spots => {
    return {
        type: READ,
        spots
    }
};

export const getAllSpotsThunk = () => async dispatch => {
    const res = await csrfFetch('/api/spots');

    const data = await res.json();
    
    dispatch(readAllSpots(data));
    return data;
}

const initialState = { allSpots: {} }

const allSpotsReducer = (state = initialState, action) => {
    let spots = {}
    switch (action.type) {
        case READ:
            action.spots.Spots.forEach(spot => spots[spot.id] = spot)
            return spots? spots: state;
        default:
            return state
    }
}

export default allSpotsReducer;
