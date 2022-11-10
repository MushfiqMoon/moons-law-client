import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import MiniHero from '../components/common/MiniHero'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServicesPage = () => {

  const services = useLoaderData();
  const latestServices = services.sort((a, b) => b.timeStamp - a.timeStamp);

  return (
    <>
      <MiniHero title="Services" />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-accent">How Can I Help You</h1>
              <div className="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Collaborations among attorneys in various disciplines produce innovative legal solutions for my clients. I work across offices and provide the capabilities necessary to generate great results for my clients.</p>
          </div>
          <div className="flex flex-wrap -m-4">

            {
              latestServices.map(data =>
                <div key={data?._id} className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <PhotoProvider>
                      <PhotoView src={data ? data?.imageUrl : 'https://dummyimage.com/720x400'}>
                        <img className="h-40 rounded w-full object-cover object-center mb-6 cursor-pointer" src={data ? data?.imageUrl : 'https://dummyimage.com/720x400'} />
                      </PhotoView>
                    </PhotoProvider>
                    <h3 className="tracking-widest text-accent text-lg font-medium title-font">${data?.price}</h3>
                    <h2 className="text-xl text-primary font-medium title-font mb-4">{data?.name}</h2>
                    <p className="leading-relaxed text-base">{data?.message.slice(0, 100)} ...</p>
                    <Link to={`/services/${data?._id}`} className="text-yellow-500 hover:text-primary  inline-flex items-center mt-3">Learn More
                      <svg fill="none" stroke="currentColor" strokeWidth="round" strokeLinejoin="round" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>)
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default AllServicesPage