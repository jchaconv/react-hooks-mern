import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ characterName, locationName }) => {

    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        console.log(width, height);
        setBoxSize({ width, height });
    }, [locationName])


    return (
        <>
            <blockquote
                className='blockquote text-end'
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className='mb-2'>{characterName}</p>
                
                <footer className='blockquote-footer'>{locationName}</footer>
            
            </blockquote>

            <code>{ JSON.stringify( boxSize ) }</code>

        </>

    )
}
