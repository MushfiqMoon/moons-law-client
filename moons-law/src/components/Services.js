import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-accent"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-accent font-medium title-font text-2xl mb-2 sm:mb-0">How Can I Help You</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Collaborations among attorneys in various disciplines produce innovative legal solutions for my clients. I work across offices and provide the capabilities necessary to generate great results for my clients.</p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://res.cloudinary.com/dxgr1p8tm/image/upload/v1667902115/moons-law/family-service_vxtvru.jpg" />
                        </div>
                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                        <button className="text-yellow-500 hover:text-primary  inline-flex items-center mt-3">Learn More
                            <svg fill="none" stroke="currentColor" strokeWidth="round" strokeLinejoin="round" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-accent border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-md"><Link to="/services">More Services</Link></button>
            </div>
        </section>
    )
}

export default Services