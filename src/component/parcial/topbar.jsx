import React, { useState, useTransition } from 'react';
import componentData from '../component.json' 
import TabButton from '../tab_button.jsx';

function Topbar (props) {
    
    const [isPending , startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab)
        })
    }

    const dataNavbar = componentData['navbar']
    
    return (
        <> 
        <div className="flex justify-center ">
            <div className="flex justify-center ring-2 ring-blue-50 w-1/2 h-14 rounded-md my-4 bg-gradient-to-r from-cyan-50 to-blue-50">
            {
                dataNavbar.map((data, idx) => {
                    return(
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
        </> 
    )
} 

export default Topbar;
