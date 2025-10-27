import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Layout from './components/Layout'
import Customer from './components/Customer'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Layout />
      <Customer />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App