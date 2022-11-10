import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const ServiceSingle = () => {

    const { user } = useContext(AuthContext);
    const { imageUrl, name, message, price, _id } = useLoaderData();
    const [reviews, setReviews] = useState([])

    const handleReview = e => {
        e.preventDefault()
        const form = e.target;

        const review = {
            serviceName: name,
            sid: _id,
            reviewMessage: e.target.review.value,
            reviewerName: user?.displayName,
            rmail: user?.email,
            reviewerphotoUrl: user?.photoURL,
        }

        // sending the data to server
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('moonslaw-token')}`
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("from post", data)
                if (data.acknowledged) {
                    toast.success('Review Added')
                    form.reset()
                    // return
                }
                const newReview = [review, ...reviews]
                setReviews(newReview)

            })
    }

    // Receiving service based review 

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/?sid=${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('moonslaw-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
            .catch(err => console.error(err))

    }, [_id])


    return (
        <>
            <div className="container mx-auto px-5 py-24">
                <section className="text-gray-600 body-font">
                    <div className="flex py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" src={imageUrl ? imageUrl : 'https://dummyimage.com/720x600'} alt={name} />
                            <h3 className='text-2xl text-primary font-medium title-font my-4'>Price Starts from - ${price}</h3>
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
                        <h2 className="text-3xl font-medium text-gray-900 title-font mb-2 py-10">Please <Link to='/login' className='text-primary'>login</Link> to add a review.</h2>
                        :
                        <section className="text-gray-600 body-font bg-gray-100 p-20">
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
                                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your Review</h1>
                                    <form onSubmit={handleReview} className="flex w-full md:justify-start justify-center items-end">
                                        <div className="relative mr-4 flex-grow">
                                            <input type="text" name="review" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                        <button type='submit' className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </section>

                }

                {
                    reviews.length
                        ?
                        reviews.map((review, index) =>

                            <section key={index} className="text-gray-600 body-font overflow-hidden">
                                <div className='py-12'>
                                    <div className="-my-8 divide-y-2 divide-gray-100">
                                        <div className="p-8 flex flex-wrap md:flex-nowrap">
                                            <div className="md:w-64 md:mb-0 mb-6 mr-20 flex-shrink-0 flex flex-col">
                                                <a className="inline-flex items-center">
                                                    <img alt="blog" src={review ? review?.reviewerphotoUrl : 'https://placeimg.com/80/80/people'} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                                    <span className="flex-grow flex flex-col pl-4">
                                                        <span className="title-font font-medium text-gray-900">{review ? review?.reviewerName : "Anonymous User"}</span>
                                                        <span className="mt-1 text-gray-500 text-sm">{review?.rmail}</span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="md:flex-grow">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036"><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path></svg>
                                                <p className="leading-relaxed">{review?.reviewMessage}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                        :
                        <p className="text-center py-20 text-xl">No Review Yet for this Service 😟
                        </p>
                }
            </div>
        </>
    )
}

export default ServiceSingle