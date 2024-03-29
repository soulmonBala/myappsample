import { Link } from "react-scroll";
import { useState } from "react"; 
import {FaTimes} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
// import {CiMenuFries} from "react-icons/ci";
// import { FaBeer } from 'react-icons/fa';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); 

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true}  to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-fuchsia-600">Home</li>
          </Link>
          <Link spy={true} smooth={true}  to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-fuchsia-600">About</li>
          </Link>
          <Link spy={true} smooth={true}  to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-fuchsia-600">Services</li>
          </Link>
          <Link spy={true} smooth={true}  to="Project">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-fuchsia-600">Project</li>
          </Link>
          <Link spy={true} smooth={true}  to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-fuchsia-600">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">logo</span>
        </div>
      <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
        <div className="flex-10">
          <ul className="flex gap-10 mr-16 text-[18px]">
            <Link spy={true} smooth={true}  to="Home">
              <li className="hover:text-fuchsia-600 hover:border-b-2 transition hover:border-fuchsia-600 cursor-pointer">Home</li>
            </Link>
            <Link spy={true} smooth={true}  to="About">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
            </Link>
            <Link spy={true} smooth={true}  to="Services">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li>
            </Link>
            <Link spy={true} smooth={true}  to="Project">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Project</li>
            </Link>
            <Link spy={true} smooth={true}  to="Contact">
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fushsia-600 cursor-pointer">Contact</li>
            </Link>
          </ul>
          </div>
        </div>
        <div>
            {click && content}
        </div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
