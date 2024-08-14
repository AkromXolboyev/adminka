import React from 'react'
import { UserIcon } from '../../assets/user-icon'
import { HeartIcon } from '../../assets/heart-icon'
import { BasketIcon } from '../../assets/basket-icon'
export const Icons = () => {
  return (
    <div className='flex gap-6 items-center justify-center'>
        <div className='p-6 m-auto w-[120px] '>
            <UserIcon/>
            <h1>Войти</h1>
        </div>
        <div className='p-6 m-auto w-[120px]'>
            <HeartIcon/>
            <h1>Избранное</h1>
        </div>
        <div className='p-6 m-auto w-[120px]'>
            <HeartIcon/>
            <h1>Корзина</h1>
        </div>
    </div>
  )
}
