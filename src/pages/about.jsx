import React from 'react';
import componentData from '../component/component.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiTwotoneMail } from "react-icons/ai";


function About() {

    const dataProfile = componentData['profile']
    return (
        <>
        <div className='flex justify-center w-full lg:mx-0 md:mx-0 sm:mx-0 mx-0 px-0'>
            <div className='bg-grey-50 mx-1 px-1 lg:mx-0 lg:px-0 md:mx-1 md:px-1 sm:mx-5 sm:px-5 w-full lg:w-2/3 md:w-2/3 sm:w-2/3'>
                <h1 className="text-left ms-3 mt-1 lg:mt-2 md:mt-2 sm:mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans ">Yusuf Aryadilla</h1>
                <br/>
                <h1 className="text-left ms-3 mt-1 lg:mt-4 md:mt-3 sm:mt-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl md:text-3xl sm:text-4xl font-sans ">👋 Hi, everyone how are you ?</h1>
                <br/>
                <p className="mt-3 mx-3 text-base font-sans "
                    data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out">I'm Yusuf, an experienced web Developer with a strong passion for creating business-centric technology solutions.</p>
                <p className="mt-3 mx-3 text-base font-sans "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out">I am the first of two brother and I am a Graduated at BSI university in the faculty of infomatics management, I understand several programming languages ​​such as php(CodeIgniter, Laravel), javascript(jQuery, ReactJs, NodeJs), databases like mysql and frameworks like codeigniter and laravel, using css from bootstrap or Tailwind. For example, I have several programs that I have created and you can see them in the project navigation.</p>
                <p className="mt-3 mx-3 text-base font-sans "
                    data-aos="fade-up"
                    data-aos-offset="120"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">My expertise is in working with technology especially in software development, including PHP (CodeIgniter, Laravel) and Javascript (ReactJs, NodeJs). Throughout my career, I have honed my skills in developing technology products that delight users and drive business success.</p>
                <br />
               
                <div className="social-media mx-2 pt-5 flex">
                    <a href="" className='text-gray-800 mx-2'><AiFillGithub className='h-4 w-4 lg:h-6 lg:w-6 md:h-5 md:w-5' /></a>
                    <a href="" className='text-gray-800 mx-2'><AiFillLinkedin className='h-4 w-4 lg:h-6 lg:w-6 md:h-5 md:w-5' /></a>
                    <a href="" className='text-gray-800 mx-2'><AiOutlineInstagram className='h-4 w-4 lg:h-6 lg:w-6 md:h-5 md:w-5' /></a>
                    <a href="" className='text-gray-800 mx-2'><AiOutlineTwitter className='h-4 w-4 lg:h-6 lg:w-6 md:h-5 md:w-5' /></a>
                    <a href="" className='text-gray-800 mx-2'><AiTwotoneMail className='h-4 w-4 lg:h-6 lg:w-6 md:h-5 md:w-5' /></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default About