function Structurefolder() {
    return (
        <>
        <div className='lg:mx-5 md:mx-4 sm:mx-4 lg:px-4 md:px-4 sm:px-4 mx-1 px-1 flex justify-center w-full'>
            <div className='bg-grey-50 mx-0 px-0 lg:mx-5 lg:px-5 md:mx-5 md:px-5 sm:mx-5 sm:px-5 w-full lg:w-3/4 md:w-3/4 sm:w-3/4'>

                <h1 className="text-left ms-3 mt-1 lg:mt-2 md:mt-2 sm:mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-3xl font-sans ">App Structure Folder</h1>
                <p className="ms-4 mt-3 text-gray-900 dark:text-slate-200">How I usually structure my app folder</p>
                        <br/>
                <div className="flex justify-center w-full">
                    <div className="m-2 rounded-md w-full bg-slate-600 p-4 text-white font-mono">
                        <p> - src</p>
                        <p className="mb-2 indent-5"> - app/pages/routes</p>
                        <p className="mb-2 indent-5"> - public</p>
                        <p className="mb-2 indent-5"> - lib</p>
                        <p className="mb-2 indent-9"> - assets</p>
                        <p className="mb-2 indent-12"> - img</p>
                        <p className="mb-2 indent-9"> - components</p>
                        <p className="mb-2 indent-9"> - constants</p>
                        <p className="mb-2 indent-9"> - layouts</p>
                        <p className="mb-2 indent-9"> - utils</p>
                    </div>
                    
                </div>


                <ul className="ms-3 mt-7 text-md text-gray-900 dark:text-slate-200">
                    <li className="font-semibold"> lib : &nbsp; </li>
                    <li className="ms-0"> <span className="bg-gray-600 px-2 text-white rounded-sm">lib</span> is where all the application building block lives. I like to separate building blocks from framework specific folders (app / pages).</li><br />
                    <li className="font-semibold"> assets : &nbsp; </li>
                    <li className="ms-0"> <span className="bg-gray-600 px-2 text-white rounded-sm">assets</span> is where I put my assets like images and other data files.</li><br />
                    <li className="font-semibold"> components : &nbsp; </li>
                    <li className="ms-0"> <span className="bg-gray-600 px-2 text-white rounded-sm">components</span> is where the UI building block lives. Sometimes I separate it further into shared and scope specific.</li><br />
                    <li className="font-semibold"> layouts : &nbsp; </li>
                    <li className="ms-0"> <span className="bg-gray-600 px-2 text-white rounded-sm">layouts</span> where I put the app root or reusable layouts / page wrappers.</li><br />
                    <li className="font-semibold"> utils : &nbsp; </li>
                    <li className="ms-0"> <span className="bg-gray-600 px-2 text-white rounded-sm">utils</span> where I put all reusable utilities.</li><br />
                </ul>

            </div>
        </div>
        </>
    )
}

export default Structurefolder;