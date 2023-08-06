// import { useTransition } from 'react';
// import { AiOutlineUser, AiFillHome, AiFillFileText, AiOutlineRocket, AiOutlineContacts } from "react-icons/ai";
import { UserIcon, HomeIcon, DocumentTextIcon, RocketLaunchIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

function TabButton(props) {

    if (props.isActive) {
        return (
            <a href="#" className="hover:border-b-2 border-blue-300 border-b-2 border-blue-300 rounded-xl lg:mx-3 md:mx-2 sm:mx-2 xs:mx-2 my-2 lg:px-2 md:px-2 mx-2 px-1 pt-2 inline-grid" >
                {props.children == 'Home' && <HomeIcon className="rounded-lg lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-9 w-9 text-gray-950 hover:text-gray-500" />}
                {props.children == 'About' && <UserIcon className="pb-1 rounded-lg lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-9 w-9 text-gray-950 hover:text-gray-500" />}
                {props.children == 'Articles' && <DocumentTextIcon className="pb-1 rounded-lg lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-9 w-9 text-gray-950 hover:text-gray-500" />}
                {props.children == 'Projects' && <RocketLaunchIcon className="pb-1 rounded-lg lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-9 w-9 text-gray-950 hover:text-gray-500" />}
                {props.children == 'Contact' && <EnvelopeIcon className="pb-1 rounded-lg lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-9 w-9 text-gray-950 hover:text-gray-500" />}
            </a>
        )
    }

    return (
        <a href="#" onClick={() => { props.click() }} className="font-sans hover:border-b-2 border-blue-300 font-medium rounded-xl lg:mx-3 md:mx-2 sm:mx-3 xs:mx-4 my-2 lg:px-2 md:px-1 mx-2 px-1 py-2 lg:text-base md:text-base sm:text-sm text-gray-500 transition ease-out delay-50 duration-100 inline-grid">

            {props.children == 'Home' && <HomeIcon className="lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-8 w-9 text-gray-500 hover:text-gray-500" />}
            {props.children == 'About' && <UserIcon className="lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-8 w-9 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Articles' && <DocumentTextIcon className="lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-8 w-9 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Projects' && <RocketLaunchIcon className="lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-8 w-9 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Contact' && <EnvelopeIcon className="lg:h-5 lg:w-5 md:h-5 md:w-5 sm:h-4 sm:w-4 h-8 w-9 text-gray-500 hover:text-gray-500" />}

        </a>
    )
}

export default TabButton