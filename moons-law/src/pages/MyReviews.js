import React, { useContext, useEffect, useState } from 'react'
import MyReviewItem from '../components/MyReviewItem';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const MyReviews = () => {
   // Dynami Title
   useTitle('My Review')

  const [myReviews, setMyReviews] = useState([])
  const [refresh, setRefresh] = useState(false)

  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/reviews/?rmail=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('moonslaw-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setMyReviews(data)
      })
      .catch(err => console.error(err))

  }, [user?.email, refresh])

  // Action Delete
  const handleDelete = id => {

    // sending the data to server
    fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/reviews/${id}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('moonslaw-token')}`
      },

    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delete", data)
        if (data.acknowledged) {
          toast.success('Review Deleted')
        }
        setRefresh(!refresh)
      })
  }


  return (
    <>

      <section className="tbl-btm-line text-gray-600 body-font">
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
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">User</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  myReviews.length
                    ?
                    myReviews.map(review =>

                      <MyReviewItem key={review?._id} review={review} handleDelete={handleDelete} />

                    )
                    :
                    <tr>
                      <td colSpan="4">
                        <div className="text-center py-20 text-xl">You Dont add any review yet.. 😟 Please <Link to="/services" className='text-primary'>Add</Link>
                        </div>
                      </td>
                    </tr>
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