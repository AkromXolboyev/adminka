import React from 'react'

export const HomePage = ({ name, title, des, phone }) => {
    return (
        <div className='container flex justify-end font-bold gap-[25px] border-rose-100 border-[2px]'>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{des}</p>
            <strong>{phone}</strong>
        </div>
    )
}
