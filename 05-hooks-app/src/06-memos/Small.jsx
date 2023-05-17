import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Small dibujando ...')

    return (
        <small>{ value }</small>
    )
})
