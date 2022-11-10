import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const MyReviewEdit = () => {
    // Dynami Title
    useTitle('Edit Review')

    const [review, setReview] = useState({})
    const navigate = useNavigate();
    const router = useParams();
    const { id } = router;

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/reviews/${id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('moonslaw-token')}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setReview(data)
          })
          .catch(err => console.error(err))
    
      }, [id])


    // Update Review 
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const review = {
            reviewMessage: e.target.message.value
        }

        fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('moonslaw-token')}`
            },
            body: JSON.stringify(review)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Review Updated');
                    navigate("/reviews")
                } else {
                    toast.error("Update Failed")
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Edit Your Review</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="serviceTitle" className="leading-7 text-sm text-gray-600">Service Title</label>
                                <input readOnly defaultValue={review?.serviceName} type="text" id="serviceTitle" name="serviceTitle" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Your Name</label>
                                <input readOnly defaultValue={review?.reviewerName} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input readOnly defaultValue={review?.rmail} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Your Review</label>
                                <textarea defaultValue={review?.reviewMessage} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button type='submit' className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MyReviewEdit