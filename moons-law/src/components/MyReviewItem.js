import React, { useState, useEffect } from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewItem = ({ review }) => {

    const { sid, serviceName, reviewMessage, rmail } = review;

    const [serviceData, setServiceData] = useState({})

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/services/${sid}`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data)
            })
            .catch(err => console.error(err))


    }, [sid])

    return (
        <tr>
            <td className="px-4 py-3 text-primary font-bold">
                <div className='flex items-center'>
                <div className="avatar p-3">
                    <div className="mask w-24 h-12 border-4 border-accent">
                        <img src={serviceData ? serviceData?.imageUrl : "https://via.placeholder.com/230x115"} alt="Avatar Tailwind CSS Component" className=''/>
                    </div>
                </div>
                <Link to={`/services/${sid}`}>{serviceName}</Link>
                </div>  
            </td>
            <td className="px-4 py-3">{reviewMessage}</td>
            <td className="px-4 py-3">{rmail}</td>
            <td className="px-4 py-3">
                <div className="my-review-action flex">
                    <button className='flex items-center py-2 pr-5 text-primary'><FaRegEdit /> Edit</button>
                    <button className='flex items-center py-2 text-orange-600'><FaRegTrashAlt /> Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default MyReviewItem