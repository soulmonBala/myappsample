import { useState, useEffect } from "react"
import About from "./Sections/About"
import Banner from "./Sections/Banner"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"
import Nav from "./Sections/Nav"
import Project from "./Sections/Project"
import Services from "./Sections/Services"
import { BallTriangle } from "react-loader-spinner"

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])
  return (
    <>
    {
      loading ?
    <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#d946ef"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </div>
    
      :
      <div className="bg-slate-900">
      <Nav />
      <Banner />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
    }
    </>
  )
}

export default App
