import React, { Fragment, useState, useTransition } from 'react';

import componentData from '../component.json'
import TabButton from '../tab_button.jsx';
import Home from '../../pages/home.jsx';
import About from "../../pages/about.jsx";
import Project from '../../pages/project.jsx';
import Articles from '../../pages/articles.jsx';
import Contact from '../../pages/contact.jsx';

function Main() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('home');

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab)
        })
    }
    const dataNavbar = componentData['navbar']
    const titleSection = componentData['title-section']

    return (
        <React.Fragment>
            {/* <Topbar/> */}
            <div className="flex justify-center h-24 relative">
                <div className="flex justify-center sticky top-1 w-1/2 h-14 rounded-md my-4 bg-gradient-to-r from-cyan-50 to-blue-50">
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
            {/* <Header />  */}
            <br />

            {tab === 'home' && <Home />}
            {tab === 'about' && <About />}
            {tab === 'articles' && <Articles />}
            {tab === 'projects' && <Project />}
            {tab === 'contact' && <Contact />}
        </React.Fragment>
    )
}

export default Main