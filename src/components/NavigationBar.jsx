import link from "../assets/external-link (1).png"

const NavigationBar = () => {
  return (
    <div className="flex p-2 lg:p-5 lg:text-lg text-center">
    <div className="flex gap-5 font-bold text-xl items-center">
      <div className="text-blue-500 text-2xl">Calendly</div>
      <div className="w-32">Help Center</div>
    </div>
    <div className="flex-1"></div>
    <div className="invisible lg:visible lg:flex lg:gap-5 lg:items-center">
      <div className="flex items-center gap-1">Developers<div className=""><img src={link} className="w-5"/></div></div>
      <div className="flex items-center gap-1">Report Abuse<div className=""><img src={link} className="w-5"/></div></div>
      <div className="">Contact Us</div>
    </div>
    <div className="flex lg:gap-5 gap-4 lg:pl-5 items-center">
      <div className="w-16">Log In</div>
      <div className="w-16">Sign Up</div>
    </div>
    </div>
  )
}

export default NavigationBar
