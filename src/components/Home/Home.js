import React from 'react'
import Hero from './Hero'
import CardComp from '../CardComp'
import ModalComp from '../ModalComp'
import Frequently from '../Frequently'
import About from './About'
import PricingCard from './PricingCard'
import FormComponent from './Form'
const Home = () => {
    return (
        <div className="main">
            <Hero />
            <About />
            <CardComp />
            <ModalComp />
            <Frequently />
            <PricingCard />
            <FormComponent />
        </div>
    )
}

export default Home
