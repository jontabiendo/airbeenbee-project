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

    let disabled = true
    if (firstName.length && lastName.length && email.length && username.length >= 4 && password.length >= 4) disabled = false
    else disabled = true
    
    const signupButtonClassName = 'signup-button' + (disabled ? " disabled" : "")

    return (
        <div className='signup-form'>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                {errors.firstName && <p className='errors'>{errors.firstName}</p>}
                {errors.lastName && <p className='errors'>{errors.lastName}</p>}
                {errors.email && <p className='errors'>{errors.email}</p>}
                {errors.username && <p className='errors'>{errors.username}</p>}
                {errors.password && <p className='errors'>{errors.password}</p>}
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                <div className='signup-section'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} /> 
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className='signup-section'>
                    <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                    <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' value={username} onChange={(e) => setUserName(e.target.value)} /> 
                </div>
                <div className='signup-section'>
                    <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                    <label htmlFor='confirmPassword'>Confirm Password:</label>
                        <input type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
                </div>
                <button disabled={disabled} className={signupButtonClassName}>Sign Up</button>
            </form>
        </div>
    )
};

export default SignupFormModal;
