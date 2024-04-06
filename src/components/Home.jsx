import gear from "../assets/settings.png"
import glass from "../assets/search (2).png"
const Home = () => {
  return (
    <div className="flex flex-col items-center pt-[60px] lg:gap-28 gap-10">
    <div className="font-bold text-2xl sm:text-4xl lg:text-6xl text-center">What can we help you with?</div>
    <div className="border border-gray-400 rounded-3xl lg:w-[700px] w-[400px] h-[50px] flex items-center">
    <div className="px-5"><img src={glass} className="w-7"/></div>
    
    <input type="text" placeholder="Search our articles" className="border-none outline-none"/>
    </div>
    
    
    <div className="grid grid-rows-3 grid-cols-2 gap-8 text-blue-400">
        <div className="flex gap-2">
        <div className="">
        <img src={gear} className="w-7"/>
        </div> 
        Setting up your first event</div>
        <div className="flex gap-2">
        <div className="">
        <img src={gear} className="w-7"/>
        </div> 
        Setting up your first event</div>
        <div className="flex gap-2">
        <div className="">
        <img src={gear} className="w-7"/>
        </div> 
        Setting up your first event</div>
        <div className="flex gap-2">
        <div className="">
        <img src={gear} className="w-7"/>
        </div> 
        Setting up your first event</div>
        <div className="flex gap-2">
        <div className="">
        <img src={gear} className="w-7"/>
        </div> 
        Setting up your first event</div>
        <div className="flex gap-2">
        <div className="">
        <img src={gear} className="w-7"/>
        </div> 
        Setting up your first event</div>
    </div>
    </div>
  )
}

export default Home
