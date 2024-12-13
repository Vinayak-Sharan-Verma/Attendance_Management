import React,{ useState } from 'react'
import {useKindeAuth} from '@kinde-oss/kinde-auth-react';
import email from "../assets/email.png";
import person from "../assets/person.png";
import password from "../assets/password.png";
import ams from "../assets/AMS.jpg";
import "./SignIn.css";


const SignIn = () => {

    const [action, setAction] = useState("Sign Up");
    const { login, register } = useKindeAuth();

    // <button onClick={register} type="button">Sign up</button>
    // <button onClick={login} type="button">Sign In</button>
    // onRedirectCallback={(user, app_state) => {
    //     console.log({user, app_state});
    // }}

    return (
    <div className="flex justify-center pb-10 w-800 ml-10 mt-10 relative lg:max-h-full lg:ml-40 lg:mt-20 lg:mr-40">
    <div className="flex-1 flex-col bg-gradient-to-r from-gray-500 pd-20 rounded-l-md">
        <div className="flex flex-col items-center gap-2 w-full">
            <div className="text-2xl font-semibold mt-8 justify-center text-center text-orange-400"> {action} </div>
            <div className="h-1 w-12 bg-blue-900 rounded-md animate-bounce"></div>
        </div>
        <div className="mt-5 flex flex-col gap-5">
            {action==="Login"?<div></div>:
            <div className="flex items-center m-auto w-3/4 h-full bg-slate-300 rounded-lg gap-5">
                <img src={person} alt="Person" 
                className="ml-2 w-6 h-6" />
                <input type="text" 
                className="w-11/12 h-8 rounded border-md border-b bg-transparent" placeholder="Name" />
            </div>}
            <div className="flex items-center m-auto w-3/4 h-full bg-slate-300 rounded-lg gap-5">
                <img src={email} alt="Email"
                className="ml-2 w-6 h-5" />
                <input type="email" 
                className="w-11/12 h-8 rounded border-md border-b bg-transparent" placeholder="Email" />
            </div>
            <div className="flex items-center m-auto w-3/4 h-full bg-slate-300 rounded-lg gap-5">
                <img src={password} alt="Password" 
                className="ml-2 w-5 h-6" />
                <input type="password" 
                className="w-11/12 h-8 rounded border-md border-b bg-transparent" placeholder="Password" />
            </div>
            {action==="Login"?<div></div>:
            <div className="flex items-center m-auto w-3/4 h-full bg-slate-300 rounded-lg gap-5">
                <img src={password} alt="Password" 
                className="ml-2 w-5 h-6" />
                <input type="Password" 
                className="w-11/12 h-8 rounded border-md border-b bg-transparent" placeholder="Confirm Password" />
            </div>}
        </div>
        {action==="Sign Up"?<div className="rounded-md mt-2 ml-5 text-sm text-blue-900 mb-10"></div>:
            <div className="mt-2 ml-5 text-sm text-blue-900 mb-10"> <a href="#">Forgot Password?</a> 
            </div>}
        <div className="flex pb-3">
            <div className={action==="Login"?"submit gray":"submit text-stone-950"}
            onClick={() => setAction("Sign Up")}>
                <button onClick={register}>Sign Up</button>
            </div>
            <div className={action==="Sign Up"?"submit gray":"submit"}
            onClick={() => setAction("Login")}>
                <button onClick={login}> Login</button>
            </div>
        </div>
    </div>
    <hr className="w-0.5"/>
    <div className="flex flex-col justify-center flex-1 relative">
        <div className="flex-1 flex-col mr-10 bg-gradient-to-r from-gray-900 to-gray-750 pd-20 rounded-r-md">
            <div className="text-center justify-center text-purple-100 font-medium mt-5">Welcome to <br/> Attendance Management Site</div>
            <div className="text-center text-purple-100 font-sans"> Track your attendance </div>
            <div className="block justify-center items-center mt-auto mr-auto w-1/2 ml-auto">
                <img src={ams} className="rounded-xl mt-10 lg:ml-6 w-50"/>
            </div>
        </div>
        
    </div> 
    </div>
  )
}

export default SignIn