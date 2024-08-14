import React from 'react'
import { SearchIcon } from '../assets/search-icon'
export const Search = () => {
    return (
        <div className='flex justify-between p-5 w-[673px] border-black/50  border-[2px]'>
            <h1>Поиск</h1>
            <SearchIcon />
        </div>
    )
}
