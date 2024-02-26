import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img from "../img/COVER.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css' 
import { useEffect } from "react";

function Banner() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay:0,
      duration:750
    })
  })
  return (
      <div className="lg:px-56 px-10 lg:py-0 py:20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">
            Welcome to{" "}
            <span className="text-fuchsia-600 lg:gap-28 items-center">
              My Website{" "}
            </span>{" "}
          </h1>
          <p data-aos="fade-left" className="">
            Making your virtual imaginations come to LIFE, if only you can THINK it then we can MAKE IT!!! Intelligent, hardworking, inquisitive, and ready to use sound Organizational and planning skills to deliver, giving in long hours of meticulous work to enhance progress.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 "
                >
                  <AiFillGithub className="text-[28px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 "
                >
                  <FaLinkedinIn className="text-[28px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 "
                >
                  <FaTwitter className="text-[28px]" />
                </a>
                <a
                  href=""
                  className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 "
                >
                  <FaInstagram className="text-[28px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      <div className="flex items-center justify-center">
            <img data-aos="fade-up" 
              src={img}
              width={400}
              height={290}
              className="rounded-full border-2 p-1 border-fuchsia-500 img-glow"
              alt=""/>
              </div>
      
    </div>
  );
}

export default Banner;
