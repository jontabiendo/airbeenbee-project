import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { thunkSetUser } from '../../store/session';
import { useModal } from '../../context/Modal';
import './LoginForm.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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

    return (
        <div className="login-form">
            <h1>Log In</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="credential">Username or Email:
                    <input type="text" name="credential" value={credential} onChange={(e) => setCredential(e.target.value)}></input>
                </label>
                <label htmlFor="password">Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                {errors.credential && <p className="errors">{errors.credential}</p>}
                <button id="login-button" type='submit' onClick={(e) => onSubmit(e)}>Login</button>
                <button id='demo-login' type='submit' onClick={(e) => onSubmitDemo(e)}>Log in as Demo User</button>
            </form>
        </div>
    )
};

export default LoginFormModal;
