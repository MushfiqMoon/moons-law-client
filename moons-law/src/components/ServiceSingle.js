import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const ServiceSingle = () => {

    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    const {imageUrl, name, message, price} = service


    return (
        <>
            <div className="container mx-auto px-5 py-24">
                <section className="text-gray-600 body-font">
                    <div className="flex py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" src={imageUrl? imageUrl : 'https://dummyimage.com/720x600'} alt={name} />
                            <h3 className='text-xl text-primary font-medium title-font my-4'>Price Starts from - ${price}</h3>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
                            <p className="mb-8 leading-relaxed">{message}</p>
                        </div>
                    </div>
                </section>

                {
                    !user?.uid
                        ?
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Please <Link to='/login' className='text-primary'>login</Link> to add a review.</h2>
                        :
                        <section className="text-gray-600 body-font">
                            <div className="flex md:flex-row flex-col items-center">
                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <a className="inline-flex items-center mr-10">
                                            <img alt="blog" src={user?.photoURL ? user?.photoURL : 'https://placeimg.com/80/80/people'} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-gray-900">{user?.displayName}</span>
                                                <span className="mt-1 text-gray-500 text-sm">{user?.email}</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your Review</h1>
                                    <div className="flex w-full md:justify-start justify-center items-end">
                                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                                            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                                            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                }

                <section className="text-gray-600 body-font overflow-hidden">
                    <div className='py-24'>
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <a className="inline-flex items-center mr-10">
                                        {
                                            user?.uid
                                                ?
                                                <img alt="blog" src={user?.photoURL ? user?.photoURL : 'https://placeimg.com/80/80/people'} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                                :
                                                <img alt="blog" src='https://placeimg.com/80/80/people' className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        }

                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                                    <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                    <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ServiceSingle