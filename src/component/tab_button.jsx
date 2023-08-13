import { AiOutlineUser, AiOutlineHome, AiOutlineFile, AiOutlineSlack, AiOutlineRocket, AiOutlineContacts } from "react-icons/ai";

function TabButton(props) {

    if (props.isActive) {
        return (
            <a href="#" className="hover:border-b-2 border-grey-500 border-b-2 border-black rounded-lg lg:mx-3 md:mx-2 sm:mx-2 xs:mx-2 my-2 lg:px-2 md:px-2 mx-2 my-2 px-1 pt-2 inline-grid" >
                {props.children == 'Home' && <AiOutlineHome className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 hover:text-gray-500" />}
                {props.children == 'Projects' && <AiOutlineRocket style={{transform: 'rotate(45deg)'}} className="rounded-lg lg:h-6 lg:w-6.5 md:h-6.5 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 hover:text-gray-500" />}
                {props.children == 'Articles' && <AiOutlineSlack className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 hover:text-gray-500" />}
                {props.children == 'Notes' && <AiOutlineFile className="rounded-lg lg:h-5 lg:w-5 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 hover:text-gray-500" />}
                {props.children == 'Contact' && <AiOutlineContacts className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 hover:text-gray-500" />}
                {props.children == 'About' && <AiOutlineUser className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 hover:text-gray-500" />}
            </a>
        )
    }

    return (
        <a href="#" onClick={() => { props.click() }} className="hover:border-b-2 border-grey-300 rounded-xl lg:mx-3 md:mx-2 sm:mx-3 xs:mx-4 my-2 lg:px-2 md:px-1 mx-2 px-1 mx-2 py-2 lg:text-base md:text-base sm:text-sm text-gray-500 transition ease-out delay-50 duration-100 inline-grid">

            {/* {props.children == 'Home' && <AiOutlineHome className="pb-1 lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-4 sm:w-4 h-6 w-6.5 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Projects' && <AiOutlineRocket style={{transform: 'rotate(45deg)' }} className="pb-1 lg:h-6.5 lg:w-6.5 md:h-6 md:w-6 sm:h-4 sm:w-4 h-6 w-6.5 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Articles' && <AiOutlineSlack className="pb-1 lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-4 sm:w-4 h-6 w-6.5 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Notes' && <AiOutlineFile className="pb-1 lg:h-5.1 lg:w-5 md:h-6 md:w-6 sm:h-4 sm:w-4 h-5 w-5 text-gray-950 hover:text-gray-500" />}
            {props.children == 'Contact' && <AiOutlineContacts className="pb-1 lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-4 sm:w-4 h-6 w-6.5 text-gray-500 hover:text-gray-500" />}
            {props.children == 'About' && <AiOutlineUser className="pb-1 lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-4 sm:w-4 h-6 w-6.5 text-gray-500 hover:text-gray-500" />} */}
            {props.children == 'Home' && <AiOutlineHome className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Projects' && <AiOutlineRocket style={{transform: 'rotate(45deg)' }} className="rounded-lg lg:h-6.5 lg:w-6.5 md:h-6.5 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Articles' && <AiOutlineSlack style={{transform: 'rotate(45deg)' }} className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Notes' && <AiOutlineFile className="rounded-lg lg:h-5 lg:w-5 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Contact' && <AiOutlineContacts className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'About' && <AiOutlineUser className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
        </a>
    )
}

export default TabButton