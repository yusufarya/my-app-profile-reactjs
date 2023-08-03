import logoHeader from './../assets/img/header/robot1.jpg'
// import hand_hi from './../assets/img/gif/hand_hi.gif'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles 
import { Fragment, useEffect, useState } from 'react';
import ContentLoader from "react-content-loader"
// ..
AOS.init();

var sectionStyle = {
    margin: '0 auto',
    marginTop: `10px`,
    width: "84.5%",
    height: "450px",
    display: "block",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    backgroundAttachment: 'fixed',
    // backgroundImage: `url(${logoHeader})`,
    opacity: `0.7`,
    filter: `brightness(.5)`,
};

function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {  
        return () => {
            setLoading(false)
        };
    }, []);

    return (
        <>
        {loading &&
            <ContentLoader 
                speed={2}
                width='100%'
                height={260}
                viewBox="0 0 780 400"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">

                <rect x="88" y="128" rx="3" ry="3" width="75%" height="56" /> 
                <rect x="0" y="218" rx="3" ry="3" width="100%" height="10" /> 
                <rect x="0" y="238" rx="3" ry="3" width="100%" height="10" />

            </ContentLoader>
        }
        {!loading &&
            <Fragment>
                <div className="justify-center mx-3">
                    {/* <img src={logoHeader} alt="logo_header" className='flex bg-cover bg-fixed bg-center' /> */}
                    <div style={sectionStyle}>
                        <div className='p-5 grid justify-items-center opacity-100 brightness-100 '>
                            <br />
                            <h1 className='font-bold text-black mt-5 sticky top-600'> 
                                Hello! I'am Yusuf.   
                            </h1>
                            <p className='text-justify text-black text-semibold text-xl'> Web developer who is passionate about building user-centric solutions.</p>
                            <p className='flex justify-start'> See More ...</p>
                        </div>
                    </div>
                    <br />
                </div>
            </Fragment>
        }

        </>
    );
}

export default Home