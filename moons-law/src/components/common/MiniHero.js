import React from 'react'
import background  from '../../assets/mini-hero.jpg'

const MiniHero = ({ title }) => {
    return (
        <div className="strokeLinejoin" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="container">
                <div className="text-white py-40">
                    <div className="max-w-lg px-5">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiniHero