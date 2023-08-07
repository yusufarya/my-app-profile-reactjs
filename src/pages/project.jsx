import React from "react"
import { LinkIcon } from '@heroicons/react/24/solid'
function Project() {
    return (
        <>
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project </h1>

            <div className="flex justify-center mt-4">
                <div className="grid grid-cols-1 justify-items-center w-full lg:w-8/12 md:w-8/12 gap-1 mx-3 px-0">
                    <div className="w-full lg:w-11/12 md:w-11/12 sm:w-11/12 h-auto bg-white-50 ring-2 ring-blue-100 rounded-md my-3 py-3 px-5"
                        data-aos="fade-up"
                        data-aos-offset="50"
                        data-aos-duration="500">
                        <h2 className="font-bold text-lg mb-2">Elearning</h2>
                        <p className="text-justify indent-5 font-mono">This project built with PHP CodeIgniter & javascript (jQuery)</p>
                        <p className="my-2 text-sm font-mono">
                            <a href="#" target="_blank">
                                <LinkIcon className="h-5 w-5 inline" /> Watch Demo
                            </a>
                        </p>
                        <p className="my-2 text-sm font-mono">
                            <a href="https://github.com/yusufarya/elearning_2023.git" target="_blank">
                                <LinkIcon className="h-5 w-5 inline" /> elearning_2023.git
                            </a>
                        </p>
                    </div>
                    <div className="w-full lg:w-11/12 md:w-11/12 sm:w-11/12 h-auto bg-white-50 ring-2 ring-blue-100 rounded-md my-3 py-3 px-5"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-duration="800">
                        <h2 className="font-bold text-lg mb-2">Elearning</h2>
                        <p className="text-justify indent-5 font-mono">This project built with PHP CodeIgniter & javascript (jQuery)</p>
                        <p className="my-2 text-sm font-mono">
                            <a href="#" target="_blank">
                                <LinkIcon className="h-5 w-5 inline" /> Watch Demo
                            </a>
                        </p>
                        <p className="my-2 text-sm font-mono">
                            <a href="https://github.com/yusufarya/elearning_2023.git" target="_blank">
                                <LinkIcon className="h-5 w-5 inline" /> elearning_2023.git
                            </a>
                        </p>
                    </div>
                    <div className="w-full lg:w-11/12 md:w-11/12 sm:w-11/12 h-auto bg-white-50 ring-2 ring-blue-100 rounded-md my-3 py-3 px-5"
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="1000">
                        lorem Duis pariatur sint reprehenderit elit commodo ea in incididunt mollit. Commodo mollit Lorem nisi nostrud in exercitation sint adipisicing. Ut proident minim do consequat anim ad. Labore eu in deserunt sit ea quis.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project