import React from 'react'
import MiniHero from '../components/common/MiniHero'

const Blog = () => {
    return (
        <>
            <MiniHero title="Blogs" />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="p-12 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest">Assignment-11</span>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Difference between SQL and NoSQL</h2>
                        <p className="leading-relaxed mb-8">SQL is a decades-old method for accessing relational databases, and most who work with databases are familiar with it. As unstructured data, amounts of storage and processing power and types of analytics have changed over the years, however, we’ve seen different database technologies become available that are a better fit for newer types of use cases. These databases are commonly called NoSQL.
                            <br />
                            SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data.</p>
                        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a className="text-yellow-500 inline-flex items-center">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.5K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>8
                            </span>
                        </div>
                    </div>
                    <div className="p-12 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest">Assignment-11</span>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">What is JWT, and how does it work?</h2>
                        <div className="leading-relaxed mb-8">
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                            <h3 className='text-xl py-4'>How JWT Works</h3>
                            <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                                <br />
                                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                        </div>
                        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a className="text-yellow-500 inline-flex items-center">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>3
                            </span>
                        </div>
                    </div>
                    <div className="p-12 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest">Assignment-11</span>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">What is the difference between javascript and NodeJS?</h2>
                        <div className="tbl-btm-line leading-relaxed mb-8">
                            <p>Please see the detailed comparison between Javascript and Node Js</p>
                            <br />
                            <table className='table-auto w-full text-left whitespace-no-wrap'>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100 rounded-tl rounded-bl"><strong>JavaScript<br /></strong></td>
                                        <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100"><strong>Node.js<br /></strong></td>
                                    </tr>
                                    <tr>
                                        <td >It is an accessible, bridge, parsed, lightweight, reactive, and web apps
                                            programming language.</td>
                                        <td >It's a bridge, open-source Js runtime environment for executing Js on the server.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >It's a programming language, after all. Any browser with a competent browser
                                            engine will operate.</td>
                                        <td >It's a JavaScript translator and environment that includes some valuable
                                            libraries for JavaScript programming.</td>
                                    </tr>
                                    <tr>
                                        <td >It's most commonly used on client-side servers.</td>
                                        <td >It's mainly popular on the server-side.</td>
                                    </tr>
                                    <tr>
                                        <td >The node community does not care about JavaScript.</td>
                                        <td >All node projects represent the JavaScript community.</td>
                                    </tr>
                                    <tr>
                                        <td >It's made for creating network-centric apps.</td>
                                        <td >It's made for real-time data-intensive apps that run on multiple platforms.</td>
                                    </tr>
                                    <tr>
                                        <td >It's a new release of the ECMA script that works on the C++-based V8 engine.</td>
                                        <td >C++, C, and JavaScript are used.</td>
                                    </tr>
                                    <tr>
                                        <td >TypedJS, RamdaJS, and other JavaScript frameworks are examples.</td>
                                        <td >Nodejs modules include Lodash and Express. All of these modules must be imported
                                            from npm.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a className="text-yellow-500 inline-flex items-center">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>2K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>16
                            </span>
                        </div>
                    </div>
                    <div className="p-12 flex flex-col items-start">
                        <span className="inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest">Assignment-11</span>
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">How does NodeJS handle multiple requests at the same time?</h2>
                        <div className="leading-relaxed mb-8">
                            Node is a runtime, and no it is not single threaded, nor is is multithreaded. Confusing? Yes, but true. JavaScript is single threaded. The Node runtime is not. By default, Node only executes one JavaScript instance unless instructed to use more.
                            <br />
                            How can this be?
                            <br />

                            Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.
                            <br />

                            There’s an important caveat to this: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time.
                            <br />

                            Additional Threads
                            <br />

                            Node introduced worker threads in Node 13. These run on a separate JavaScript thread. In larger scale Node applications, developers tend to create one worker per CPU to maximize parallel processing capacity.
                            <br />

                            “Pseudo Threads”
                            <br />

                            Prior to worker threads, Node had clusters (these still exist). Clusters mimic what workers do by taking advantage of multiple CPU cores by running multiple Node processes that share server ports. These were an effective way of scaling and existed before worker threads.
                            <br />

                            —
                            <br />

                            By default, Node is single threaded. However; programmers can spawn web workers or leverage clustering to utilize more threads/CPU cores.
                        </div>
                        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a className="text-yellow-500 inline-flex items-center">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>12K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>52
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blog