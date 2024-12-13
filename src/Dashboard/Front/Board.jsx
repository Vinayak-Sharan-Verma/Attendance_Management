import React,{ useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import logo from '../../assets/AMS.jpg';
import { GraduationCap, Hand, LayoutIcon, Settings } from 'lucide-react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Link, useLocation } from "react-router-dom";

function Board() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
      console.log("Theme", theme);
  }, [theme]);

  const {user} = useKindeAuth(); 
  const menuList=[
    {
      id:1,
      name:"Dashboard",
      icon:LayoutIcon,
      path:"/Dashboard"
    },
    {
      id:2,
      name:"Student",
      icon:GraduationCap,
      path:"/Dashboard/students"
    },
    {
      id:3,
      name:"Attendance",
      icon:Hand,
      path:"/Dashboard/attendance"
    },
    {
      id:4,
      name:"Setting",
      icon:Settings,
      path:"/Dashboard/settings"
    },
  ]

  const path=useLocation();
  const pathname = path.pathname;
  useEffect(()=>{
    console.log(pathname)
  },[path])

  return (
      <div className='border shadow-xl h-screen p-4 ml-1 rounded-lg bg-blue-100 fixed hidden md:block'>
        <div className='flex w-44 bg-slate-300  items-center rounded-md'>
          <img src={logo} alt='logo' className='rounded-2xl p-2 ml-0 h-14'/>
          <h2 className='ml-2 items-center text-clip text-xl'>AMS</h2>
        </div>
        <hr className="my-5" />
        {menuList.map((menu,index)=>(
          <Link key={menu.id} to={menu.path}>
            <h2 key={menu.id} className={`flex gap-3 p-4 text-md items-center text-slate-600
            hover:text-slate-800 hover:bg-blue-600 rounded-lg cursor-pointer my-2
            ${pathname==menu.path && 'bg-blue-700 text-white'}`}>
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}  
        <div className='flex gap-2 items-center bottom-5 fixed p-2'>
          <img src={user?.picture} width={35} height={35} alt="user" className='rounded-full' />
          <div>
            <h2 className='text-sm font-bold'>{user?.given_name} {user?.family_name}</h2>
            <h2 className='text-xs text-slate-400'>{user?.email}</h2>
          </div>
        </div>
      </div>
  )
}

export default Board