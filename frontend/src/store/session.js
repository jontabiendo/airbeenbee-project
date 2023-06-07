import {csrfFetch} from './csrf';

const SET = 'user/SET';
const REMOVE = '/user/REMOVE'

const setUser = user => {
    return {
        type: SET,
        user
    }
};

const removeUser = () => {
    return {
        type: REMOVE
    }
};

export const thunkSetUser = user => async dispatch => {
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password
        })
    });

    const data = await res.json();
    dispatch(setUser(data.user));
    return data;
};

export const restoreUser = () => async dispatch => {
    const res = await csrfFetch('/api/session');
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
};

export const thunkSignUp = (user) => async dispatch => {
    const { username, firstName, lastName, email, password} = user;
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username,
            firstName,
            lastName,
            email,
            password
        })
    });

    const data = await res.json();
    dispatch(setUser(data.User));
    return res;
};

export const thunkLogout = () => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    });

    dispatch(removeUser());
    return res;
};

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return { ...state, user: action.user}
        case REMOVE: 
            return {...state,
            user: null}
        default:
            return state;
    }
};

export default sessionReducer;
