import React, { useContext, useEffect, useState } from 'react'
import MyReviewItem from '../components/MyReviewItem';
import { AuthContext } from '../contexts/AuthProvider';

const MyReviews = () => {

  const [myReviews, setMyReviews] = useState([])

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/reviews/?rmail=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setMyReviews(data)
      })
      .catch(err => console.error(err))

  }, [user?.email])


  return (
    <>

      <section className="my-review text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Reviews</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This is your Review Dashbord, from here you and Edti or Delete your existing Reviews</p>
          </div>
          <div className="w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100 rounded-tl rounded-bl">Service Name</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Your Review</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Email</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  myReviews.length
                    ?
                    myReviews.map(review =>

                      <MyReviewItem key={review?._id} review={review} />

                    )
                    :
                    <p className="text-center py-20 text-xl">You Dont add any review yet.. 😟
                    </p>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </>
  )
}

export default MyReviews