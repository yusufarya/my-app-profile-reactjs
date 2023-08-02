import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function About(props) {
    console.log(props)
    return (
        <>
            <div data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                className='bg-grey-50 m-5 px-5'>
                <h1 className="text-center mt-5" >About Me</h1>
                <p className='mt-3 mx-3 text-justify indent-8 text-lg'>I am the first of two brother and I am a Graduated at BSI university in the faculty of infomatics management, I understand several programming languages ​​such as php(CodeIgniter, Laravel), javascript(jQuery, ReactJs), databases like mysql and frameworks like codeigniter and laravel, using css from bootstrap. For example, I have several programs that I have created and you can see them in the project navigation.</p>
            </div>
        </>
    )
}

export default About