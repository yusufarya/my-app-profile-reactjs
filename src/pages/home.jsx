import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// import { NavLink } from "react-router-dom";
import mycv from "../assets/data/CV-YusufAryadilla.pdf";
import medicare from "../assets/img/dashboard_medicare.png";
import studio from "../assets/img/dashboard_29studio.png";
import uptd from "../assets/img/uptd.png";
import { useRef } from "react";
// ..
AOS.init();

var sectionStyle = {
  margin: "0 auto",
  marginTop: `15px`,
  width: "100%",
  height: "500px",
  display: "block",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  backgroundAttachment: "fixed",
  opacity: `0.9`,
  filter: `brightness(.8)`,
};

function Home() {
  const project = useRef(null);

  const goto = (ref) => {
    console.log("goto project");
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <br />
      <div
        className="flex justify-center w-full mx-1 "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
      >
        <div className="mx-0 lg:mt-10 md:mt-10 sm:mt-8 mt-5 w-full lg:w-2/3 md:w-2/3 flex ">
          <div style={sectionStyle}>
            <div className="p-2 mt-5 lg:mt-3 md:mt-2 sm:mt-2 justify-start ">
              <br />
              <h1 className="font-bold text-gray-900 dark:text-gray-50 mt-5 sticky top-600">
                Hello!
                <span className="animate-[wiggle_1s_ease-in-out_infinite]">
                  👋
                </span>{" "}
                I'am Yusuf.
              </h1>
              <p className="text-justify text-gray-900 dark:text-gray-50 text-semibold text-xl py-3">
                {" "}
                Web developer who is passionate about building user-centric
                solutions.
              </p>
              <p className="flex justify-start">
                <a href={mycv} target="blank">
                  {" "}
                  see my cv...{" "}
                </a>
              </p>
              <p className="flex justify-start">
                <a
                  onClick={() => goto(project.current)}
                  className="cursor-pointer"
                  target="blank"
                >
                  {" "}
                  my project{" "}
                </a>
              </p>
              {/* <p className='flex justify-start'><NavLink to={"/resume"}> See my resume </NavLink></p> */}
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />

      <div className="flex justify-center">
        <hr className="w-12/12 lg:w-2/3 h-19 py-5 block" />
      </div>
      <div className="flex justify-center">
        <div
          className="text-gray-800 dark:text-white mx-0 lg:mt-10 md:mt-10 sm:mt-8 mt-5 w-full lg:w-2/3 md:w-2/3"
          ref={project}
        >
          <h3 className="text-center font-bold text-2xl mb-3">My Project</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="project">
            <div id="item-project" className="p-4 bg-gray-100 rounded-lg shadow-md">
              <img src={medicare} alt="Medicare project" className="w-full h-auto mb-2 rounded-md" />
              <h4 className="font-bold mt-3">Medicare</h4>
              <p>Aplikasi berbasis web untuk manajemen klinik</p>
              <a href="https://my.medicare.29digitec.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See more...</a><br />
              <a href="http://medicare.web.id/admin" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit project...</a>
            </div>
            <div id="item-project" className="p-4 bg-gray-100 rounded-lg shadow-md">
              <img src={studio} alt="29 Studio project" className="w-full h-auto mb-2 rounded-md" />
              <h4 className="font-bold mt-3">29 Studio</h4>
              <p>Aplikasi berbasis web untuk pemesanan studio foto</p>
              <a href="https://elfana-studio.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">See more...</a>
            </div>
            <div id="item-project" className="p-4 bg-gray-100 rounded-lg shadow-md">
              <img src={uptd} alt="Pelatihan Dinas Kerja project" className="w-full h-auto mb-2 rounded-md" />
              <h4 className="font-bold mt-3">Pelatihan Dinas Kerja</h4>
              <p>Aplikasi berbasis web untuk pendaftaran pelatihan dinas kerja UPTD</p>
              <a href="https://uptd-tangerangkab.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit project...</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
