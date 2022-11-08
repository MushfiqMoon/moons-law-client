import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Subscribe from '../components/common/Subscribe'
import Hero from '../components/Hero'
import Overview from '../components/Overview'
import Services from '../components/Services'

const HomePage = () => {

    const services = useLoaderData();

    return (
        <>
            <Hero />
            <Services services={services} />
            <Overview services={services}/>
            <Subscribe />
        </>
    )
}

export default HomePage