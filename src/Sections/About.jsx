// import { AiFillGithub } from "react-icons/ai";
// import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import img from "../img/COVER.jpg";

const About = () => {
  return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py:20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between">

<div className="flex items-center justify-center mt-10">
     <img data-aos="fade-down"
        src={img}
        width={500}
        height={500}
        className="rounded p-1 border-fuchsia-500 img-glow"
        alt=""
        />
</div>
     
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
            About Menu{" "}
        </h1>
        <p data-aos="fade-left" className="">
        A software developer who is in love with first; solving problems and all the development(SDLC) processes while using the right tools needed for the job.Excellent verbal and written communicator with a strong background in cultivating positive relationships and exceeding goals.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
