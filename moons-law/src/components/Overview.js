import React from 'react'

const Overview = ({ services }) => {
    const totalService = services.length
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <h1 className="title-font font-medium text-2xl mb-2 text-accent">At A Glance</h1>
                        <div className="leading-relaxed">I am here to Manage your Law with Experience</div>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-4xl text-primary">127</h2>
                        <p className="leading-relaxed">Users</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-4xl text-primary">1.8K</h2>
                        <p className="leading-relaxed">Subscribes</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-4xl text-primary">35</h2>
                        <p className="leading-relaxed">Company</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-4xl text-primary">{totalService}</h2>
                        <p className="leading-relaxed">Services</p>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img className="object-cover object-center w-full h-full" src="/overview.jpg" alt="stats" />
                </div>
            </div>
        </section>
    )
}

export default Overview