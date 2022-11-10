import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const AddSErvice = () => {
     // Dynami Title
   useTitle('Add Service')

    const { user } = useContext(AuthContext);
    const stamp = new Date().getTime()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const service = {
            name: e.target.name.value,
            imageUrl: e.target.imageUrl.value,
            price: e.target.price.value,
            message: e.target.message.value,
            createdBy: user?.email,
            timeStamp: stamp
        }

        // sending the data to server

        fetch('https://b6a11-service-review-server-side-mushfiq-moon.vercel.app/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added')
                    form.reset()
                }
            })
    }


    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Service</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">From here you can add diffrent service</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="imageUrl" className="leading-7 text-sm text-gray-600">Image Url</label>
                                <input type="text" id="imageUrl" name="imageUrl" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
                                <input type="text" id="price" name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Service Details</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddSErvice