import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { editSpotThunk, getSingleSpotThunk } from '../../store/spotsReducer';
import { useHistory, useParams } from 'react-router-dom';

import './SpotForm.css'

const EditSpotForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const spotEdit = useSelector((state) => state.spots.singleSpot)

    const [country, setCountry] = useState("")
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const [errors, setErrors] = useState({});
    const { spotId } = useParams();

    useEffect(() => {
        const onLoad = async () => {
            dispatch(getSingleSpotThunk(spotId))
                .then(res => {
                    setCountry(res.country);
                    setAddress(res.address);
                    setCity(res.city);
                    setState(res.state);
                    setDescription(res.description);
                    setTitle(res.name);
                    setPrice(res.price)
                })
        }
        onLoad()
    }, [dispatch])

    if (!spotEdit) return null    

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({});

        dispatch(editSpotThunk({
            id: spotId,
            country,
            address,
            city,
            state,
            description,
            title,
            price
        }))
            .then( async res => {
                if (res && res.errors) setErrors(res.errors)
                else history.push(`/spots/${res.id}`)
            })
    }
    return (
        <div className="create-spot-component">
            <h2>Update your Spot</h2>
            <h3>Where's your place located?</h3>
            <p>Guests will only get your exact address once they booked a reservation.</p>
            <form id='spot-form' onSubmit={handleSubmit}>
                <div className='create-spot-address'>
                    <label htmlFor='country'>Country </label>{errors.countr && <span className='errors'>{errors.country}</span>}
                    <input type='text' name='country' placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} required={true}></input>
                    <label htmlFor='address'>Street Address </label>{errors.address && <span className='errors'>{errors.address}</span>}
                    <input type='text' name='address' placeholder='Address'value={address} onChange={(e) => setAddress(e.target.value)} required={true}></input>
                    <label htmlFor='city'>City</label>
                    <input type='text' name='city' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} required={true}></input>
                    <label htmlFor='state'>State</label>
                    <input type='text' name='state' placeholder='STATE' value={state} onChange={(e) => setState(e.target.value)} required={true}></input>
                </div>
                <div className='create-spot-desc'>
                    <h3>Describe your place to guests</h3>
                    <p>Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
                    <textarea placeholder="Please write at least 30 characters" value={description} onChange={(e) => setDescription(e.target.value)} required={true}></textarea>
                </div>
                <div className='create-spot-title'>
                    <h3>Create a title for your spot</h3>
                    <p>Catch guests' attention with a spot title that highlights what makes your place special.</p>
                    <input type='text' placeholder='Name of your spot' value={title} onChange={(e) => setTitle(e.target.value)} required={true}></input>
                </div>
                <div className='create-spot-price'>
                    <h3>Set a base price for your spot</h3>
                    <p>Competitive pricing can help your listing stand out and rank higher in search results</p>
                    <span>$ </span> <input type='number' placeholder='Price per night (USD)' value={price} onChange={(e) => setPrice(e.target.value)} required={true}></input>
                </div>            
                <button type='submit'>Update Your Spot</button>
            </form>
        </div>
    )
}

export default EditSpotForm;
