import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { thunkSetUser } from '../../store/session';
import { useModal } from '../../context/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom'

import './LoginForm.css';

const LoginFormModal = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal();
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault();

        setErrors({});
            
        dispatch(thunkSetUser({
            credential,
            password
        }))
            .then(closeModal)
            .catch(
                async (res) => {
                    const data= await res.json();
                    if(!data.errors) history.push('/')
                    if (data && data.errors) setErrors(data.errors);
                }
            );

    };

    const onSubmitDemo = (e) => {
        e.preventDefault();

        setErrors({});

        dispatch(thunkSetUser({
        credential: 'Demo-Lition',
        password: 'password'
        }))
            .then(closeModal)
            .then( async (res) => {
                history.push('/')
            })
    }

    let disabled = true;
    if (credential.length && password.length) disabled = false

    let signinButtonClass = "login-button" + (disabled ? "-disabled" : "")

    return (
        <div className="login-form-div">
            <h2>Log In</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="credential">Username or Email:
                </label>
                    <input type="text" name="credential" value={credential} onChange={(e) => setCredential(e.target.value)}></input>
                <label htmlFor="password">Password:
                </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {errors.credential && <p className="errors">{errors.credential}</p>}
                <button disabled={disabled} className={signinButtonClass} type='submit' onClick={(e) => onSubmit(e)}>Login</button>
                <button id='demo-login' type='submit' onClick={(e) => onSubmitDemo(e)}>Demo User</button>
            </form>
        </div>
    )
};

export default LoginFormModal;
