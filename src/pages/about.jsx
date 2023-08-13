import React from 'react';
import componentData from '../component/component.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiTwotoneMail } from "react-icons/ai";


function About(props) {

    const dataProfile = componentData['profile']
    return (
        <>
        <div className='lg:mx-5 lg:mx-4 lg:px-4 md:px-4 flex justify-center'>
            <div className='bg-grey-50 mx-1 px-1 lg:mx-5 lg:px-5 md:mx-5 md:px-5 sm:mx-5 sm:px-5 w-12/12 lg:w-3/4 md:w-3/4 sm:w-3/4'>
                <h1 className="text-left ms-3 mt-1 lg:mt-2 md:mt-2 sm:mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans ">Yusuf Aryadilla</h1>
                <br/>
                <h1 className="text-left ms-3 mt-1 lg:mt-4 md:mt-3 sm:mt-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-4xl md:text-3xl sm:text-4xl font-sans ">👋 Hi, everyone how are you ?</h1>
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
                <br />
                <div className="flex justify-left mt-2 mx-2"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out">
                    <table className="table-auto w-full ">
                        <tbody>
                            {
                                dataProfile.map((items, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            <tr>
                                                <td className="text-xs border w-2/6">&nbsp; Name </td>
                                                <td className="text-xs border">&nbsp;{items.name}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border w-2/6">&nbsp; Gender </td>
                                                <td className="text-xs border">&nbsp;{items.gender}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border w-2/6">&nbsp; Telp </td>
                                                <td className="text-xs border">&nbsp;{items.telp}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border w-2/6">&nbsp; Email </td>
                                                <td className="text-xs border">&nbsp;{items.email}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border w-2/6">&nbsp; Place Of Birth </td>
                                                <td className="text-xs border">&nbsp;{items.place_of_birth}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border w-2/6">&nbsp; Date Of Birth </td>
                                                <td className="text-xs border">&nbsp;{items.date_of_birth}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border w-2/6">&nbsp; Address </td>
                                                <td className="text-xs border">&nbsp;{items.address}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
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