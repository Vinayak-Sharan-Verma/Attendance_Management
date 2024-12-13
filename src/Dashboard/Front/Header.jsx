import React, { useState, useEffect, useContext } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import Board from './Board';
import { MoonIcon, SunIcon } from 'lucide-react';
import { ThemeContext } from '../../Context/ThemeContext';

function Header() {
    const { user } = useKindeAuth();
    const [toggle, setToggle] = useState(true);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log("Theme", theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setToggle(!toggle);
    };
    return (
        <div className='p-4 m-1 rounded-lg bg-blue-200 items-center justify-between shadow-sm border flex'>
            <div className=''>
                <h1 className="text-xl tracking-tight bg-gradient-to-r 
                from-red-500 to-blue-800 text-transparent bg-clip-text sm:text-md">
                    <span>Attendance Management Site</span>
                </h1>
            </div>
            <div className='flex mx-2 rounded-md'>
                <div className='flex mr-3 ml-1 items-center'>
                    {theme === 'light' ? (
                        <MoonIcon className='text-2xl h-8 w-8 
                    bg-slate-500 text-black p-1 rounded-full'
                            onClick={() => { setTheme('dark'); localStorage.setItem('theme', 'dark') }} />
                    ) : (
                        <SunIcon className='text-2xl h-8 w-8 
                    bg-slate-100 text-black p-1 rounded-full'
                            onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }} />
                    )}
                </div>
                <div className='items-center mr-1'>
                    <img src={user?.picture} height={35} width={35}
                        alt="user" className='justify-end rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Header;
