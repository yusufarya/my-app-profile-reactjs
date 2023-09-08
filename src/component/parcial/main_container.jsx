import React, { useEffect, useState, useTransition } from 'react';
import { NavLink, useLocation } from "react-router-dom";

import componentData from '../component.json'
import TabButton from '../tab_button.jsx';
import NavContent from '../nav_content.jsx';
import Footer from './footer.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Otherpages from '../other_pages.jsx';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { HiMoon, HiOutlineSun } from 'react-icons/hi';
// ..
AOS.init();

import nightIcon from '../../assets/img/logo/night.png'
import dayIcon from '../../assets/img/logo/day.png'

const dataNavbar = componentData['navbar']

function Main() {
    
    const location = useLocation()

    const [isFullscreen, setIsfullscreen] = useState(false);

    const [deviceType, setDeviceType] = useState("Desktop");

    useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
                navigator.userAgent
            )
        ) {
            setDeviceType("Mobile");
        } else {
            setDeviceType("Desktop");
        }
    }, []);

    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('home');

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab)
        })
    }
    
    function toggleFullScreen(elem) {
        // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
            if (elem.requestFullScreen) {
                elem.requestFullScreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullScreen) {
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            setIsfullscreen(true)
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setIsfullscreen(false)
        }
    }

    const [darkToggle, setDarkToggle] = React.useState(false)

    localStorage.setItem('theme', 'dark');
    
    if(darkToggle) {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    } else {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }

    return (
        <React.Fragment>
            {/* <Topbar/> */}
            {deviceType == 'Desktop' &&
                <div className="flex justify-center h-20 relative">

                    <div className="grid grid-rows-1 fixed top-0 w-full lg:w-2/3 md:w-2/3 sm:w-2/3 h-14 rounded-md my-1 lg:my-1 md:my-1 sm:my-1  dark:bg-black dark:text-white"
                        data-aos="zoom-in-down">
                        <div className="mx-4 my-4">
                            <NavLink to={"/"} className='font-semibold text-xs lg:text-lg md:text-base sm:text-sm text-gray-900 dark:text-slate-100'>
                                yusufarya.my.id
                            </NavLink>
                        </div>
                        <div className="flex justify-end">
                            {
                                dataNavbar.map((data, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            <TabButton isActive={tab === data['name']} click={() => selectTab(data['name'])}>
                                                {data['label']}
                                            </TabButton>
                                        </React.Fragment>
                                    )
                                })
                            }
                            <div className=' my-3 '>
                                <button onClick={() => setDarkToggle(!darkToggle)} className='bg-transparent'> 
                                    {darkToggle ? 
                                    <HiOutlineSun className='text-slate-100'/>
                                    :
                                    <HiMoon className='text-gray-900'/>
                                    }
                                </button> 
                            </div>
                        </div>
                    </div>

                </div>
            }

            {deviceType == 'Mobile' &&
                <>
                    <div className="flex justify-center h-16 relative">

                        <div className="grid grid-cols-2 fixed top-0 w-11/12 h-14 rounded-md my-0 bg-gradient-to-t from-slate-50 to-gray-50 z-10">
                            <div className="mx-4 my-4">
                                <h3 className='font-semibold text-xs lg:text-lg md:text-base sm:text-sm ms-4'>yusufarya.my.id</h3>
                            </div>
                            <div className='justify-end m-4' onClick={()=> toggleFullScreen(document.body)}>
                                {isFullscreen ? 
                                    <AiOutlineFullscreenExit className='float-right'/>
                                :
                                    <AiOutlineFullscreen className='float-right'/>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="fixed justify-center bottom-0 bg-gradient-to-b from-gray-50 to-white h-19 rounded-xl my-2 mx-2 z-10"
                        style={{width: `88%`}}>
                            <div className="flex justify-center w-full px-0">
                                {
                                    dataNavbar.map((items, idx) => {
                                        return (
                                            <React.Fragment key={idx}>
                                                <TabButton isActive={tab === items['name']} click={() => selectTab(items['name'])} deviceType={deviceType}>
                                                    {items['label']}
                                                </TabButton>
                                            </React.Fragment>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </>                    
            }

            <br />
            <div className='mt-15 lg:mt-2 md:mt-2 justify-center z-1'>
               
            
                {location.pathname.length > 1 ? 
                    <Otherpages pages={location.pathname}/>
                :
                    <NavContent tabName={tab} />
                }
            </div>

            <br />
            <Footer deviceType={deviceType} />

        </React.Fragment >
    )
}

export default Main