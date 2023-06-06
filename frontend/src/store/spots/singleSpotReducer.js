import { csrfFetch } from '../csrf';
import thunk from 'redux-thunk';

const CREATE = 'spot/CREATE'
const READ = 'spot/READ'
const UPDATE = 'spot/UPDATE'
const DELETE = 'spot/DELETE'

const createSpot = spot => {
    return {
        type: CREATE,
        spot
    }
};

const readSpot = spot => {
    return {
        type: READ,
        spot: spot
    }
};

const updateSpot = spot => {
    return {
        type: UPDATE,
        spot
    }
};

const deleteSpot = spotId => {
    return {
        type: DELETE,
        spotId
    }
};

export const thunkReadSpot = spotId => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}`)
    
    const data = await res.json();
    console.log('pre-dispatch', data)
    dispatch(readSpot(data))
    return data;
}

const initialState = { singleSpot: {} };

const singleSpotReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE: 
            return {}
        case READ:
            return {
                singleSpot: action.spot
            }
        case UPDATE:
            return {}
        case DELETE:
            return {}
        default:
            return state
    }
}

export default singleSpotReducer;
