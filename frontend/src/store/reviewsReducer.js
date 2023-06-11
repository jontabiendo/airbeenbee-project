import { csrfFetch } from './csrf';
import thunk from 'redux-thunk';
import { getSingleSpotThunk } from './spotsReducer'

const GET_REVIEWS = 'reviews/spot/GET'
const POST_REVIEW = 'review/spot/GET';
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

const deleteReviewAction = id => {
    return {
        type: DELETE_REVIEW,
        id
    }
}

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
    console.log('post create fetch', data)
    
    if (res.ok) {
        console.log('response was ok!')
        const reviewFetch = await csrfFetch(`/api/reviews/${data.id}`)

        console.log('post review fetch', reviewFetch)
        
        const revData = await reviewFetch.json();
        console.log('reviewFetch ', revData)
        dispatch(createSpotReviewAction(revData))
        dispatch(getSingleSpotThunk(id))
    }
    return data;
};

export const deleteReviewThunk = (id, spotId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })

    const data = await res.json();

    if (res.ok) {
        dispatch(deleteReviewAction(id))
        dispatch(getSingleSpotThunk(spotId))
    }

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
            };
            case POST_REVIEW:
                const newState = {...state,
                spot: {...state.spot
                }};
                newState.spot[action.review.id] = action.review
                return newState;
            case DELETE_REVIEW:
                const newState1 = {
                    ...state,
                    spot: {...state.spot}
                };
                delete newState1.spot[action.id]
                return newState1;

        default:
            return state;
    }
}

export default reviewsReducer;
