import bg1 from "../assets/img/1.jpg"
import bg2 from "../assets/img/2.jpg"
import bg3 from "../assets/img/3.jpg"
import bg4 from "../assets/img/4.jpg"

var card1 = {
    width: '100%',
    height: '125px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    backgroundImage: `url(${bg1})`,
    opacity: `0.8`,
    filter: `brightness(.5)`,
};

var card2 = {
    width: '100%',
    height: '125px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    backgroundImage: `url(${bg2})`,
    opacity: `0.8`,
    filter: `brightness(.5)`,
};

var card3 = {
    width: '100%',
    height: '125px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    backgroundImage: `url(${bg3})`,
    opacity: `0.8`,
    filter: `brightness(.5)`,
};

var card4 = {
    width: '100%',
    height: '125px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    backgroundImage: `url(${bg4})`,
    opacity: `0.8`,
    filter: `brightness(.5)`,
};

function Articles() {
    return( 
        <>
        <div className='flex justify-center w-full lg:mx-0 md:mx-0 sm:mx-0 mx-0 px-0'>
            <div className='bg-grey-50 mx-1 px-1 lg:mx-0 lg:px-0 md:mx-1 md:px-1 sm:mx-5 sm:px-5 w-full lg:w-2/3 md:w-2/3 sm:w-2/3'>

                <h1 className="text-left ms-3 mt-1 lg:mt-2 md:mt-2 sm:mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans">Articles</h1>
                <p className="mt-3 mx-3 text-left text-sm"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out">This page in progress development</p>

                <div className="mt-4 h-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-10 mx-3 px-0">
                        <div className="w-full h-auto"
                            data-aos="fade-up"
                            data-aos-offset="0"
                            data-aos-duration="300">
                            <div style={card1} className="hover:scale-105 transition ease-in duration-200 cursor-pointer object-cover"></div>
                            <h5 className="font-bold text-gray mt-2 text-2xl">Recap 2022</h5>
                        </div> 
                        <div className="w-full h-auto"
                            data-aos="fade-up"
                            data-aos-offset="50"
                            data-aos-duration="500">
                            <div style={card4} className="hover:scale-105 transition ease-in duration-200 cursor-pointer object-cover"></div>
                            <h5 className="font-bold text-gray mt-2 text-2xl">Recap 2021</h5>
                        </div> 
                        <div className="w-full h-auto"
                            data-aos="fade-up"
                            data-aos-offset="80"
                            data-aos-duration="700">
                            <div style={card2} className="hover:scale-105 transition ease-in duration-200 cursor-pointer object-cover"></div>
                            <h5 className="font-bold text-gray mt-2 text-2xl">Recap 2020</h5>
                        </div> 
                        <div className="w-full h-auto"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-duration="900">
                            <div style={card3} className="hover:scale-105 transition ease-in duration-200 cursor-pointer object-cover"></div>
                            <h5 className="font-bold text-gray mt-2 text-2xl">Recap 2019</h5>
                        </div> 
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
        </>
    )
}

export default Articles