function Scrollbar() {
    return (
        <>
        <div className='lg:mx-5 md:mx-4 sm:mx-4 lg:px-4 md:px-4 sm:px-4 mx-1 px-1 flex justify-center w-full'>
            <div className='bg-grey-50 mx-0 px-0 lg:mx-5 lg:px-5 md:mx-5 md:px-5 sm:mx-5 sm:px-5 w-full lg:w-3/4 md:w-3/4 sm:w-3/4'>

                <h1 className="text-left ms-3 mt-1 lg:mt-2 md:mt-2 sm:mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-3xl font-sans ">Custom Scrollbar</h1>
                <p className="ms-4 mt-3 text-gray-900 dark:text-slate-200">Define your own custom scroll bar</p>
                        <br/>
                <div className="flex justify-center w-12/12">
                    <div className="m-2 rounded-md w-full bg-slate-600 p-4">
                        <span className="text-slate-400">/* width */</span>
                        <p className="text-green-500">::-webkit-scrollbar <span className="text-white"> &#123; </span></p> 
                            <p className="indent-6 text-red-400">width <span className="text-white"> : </span> &nbsp; <span className="text-indigo-400">10</span><span className="text-white">px ;</span></p>
                        <p className="text-white">&#125;</p>

                        <span className="text-slate-400">/* Track */</span>
                        <p className="text-green-500">::-webkit-scrollbar-track <span className="text-white"> &#123; </span></p> 
                            <p className="indent-6 text-red-400">background <span className="text-white"> : </span> &nbsp; <span className="text-cyan-400">#ececec</span><span className="text-white"> ;</span></p>
                        <p className="text-white">&#125;</p>

                        <span className="text-slate-400">/* Handle */</span>
                        <p className="text-green-500">::-webkit-scrollbar-thumb <span className="text-white"> &#123; </span></p> 
                            <p className="indent-6 text-red-400">border-radius <span className="text-white"> : </span> &nbsp; <span className="text-indigo-400">5</span><span className="text-white">px ;</span></p>
                            <p className="indent-6 text-red-400">background <span className="text-white"> : </span> &nbsp; <span className="text-cyan-400">#d6e5e6</span> <span className="text-white"> ;</span></p>
                        <p className="text-white">&#125;</p>

                        <span className="text-slate-400">/* Handle on hover */</span>
                        <p className="text-green-500">::-webkit-scrollbar-thumb:hover <span className="text-white"> &#123; </span></p> 
                            <p className="indent-6 text-red-400">background <span className="text-white"> : </span> &nbsp; <span className="text-cyan-400">#a5cbcd</span> <span className="text-white"> ;</span></p>
                        <p className="text-white">&#125;</p>
                    </div>
                    
                </div>

                <h2 className="mt-3 mx-2 text-3xl font-bold text-gray-900 dark:text-slate-200">Reference</h2>
                <ul className="ms-3 mt-3 text-md">
                    <li className="font-semibold text-gray-800 dark:text-slate-200"> &#9679; W3Schools : &nbsp; </li>
                    <li className="ms-4"> <a className="text-gray-500 break-words" href="https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp" target="_blank">www.w3schools.com/howto/howto_css_custom_scrollbar.asp</a></li>
                    <li className="font-semibold text-gray-800 dark:text-slate-200"> &#9679; MDN : &nbsp; </li>
                    <li className="ms-4"> <a className="text-gray-500 break-words" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar" target="_blank">developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar</a></li>
                </ul>

            </div>
        </div>
        </>
    )
}

export default Scrollbar;