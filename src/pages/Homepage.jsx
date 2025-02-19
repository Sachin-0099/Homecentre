import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ImageGrid from '../Components/ImageGrid'
import ImageGrid2 from '../Components/ImageGrid2'
import ServiceGrid from '../Components/ServiceGrid'
import Footer from '../Components/Footer'
import KitchenGrid from '../Components/KitchenGrid'
import Products from '../Components/Products'
import Discount from '../Components/Discount'
import SocialLinks from '../Components/SocialLinks'
import Subscription from '../Components/Subscription'
import ContactSection from '../Components/ContactSection'



const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ImageGrid/>
      <ImageGrid2/>
      <ServiceGrid/>
      <KitchenGrid/>
      <Products/>
      <Discount/>
      <SocialLinks/>
      <Subscription/>
      <ContactSection/>

      <Footer/>
   

    



    </div>
  )
}

export default Homepage
