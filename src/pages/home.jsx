import logoHeader from './../assets/img/header/robot1.jpg'
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

    const [loading, setLoading] = useState(false);

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
                    <div className="justify-center mx-3"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out">
                        <div style={sectionStyle}>
                            <div className='p-5 grid justify-items-center opacity-100 brightness-100 '>
                                <br />
                                <h1 className='font-bold text-black mt-5 sticky top-600'>
                                    Hello!<span className='animate-[wiggle_1s_ease-in-out_infinite]'>👋</span>I'am Yusuf.
                                </h1>
                                <p className='text-justify text-black text-semibold text-xl py-3'> Web developer who is passionate about building user-centric solutions.</p>
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