import logoHeader from './../assets/img/header/robot1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
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
    return (
        <>
            <div className="justify-center mx-3"
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-duration="700"
                data-aos-easing="ease-in-out">
                {/* <img src={logoHeader} alt="logo_header" className='flex bg-cover bg-fixed bg-center' /> */}
                <div style={sectionStyle}>
                    <div className='p-5 grid justify-items-center opacity-100 brightness-100 '>
                        <br />
                        <h1 className='font-bold text-black mt-5 sticky top-600'> Hello! I'am Yusuf.</h1>
                        <p className='text-justify text-black text-semibold text-xl'> Web developer who is passionate about building user-centric solutions.</p>
                        <p className='flex justify-start'> See More ...</p>
                    </div>
                </div>
                <br />
            </div>
        </>
    );
}

export default Home