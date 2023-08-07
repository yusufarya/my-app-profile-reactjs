import React from 'react';
import componentData from '../component/component.json'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function About(props) {

    const dataProfile = componentData['profile']
    return (
        <>
            <div className='bg-grey-50 m-2 px-2'>
                <h1 className="text-center mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl" >About Me</h1>
                <p className="mt-3 mx-3 text-justify indent-8 text-sm"
                    data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out">I am the first of two brother and I am a Graduated at BSI university in the faculty of infomatics management, I understand several programming languages ​​such as php(CodeIgniter, Laravel), javascript(jQuery, ReactJs), databases like mysql and frameworks like codeigniter and laravel, using css from bootstrap. For example, I have several programs that I have created and you can see them in the project navigation.</p>
                <br />
                <div className="flex justify-left mt-2 mx-2"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out">
                    <table className="border-collapse border border-slate-400 table-auto w-full ">
                        <tbody>
                            {
                                dataProfile.map((items, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            <tr>
                                                <td className="text-xs border">&nbsp; Name </td>
                                                <td className="text-xs border">&nbsp;{items.name}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border">&nbsp; Email </td>
                                                <td className="text-xs border">&nbsp;{items.email}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border">&nbsp; Place Of Birth </td>
                                                <td className="text-xs border">&nbsp;{items.place_of_birth}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border">&nbsp; Date Of Birth </td>
                                                <td className="text-xs border">&nbsp;{items.date_of_birth}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-xs border">&nbsp; Address </td>
                                                <td className="text-xs border">&nbsp;{items.address}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default About