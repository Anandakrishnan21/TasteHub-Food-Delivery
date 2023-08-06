import React from 'react'
import Slider from '../components/homeComponents/Slider'
import New from '../components/homeComponents/New'
import Offer from '../components/homeComponents/Offer'
import TopBurger from '../components/homeComponents/TopBurger'
import Footer from '../components/homeComponents/Footer'

function Home() {
  return (
    <div>
      <Slider />
      <div className="w-full flex flex-col justify-center items-center md:flex-row lg:flex-row md:flex-wrap ">
        <New />
      </div>
      <Offer />
      <div className="w-full flex flex-col justify-center items-center md:flex-row lg:flex-row md:flex-wrap">
        <TopBurger />
      </div>
      <Footer />
    </div>
  )
}

export default Home
