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
    console.log(data)
    return res;
}

const initialState = { allSpots: [] }

const allSpotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case READ:
            return {
                ...state,
                allSpots: [...action.spots]
            }
        default:
            return state
    }
}

export default allSpotsReducer;
