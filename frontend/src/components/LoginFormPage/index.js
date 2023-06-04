import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { thunkSetUser } from '../../store/session';
import { useHistory, Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})

    if (sessionUser) return <Redirect to='/' />;

    const onSubmit = (e) => {
        e.preventDefault();

        setErrors({});
        dispatch(thunkSetUser({
            credential,
            password
        }))
            .catch(
                async (res) => {
                    const data= await res.json();
                    if (data && data.errors) setErrors(data.errors);
                }
            );

        // history.push('/')
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
                <button type='submit' onClick={(e) => onSubmit(e)}>Login</button>
            </form>
        </>
    )
};

export default LoginFormPage;
