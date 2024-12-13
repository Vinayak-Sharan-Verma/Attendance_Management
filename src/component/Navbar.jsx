import { Menu, X } from "lucide-react";
import { useState } from "react";
import AMS from "../assets/AMS.jpg";

const FrontPage = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    return (
    <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="flex justify-between item-center">
            <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2 rounded ml-2" src={AMS} alt="logo"/>
                <span className="text-xl tracking-tight bg-gradient-to-r 
                from-red-500 to-blue-800 text-transparent bg-clip-text">AMS</span>
            </div>
            <div className="flex items-center flex-shrink-0">
                <h1 className="text-xl tracking-tight bg-gradient-to-r 
                from-red-500 to-blue-800 text-transparent bg-clip-text sm:text-md">
                    <span>Attendance Management Site</span>
                </h1>
            </div>
            <div className="hidden mt-2 lg:flex justify-center mr-2 space-x-12 items-center">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"> Create an Account </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar} className="text-blue-200 mb-1">
                    {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
            </div>
        </div>
        {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <div className="flex space-x-6">
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 
                    py-2 px-3 mr-2 border rounded-md"> Create an Account </a>
                </div>
            </div>
        )}
   </nav>
   
  );
};


export default FrontPage;