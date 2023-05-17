

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'teamorly',
        email: 'juliochacon@email.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        //console.log('useEffect!');
    }, []);
    
    useEffect(() => {
        //console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        //console.log('email changed!');
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr/>

            <input
                type='text'
                className='form-control'
                placeholder='username'
                name='username'
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type='email'
                className='form-control mt-2'
                placeholder='julio@google.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'teamorly') && <Message />
            }

        </>
    )
}
