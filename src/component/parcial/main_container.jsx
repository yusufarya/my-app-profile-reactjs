import React, { useState, useTransition } from 'react';

import componentData from '../component.json'
import TabButton from '../tab_button.jsx';
import NavContent from '../nav_content.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const dataNavbar = componentData['navbar']

function Main() {
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
            <div className="flex justify-center h-24 relative">

                <div className="grid grid-cols-3 gap-4 fixed top-0 drop-shadow-md w-2/3 h-14 rounded-md my-4 bg-gradient-to-r from-blue-50 to-cyan-50"
                    data-aos="zoom-in-up">
                    <div className="mx-4 my-4">
                        <h3 className='font-semibold'>Yusuf Aryadilla</h3>
                    </div>
                    <div className="col-span-2 flex justify-end  ">
                        {
                            dataNavbar.map((data, idx) => {
                                return (
                                    <React.Fragment key={idx}>
                                        <TabButton isActive={tab === data['name']} klick={() => selectTab(data['name'])}>
                                            {data['label']}
                                        </TabButton>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>

                {/* <div className="flex justify-center sticky top-1 w-5/6 h-14 rounded-md my-4 bg-gradient-to-r from-cyan-50 to-blue-50">
                    {
                        dataNavbar.map((data, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <TabButton isActive={tab === data['name']} klick={() => selectTab(data['name'])}>
                                        {data['label']}
                                    </TabButton>
                                </React.Fragment>
                            )
                        })
                    }
                </div> */}
            </div>

            <br />
            <NavContent tabName={tab} />

        </React.Fragment>
    )
}

export default Main