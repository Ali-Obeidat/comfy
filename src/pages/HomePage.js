import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import { useProductsContext } from '../context/products_context'
const HomePage = () => {
  // const data = useProductsContext()
  // console.log(data)
  return <main>
    <Hero />
    <FeaturedProducts />
    <Services />
    <Contact />
  </main>
}

export default HomePage 