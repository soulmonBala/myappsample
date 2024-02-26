const Contact = () => {
  return (
    <div id="Contact" className=" p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-center text-fuchsia-500">Contact me</h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6 ">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow  text-xl text-slate-500" type="text" placeholder="Enter your Name" />
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" type="email" placeholder="Enter your Email" />
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" name="" id="" cols="20" rows="10" placeholder="Write your Massage..."></textarea>
        <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 submit text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-8 uppercase relative overflow-hidden b_glow text-xl text-bold" type="">Submit</button>
      </form>
    </div>
  )
}

export default Contact
