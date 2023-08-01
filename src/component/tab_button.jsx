// import { useTransition } from 'react';

function TabButton(props) { 
    
    if (props.isActive) {
        return <a href="#" className="font-sans font-semibold bg-sky-500 rounded mx-5 my-2 px-5 py-2 text-gray-950" >{props.children}</a>
    }
    
    return (
        <a href="#" onClick={() => {props.klick()}} className="font-sans font-semibold bg-sky-50 rounded mx-5 my-2 px-5 py-2 text-gray-950">
            {props.children}
        </a>
    )
}
export default TabButton