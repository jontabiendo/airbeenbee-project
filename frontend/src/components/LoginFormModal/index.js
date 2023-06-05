import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { thunkSetUser } from '../../store/session';
import { useModal } from '../../context/Modal';
import './LoginForm.css';

const LoginFormModal = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal()

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
                    if (data && data.errors) setErrors(data.errors);
                }
            );
    };

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={onSubmit}>
                <label for="credential">Username or Email:
                    <input type="text" name="credential" value={credential} onChange={(e) => setCredential(e.target.value)}></input>
                </label>
                <label for="password">Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                {errors.credential && <p className="errors">{errors.credential}</p>}
                <button id="login-button" type='submit' onClick={(e) => onSubmit(e)}>Login</button>
            </form>
        </>
    )
};

export default LoginFormModal;
