import React, { useEffect, useState, useTransition } from 'react';

import componentData from '../component.json'
import TabButton from '../tab_button.jsx';
import NavContent from '../nav_content.jsx';

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
                <div className="flex justify-center h-24 relative">

                    <div className="grid grid-rows-1 fixed top-0 drop-shadow-md w-full lg:w-2/3 md:w-2/3 sm:w-2/3 h-14 rounded-md my-1 lg:my-4 md:my-4 sm:my-3 bg-gradient-to-r from-blue-50 to-cyan-50"
                        data-aos="zoom-in-down">
                        <div className="mx-4 my-4">
                            <h3 className='font-semibold text-xs lg:text-lg md:text-base sm:text-sm'>Yusuf Aryadilla</h3>
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
                <div className="relative flex justify-center">
                    <div className="fixed bottom-0 bg-gradient-to-r from-blue-50 to-cyan-50 h-20 rounded-md w-full my-1">
                        <div className="justify-center w-full mx-5 px-3">

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
            }

            <br />
            <NavContent tabName={tab} />

        </React.Fragment >
    )
}

export default Main