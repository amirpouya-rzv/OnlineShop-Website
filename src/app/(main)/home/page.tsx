import { Banner } from '@/components/banner'
import React from 'react'
import NewProduct from './NewProduct'
import Tab from './Tab'
import Whattodo from './WhatToDo'
function Home() {
  return (
    <div className='felx flex-col p-10'>
      <Banner/>
      <Tab />
      <NewProduct/>
      <Whattodo/>
    </div>
  )
}

export default Home