// import { useTransition } from 'react';

function TabButton(props) {

    if (props.isActive) {
        return <a href="#" className="font-sans font-semibold bg-grey-50 scale-110 rounded mx-5 my-2 px-4 py-2 text-gray-950 hover:text-gray-500" >{props.children}</a>
    }

    return (
        <a href="#" onClick={() => { props.klick() }} className="font-sans backdrop-opacity-10 font-medium bg-sky-50 rounded mx-5 my-2 px-4 py-2 text-gray-500 transition ease-out delay-50 bg-blue-50 hover:-translate-y-1 hover:scale-110 hover:mt-3 hover:text-gray-500 duration-100 active:text-gray-950">
            {props.children}
        </a>
    )
}
export default TabButton