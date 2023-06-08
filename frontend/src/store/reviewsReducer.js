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
};

const createSpotReviewAction = review => {
    return {
        type: POST_REVIEW,
        review
    }
};

export const getSpotReviewsThunk = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`);

    const data = await res.json();

    
    const normalizedData = {};
    Object.values(data.Reviews).forEach(review => {
        normalizedData[review.id] = review
    });
    
    dispatch(getSpotReviewsAction(normalizedData));
    return data;
};

export const createSpotReviewThunk = (submission) => async dispatch => {
    console.log(submission)
    const { id, review, stars } = submission;

    const res = await csrfFetch(`/api/spots/${id}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            review,
            stars
        })
    });

    const data = await res.json();
    console.log(data)
    dispatch(createSpotReviewAction(data))
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
            case POST_REVIEW:
                const newState = {...state};
                newState.spot[action.review.id] = action.review
                return newState
        default:
            return state;
    }
}

export default reviewsReducer;
