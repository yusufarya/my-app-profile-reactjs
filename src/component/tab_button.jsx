import { NavLink } from "react-router-dom";
import { BiSolidFileTxt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineHome, AiOutlineSlack, AiOutlineRocket } from "react-icons/ai";

function TabButton(props) {

    if (props.isActive) {
        return (
            <NavLink to={"/"} className="hover:border-b-2 border-grey-500 border-b-2 border-black dark:border-white rounded-lg lg:mx-3 md:mx-2 sm:mx-2 xs:mx-2 my-2 lg:px-2 md:px-2 mx-3 px-1 pt-2 inline-grid" >
                {props.children == 'Home' && <AiOutlineHome className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 dark:text-slate-100 hover:text-gray-500" />}
                {props.children == 'Articles' && <AiOutlineSlack className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 dark:text-slate-100 hover:text-gray-500" />}
                {props.children == 'Notes' && <BiSolidFileTxt className="rounded-lg lg:h-5 lg:w-5 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 dark:text-slate-100 hover:text-gray-500" />}
                {props.children == 'Projects' && <AiOutlineRocket className="rounded-lg lg:h-6 lg:w-6.5 md:h-6.5 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 dark:text-slate-100 hover:text-gray-500" />}
                {props.children == 'About' && <AiOutlineUser className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-950 dark:text-slate-100 hover:text-gray-500" />}
            </NavLink>
        )
    }

    return (
        <NavLink to={"/"} onClick={() => { props.click() }} className="hover:border-b-2 border-grey-300 rounded-xl lg:mx-3 md:mx-2 sm:mx-3 xs:mx-4 my-2 lg:px-2 md:px-1 mx-3 px-1 py-2 lg:text-base md:text-base sm:text-sm text-gray-500 transition ease-out delay-50 duration-100 inline-grid">
            {props.children == 'Home' && <AiOutlineHome className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Articles' && <AiOutlineSlack style={{transform: 'rotate(45deg)' }} className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Notes' && <BiSolidFileTxt className="rounded-lg lg:h-5 lg:w-5 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'Projects' && <AiOutlineRocket style={{transform: 'rotate(45deg)' }} className="rounded-lg lg:h-6.5 lg:w-6.5 md:h-6.5 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
            {props.children == 'About' && <AiOutlineUser className="rounded-lg lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-5 sm:w-5 h-7 w-7 text-gray-500 hover:text-gray-500" />}
        </NavLink>
    )
}

export default TabButton