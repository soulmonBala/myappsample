import img2 from '../img/p1.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import { useEffect } from 'react'
import Aos from 'aos'

const Project = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div id="Project" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img height={250} width={250} data-aos="fade-up" className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img2} alt="Picture2" />
        <img height={250} width={250} data-aos="fade-down" className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img3} alt="Picture3" />
        <img height={250} width={250} data-aos="fade-up" className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img4} alt="Picture4" />
        <img height={250} width={250} data-aos="fade-down" className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img5} alt="Picture5" />
      </div>
    </div>
  )
}

export default Project
