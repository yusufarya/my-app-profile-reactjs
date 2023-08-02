// import { useTransition } from 'react';
import { AiOutlineUser, AiFillHome, AiFillFileText, AiOutlineRocket, AiOutlineContacts } from "react-icons/ai";

function TabButton(props) {
    
    if (props.isActive) {
        return (
            <a href="#" className="font-sans font-semibold bg-grey-50 scale-110 rounded lg:mx-4.5 md:mx-2 sm:mx-2 xs:mx-2 my-2 lg:px-4 md:px-2 py-2 lg:text-lg md:text-base sm:text-sm text-gray-950 hover:text-gray-500 inline-grid" >
                {props.children == 'Home' && <AiFillHome className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-950 hover:text-gray-500" /> }
                {props.children == 'About' && <AiOutlineUser className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-950 hover:text-gray-500"/> }
                {props.children == 'Articles' && <AiFillFileText className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-950 hover:text-gray-500"/> }
                {props.children == 'Projects' && <AiOutlineRocket className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-950 hover:text-gray-500"/> }
                {props.children == 'Contact' && <AiOutlineContacts className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-950 hover:text-gray-500"/> }
            </a>
        )
    }

    return (
        <a href="#" onClick={() => { props.klick() }} className="font-sans backdrop-opacity-10 font-medium rounded lg:mx-4.5 md:mx-2 sm:mx-3 xs:mx-4 my-2 lg:px-4 md:px-2 py-2 lg:text-base md:text-base sm:text-sm text-gray-500 transition ease-out delay-50 hover:-translate-y-1 hover:scale-110 hover:mt-3 hover:text-gray-500 duration-100 active:text-gray-950 inline-grid">

            {props.children == 'Home' && <AiFillHome className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-500 hover:text-gray-500"/> }
            {props.children == 'About' && <AiOutlineUser className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-500 hover:text-gray-500"/> }
            {props.children == 'Articles' && <AiFillFileText className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-500 hover:text-gray-500"/> }
            {props.children == 'Projects' && <AiOutlineRocket className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-500 hover:text-gray-500"/> }
            {props.children == 'Contact' && <AiOutlineContacts className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-5 sm:w-5 text-gray-500 hover:text-gray-500"/> }

        </a>
    )
}
export default TabButton