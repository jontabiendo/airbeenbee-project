import { combineReducers } from 'redux';
import singleSpotReducer from './singleSpotReducer';
import allSpotsReducer from './allSpotsReducer';

const spotsReducer = combineReducers({
    singleSpot: singleSpotReducer,
    allSpots: allSpotsReducer
})

export default spotsReducer
