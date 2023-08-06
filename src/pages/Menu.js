import React from 'react'
import Category from '../components/menuComponents/Category'

function Menu() {
  return (
    <div className='w-full h-full lg:h-screen flex flex-col lg:flex-row justify-around lg:justify-center items-center gap-3 p-3 rounded'>
      <Category />
    </div>
  )
}

export default Menu
