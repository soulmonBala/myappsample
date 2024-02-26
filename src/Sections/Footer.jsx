import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-40 px:-4 py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase ">Logo</span>
          <p className="text-[16px] mt-7 my-4">Expose you to all the possibilities in Tech</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase ">Services</h2>
          <ul className="text-[16px] my-4">
            <li className="my-2 ">Web Design</li>
            <li className="my-2 ">Graphic Design</li>
            <li className="my-2 ">Web Development</li>
            <li className="my-2 ">Project Management</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase ">Contact</h2>
          <p className="text-[16px] my-4">Email: solomonbalaq@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +234 8140401901</p>
        </div>
       <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
            <div className="flex space-x-4 mt-5">
              <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"  href="">
                <FaGithub />
              </a>
              <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"  href="">
                <FaLinkedin />
              </a>
              <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"  href="">
                <FaTwitter />
              </a>
              <a  className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                <FaInstagram />
              </a>
        </div>
       </div>
      </div>
    </footer>
  )
}

export default Footer
