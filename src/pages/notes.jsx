import { NavLink } from "react-router-dom";

function Notes() {
    return( 
        <>
        <div className='flex justify-center w-full lg:mx-0 md:mx-0 sm:mx-0 mx-0 px-0'>
            <div className='bg-grey-50 mx-1 px-1 lg:mx-0 lg:px-0 md:mx-1 md:px-1 sm:mx-5 sm:px-5 w-full lg:w-2/3 md:w-2/3 sm:w-2/3'>

                <h1 className="text-left ms-3 mt-1 lg:mt-2 md:mt-2 sm:mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl Font-PublicSans-Bold">Notes</h1>
                <p className="mt-3 mx-3 text-left text-sm text-gray-800 Font-PublicSans-Regular"
                    data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out ">A collection of my personal brief notes, tips, short form posts, or snippets I use throughout my projects.</p>

                <div className="mt-4 h-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-10 mx-3 px-0">

                        <div className="w-full h-auto"
                            data-aos="fade-up"
                            data-aos-offset="50"
                            data-aos-duration="500">
                            <NavLink to={"/scrollbar"} className="text-slate-500">
                                <div className="w-full h-32 ring-1 ring-cyan-900 rounded-md drop-shadow-sm hover:scale-105 transition ease-in duration-200 cursor-pointer object-cover overflow-auto">
                                    <h5 className="mx-4 mt-3 font-semibold text-gray-950 text-1xl ">Custom Scrollbar</h5>
                                    <p className="text-sm mx-4 mt-2 text-gray-600 Font-PublicSans-Regular">Define your own scrollbar</p>
                                    <div className="flex mx-3">
                                        <div className="px-2 py-0 rounded-lg mx-2 mt-3 w-10 text-sm ring-1 ring-cyan-900 text-cyan-900">
                                            css
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div> 

                        <div className="w-full h-auto"
                            data-aos="fade-up"
                            data-aos-offset="80"
                            data-aos-duration="700">
                            <NavLink to={"/structure-folder"} className="text-slate-500">
                                <div className="w-full h-32 ring-1 ring-cyan-900 rounded-md drop-shadow-sm hover:scale-105 transition ease-in duration-200 cursor-pointer object-cover overflow-auto">
                                    <h5 className="mx-4 mt-3 font-semibold text-gray-950 text-1xl">App Folder Structure</h5>
                                    <p className="text-sm mx-4 mt-2 text-gray-600 Font-PublicSans-Regular">How i usually structure my app folder</p>
                                    <div className="flex mx-3">
                                        <div className="px-2 py-0 rounded-lg mx-2 mt-3 w-11 text-sm ring-1 ring-cyan-900 text-cyan-900">
                                            app
                                        </div>
                                        <div className="px-2 py-0 rounded-lg mx-2 mt-3 w-18 text-sm ring-1 ring-cyan-900 text-cyan-900">
                                            foldering
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div> 
                        <div className="w-full h-auto"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-duration="900">
                            <div className="w-full h-32 ring-1 ring-cyan-900 rounded-md drop-shadow-sm hover:scale-105 transition ease-in duration-200 cursor-pointer object-cover overflow-auto">
                                <h5 className="mx-4 mt-3 font-semibold text-gray-950 text-1xl">How to learn programming</h5>
                                <p className="text-sm mx-4 mt-2 text-gray-600 Font-PublicSans-Regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minima eligendi in error ex laudantium consequuntur odio quae</p>
                                
                            </div>
                        </div> 
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
        </>
    )
}

export default Notes