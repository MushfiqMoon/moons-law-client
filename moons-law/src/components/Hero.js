import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("slider.jpg")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="container">
                <div className="text-white py-52">
                    <div className="max-w-lg px-5">
                        <h1 className="mb-5 text-5xl font-bold">I
                            Provide Professional
                            Legal Solution</h1>
                        <p className="mb-5">Law is commonly Understood as a System of rules that are Created
                            and Enforced through social or Government</p>
                        <Link to='/services' className="btn btn-primary text-accent">Explore More</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero