import React from 'react'
import home1 from "../assets/home-img.png"
export const Home = () => {
  return (
    <div className='items-center text-center w-[1179] h-[648] bg-slate-200'>
      <h1 className='font-bold text-[21px] items-center pt-[30px] mb-[64px]'>Вы пока не создали ни одного товара</h1>
      <img className='m-auto w-[383px]' src={home1} alt="img" />
      <button className='w-[253px]  p-[15px] font-extrabold text-white bg-green-500 rounded-md mb-[100px]'>Создать первый товар</button>
    </div>
  )
}


