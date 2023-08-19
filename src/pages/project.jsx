import React from "react"
import { LinkIcon } from '@heroicons/react/24/solid'
function Project() {
    return (
        <>
        <div className='lg:mx-4 md:mx-4 lg:px-5 md:px-4 sm:px-4 flex justify-center'>
            <div className='bg-grey-50 mx-1 px-1 lg:mx-5 lg:px-5 md:mx-4 md:px-4 sm:mx-5 sm:px-5 w-12/12 lg:w-3/4 md:w-3/4 sm:w-3/4'>

                <h1 className="text-left mt-1 ms-3 lg:mt-0 md:mt-0 sm:mt-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects </h1>
                
                <div className="flex justify-center mt-4">
                    <div className="grid grid-cols-1 justify-items-center w-full gap-1 mx-4 ">
                        <div className="w-full lg:w-12/12 md:w-12/12 sm:w-12/12 h-auto bg-white-50 ring-1 ring-cyan-800 rounded-md my-3 py-3 px-5"
                            data-aos="fade-up"
                            data-aos-offset="50"
                            data-aos-duration="500">
                            <h2 className="font-bold text-lg mb-2">Elearning</h2>
                            <p className="text-left font-sans">This project built with PHP CodeIgniter & javascript (jQuery)</p>
                            <p className="my-2 text-sm font-mono">
                                <a href="#" target="_blank" className="text-sky-800 ms-1">
                                    <LinkIcon className="h-5 w-5 inline" /> Watch Demo
                                </a>
                            </p>
                            <p className="my-2 text-sm font-mono">
                                <a href="https://github.com/yusufarya/elearning_2023.git" target="_blank" className="text-sky-800 ms-1">
                                    <LinkIcon className="h-5 w-5 inline" /> elearning_2023.git
                                </a>
                            </p>
                        </div>

                        <div className="w-full lg:w-12/12 md:w-12/12 sm:w-12/12 h-auto bg-white-50 ring-1 ring-cyan-800 rounded-md my-3 py-3 px-5"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-duration="800">
                            <h2 className="font-bold text-lg mb-2">Elearning</h2>
                            <p className="text-left font-sans">This project built with PHP CodeIgniter & javascript (jQuery)</p>
                            <p className="my-2 text-sm font-mono">
                                <a href="#" target="_blank" className="text-sky-800 ms-1">
                                    <LinkIcon className="h-5 w-5 inline" /> Watch Demo
                                </a>
                            </p>
                            <p className="my-2 text-sm font-mono">
                                <a href="https://github.com/yusufarya/elearning_2023.git" target="_blank" className="text-sky-800 ms-1">
                                    <LinkIcon className="h-5 w-5 inline" /> elearning_2023.git
                                </a>
                            </p>
                        </div>

                        <div className="w-full lg:w-12/12 md:w-12/12 sm:w-12/12 h-auto bg-white-50 ring-1 ring-cyan-800 rounded-md my-3 py-3 px-5"
                            data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-duration="1000">
                            lorem Duis pariatur sint reprehenderit elit commodo ea in incididunt mollit. Commodo mollit Lorem nisi nostrud in exercitation sint adipisicing. Ut proident minim do consequat anim ad. Labore eu in deserunt sit ea quis.
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Project