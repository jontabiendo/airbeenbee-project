import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { thunkSignUp } from '../../store/session';
import {  Redirect } from 'react-router-dom';

import { useModal } from '../../context/Modal';
import './SignupForm.css'

const SignupFormModal = () => {
    const dispatch = useDispatch();
    const [username, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal();

    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) return <Redirect to='/' />;

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (password === confirmPassword) {
            setErrors({});
            return dispatch(thunkSignUp({
                username,
                firstName,
                lastName,
                email,
                password
            }))
                .then(closeModal)
                .catch(
                    async (res) => {
                        const data = await res.json();
                        if (data && data.errors) setErrors(data.errors);
                    }
                );

        };

        return setErrors({
            confirmPassword: "Confirm Password field must be the same as the Password field"
        })
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <label for='username'>Username:
                    <input type='text' name='username' value={username} onChange={(e) => setUserName(e.target.value)} /> 
                </label>
                {errors.username && <p className='errors'>{errors.username}</p>}
                <label for='firstName'>First Name:
                    <input type='text' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} /> 
                </label>
                {errors.firstName && <p className='errors'>{errors.firstName}</p>}
                <label for='lastName'>Last Name:
                    <input type='text' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} /> 
                </label>
                {errors.lastName && <p className='errors'>{errors.lastName}</p>}
                <label for='email'>Email:
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                </label>
                {errors.email && <p className='errors'>{errors.email}</p>}
                <label for='password'>Password:
                    <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                </label>
                {errors.password && <p className='errors'>{errors.password}</p>}
                <label for='confirmPassword'>Password:
                    <input type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
                </label>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                <button>Sign Up</button>
            </form>
        </>
    )
};

export default SignupFormModal;
