import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';

const Ship = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }
    const auth = useAuth();
    console.log(watch('example')) // watch input value by passing the name of it

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="your name" />
            {
                errors.name && <span>name is required</span>
            }<br />
            <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="your email" />
            {
                errors.email && <span>Email is required</span>
            }<br />
            <input name="AddressLine1" ref={register({ required: true })} placeholder="address line 1" />
            {errors.AddressLine1 && <span>Address is required</span>}<br />
            <input name="AddressLine2" placeholde="address line 2" ref={register} />
            {errors.AddressLine2}<br />
            <input name="city" ref={register({ required: true })} placeholder="city" />
            {errors.city && <span>city is required</span>}<br />
            <input name="country" ref={register({ required: true })} placeholder="country" />
            {errors.country && <span>country is required</span>}<br />
            <input type="submit" />
        </form>
    )
};

export default Ship;