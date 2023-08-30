import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles 
// import { NavLink } from "react-router-dom";
import mycv from "../../public/mycv.pdf"
// ..
AOS.init();

var sectionStyle = {
    margin: '0 auto',
    marginTop: `15px`,
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

    return ( 
        <> 
            <br />
            <div className="flex justify-center w-full mx-1 "
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out">
                    <div className='mx-0 lg:mt-0 md:mt-1 sm:mt-3 mt-5 w-full lg:w-2/3 md:w-2/3 flex '>
                        <div style={sectionStyle}>
                            <div className='p-2 mt-5 lg:mt-3 md:mt-2 sm:mt-2 justify-start '>
                                <br />
                                <h1 className='font-bold text-black mt-5 sticky top-600'>
                                    Hello!<span className='animate-[wiggle_1s_ease-in-out_infinite]'>👋</span> I'am Yusuf.
                                </h1>
                                <p className='text-justify text-black text-semibold text-xl py-3'> Web developer who is passionate about building user-centric solutions.</p>
                                <p className='flex justify-start'><a href={mycv} target='blank'> see my cv... </a></p>
                                {/* <p className='flex justify-start'><NavLink to={"/resume"}> See my resume </NavLink></p> */}
                            </div>
                        </div>
                    </div>
                <br />
            </div>
            <br />
                
            <div className="flex justify-center">
                <hr className="w-12/12 lg:w-2/3 h-19 py-5" />
            </div> 
        </> 
    );
}

export default Home