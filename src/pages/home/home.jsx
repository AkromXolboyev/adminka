import React from 'react'
import { HomePage } from '../homepage/home-page';
import { Header } from '../header/header';
import { Slider } from '../slider';
import Catalog from '../catalog/catalog';
export const Home = () => {
  return (
    <div>
      <HomePage phone={"+998 90 253 77 53"} des={"Пункты выдачи"} name={"Пункты выдачи"} title={"Доставка и оплата"} />
      <Header />
      <Slider/>
      <Catalog/>
    </div>
  )
}
