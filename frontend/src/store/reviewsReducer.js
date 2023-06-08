import { csrfFetch } from './csrf';
import thunk from 'redux-thunk';

const GET_REVIEWS = 'reviews/spot/GET'
const POST_REVIEW = 'review/spot/GET';
const PUT_REVIEW = '/review/spot/PUT';
const DELETE_REVIEW = '/review/spot/DELETE';

const getSpotReviewsAction = reviews => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

export const getSpotReviewsThunk = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`);

    const data = await res.json();

    
    const normalizedData = {};
    Object.values(data.Reviews).forEach(review => {
        normalizedData[review.id] = review
    });
    
    console.log(normalizedData)
    dispatch(getSpotReviewsAction(normalizedData));
    return data;
}

const initialState = {
    spot: {},
    user: {}
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                spot: action.reviews
            }
        default:
            return state;
    }
}

export default reviewsReducer;
