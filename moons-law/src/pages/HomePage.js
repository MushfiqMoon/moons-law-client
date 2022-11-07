import React from 'react'
import Subscribe from '../components/common/Subscribe'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import Services from '../components/Services'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Overview />
            <Subscribe />
        </>
    )
}

export default HomePage