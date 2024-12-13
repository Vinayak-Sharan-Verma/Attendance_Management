import { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import SignIn from './component/SignIN';
import video from './assets/video2.mp4';
import { Routes, Route } from "react-router-dom";
import Header from './Dashboard/Front/Header';
import Board from './Dashboard/Front/Board';
import { ThemeContext } from './Context/ThemeContext';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Student from './Dashboard/Students/Student';
import Attendance from './Dashboard/Attendance/Attendance';
import DashBoard from './Dashboard/DashBoard/DashBoard';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')

  const App = () => ( 
    <KindeProvider
      clientId="6ef596c1f32f44c3abeb950bde171440"
      domain="https://attendancemanagementsite.kinde.com"
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
     >
      <Routes />
    </KindeProvider>
  );
  
  useEffect(() => {
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  }, [])

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        {/* <div className="background"> 
              <video src={video} autoPlay loop muted className='w-full h-full absolute'/>
          <Routes>
            <Route path='/'element={ <Navbar />} />
            <Route path='/dashboard' element={<SignIn />} />
          </Routes>
        </div>  */}
        {/* <div className={`${theme} ${theme=='dark'?'bg-black':null} h-[100vh]`}> */}
        {/* <div className='md:w-64 fixed hidden md:block'>
          <Routes>
            <Route path='/'element={ <Board />} />
            <Route path='/dashboard' element={<Header />} />
          </Routes>
        </div>
        <div className='md:ml-56'>
         <Route path='/' element={ <Header /> } />
        </div> */}
        <div className='md:w-64 fixed hidden md:block'>
          <Board />
        </div>
        <div className='md:ml-56'>
          <Header />
        </div>
        <div className='md:ml-56'>
          <Routes>
            <Route path='/Dashboard' element={ <DashBoard /> } />
            <Route path='/Dashboard/students' element={ <Student /> } />
            <Route path='/Dashboard/attendance' element={ <Attendance /> } />
          </Routes>
        </div>
      
      </ThemeContext.Provider>
    </>
  )
}

export default App
