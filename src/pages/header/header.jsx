import React from 'react'
import { Logo } from '../../assets/logo'
import { HeaderBtn } from '../../assets/header-btn'
import { Search } from '../../components/search'
import { Icons } from './icons'
export const Header = () => {
    return (
        <div className='flex justify-between container items-center'>
          <Logo/>
          <button className='bg-yellow-400 w-[160px] items-center flex gap-4 p-4'> <HeaderBtn/> Каталог</button>
          <Search />
          <Icons/>
        </div>
    )
}
