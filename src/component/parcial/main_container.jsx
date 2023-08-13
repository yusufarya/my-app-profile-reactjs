import React, { useEffect, useState, useTransition } from 'react';

import componentData from '../component.json'
import TabButton from '../tab_button.jsx';
import NavContent from '../nav_content.jsx';
import Footer from './footer.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const dataNavbar = componentData['navbar']

function Main() {

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

    return (
        <React.Fragment>
            {/* <Topbar/> */}
            {deviceType == 'Desktop' &&
                <div className="flex justify-center h-20 relative">

                    <div className="grid grid-rows-1 fixed top-0 drop-shadow-sm w-full lg:w-2/3 md:w-2/3 sm:w-2/3 h-14 rounded-md my-1 lg:my-1 md:my-1 sm:my-1 bg-gradient-to-t from-gray-50 to-white-50"
                        data-aos="zoom-in-down">
                        <div className="mx-4 my-4">
                            <h3 className='font-semibold text-xs lg:text-lg md:text-base sm:text-sm'>yusufarya.my.id</h3>
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
                        </div>
                    </div>

                </div>
            }

            {deviceType == 'Mobile' &&
                <>
                    <div className="flex justify-center h-16 relative">

                        <div className="grid grid-rows-1 fixed top-0 drop-shadow-sm w-full h-14 rounded-md my-0 bg-gradient-to-t from-gray-100 to-white-50"
                            data-aos="zoom-in-down">
                            <div className="mx-4 my-4">
                                <h3 className='font-semibold text-xs lg:text-lg md:text-base sm:text-sm ms-4'>yusufarya.my.id</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="fixed justify-center m-auto bottom-0 bg-gradient-to-b from-gray-50 to-gray-100 h-19 rounded-lg w-11/12 my-2 mx-2">
                            <div className="flex justify-center w-full px-3">
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
            <div className='mt-15 lg:mt-2 md:mt-2 flex justify-center'>
                <NavContent tabName={tab} />
            </div>

            <br />
            <hr className='mx-5'/>
            <Footer deviceType={deviceType} />

        </React.Fragment >
    )
}

export default Main