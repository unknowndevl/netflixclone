import React, { useState } from 'react';
import logo from '../assets/logo.png';
import background from '../assets/back.jpg';
import { signin, signup } from '../firebase';
const Login = () => {

    const [signState, setsignState] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleState = () => {
        signState === "Sign Up" ? setsignState("Sign In") : setsignState("Sign Up");
    }


    const user_auth = async (event) => {
        event.preventDefault();

        if (signState === "Sign In") {
            await signin(email, password);
        }
        else {
            await signup(name, email, password);
        }
    }


    return (
        <div className='w-auto h-screen p-5   ' style={{ backgroundImage: `url(${background})` }}>
            <div className="login-logo  w-40 pl-10">
                <img src={logo} alt="" />

            </div>
            <div className="loginform h-100 w-110  mt-40  m-auto  p-7 bg-[#0901019f] rounded-2xl  relative" >
                <h2 className='loginh text-center text-2xl  '>{signState}</h2>
                <form action="" className='flex flex-col gap-4 p-6 pt-5' >
                    {signState === "Sign Up" ? <input id="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Your Name' className='placeholder-amber-50 border-black rounded-[5px] h-10 bg-[#3327279f] pl-2 font-mono' /> : <> </>}



                    <input id="email" type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Your Email' className='placeholder-amber-50 border rounded-[5px] h-10 bg-[#33272772] pl-2   border-black font-mono' />
                    <input type="password" id="" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' className='placeholder-amber-50 border rounded-[5px] h-10 bg-[#33272772] pl-2  border-black font-mono' />
                    {signState === "Sign Up" ?
                        <button onClick={user_auth} type='submit' className=' rounded-[7px]  bg-red-500 h-10 w-20 ml-30 mt-3 font-mono placeholder-amber-50 cursor-pointer ' > Sign Up</button> :
                        <button onClick={user_auth} type='submit' className=' rounded-[7px]  bg-red-500 h-10 w-20 ml-30 mt-3 font-mono placeholder-amber-50 cursor-pointer'> Sign In</button>
                    }
                    <div className="help">
                        <input type="checkbox" name="" id="cheak" placeholder='cheakbox' />
                        <label htmlFor="cheak" className='font-sans h-7'> remember me</label>
                    </div>
                    <p className='font-sans'>Need Help?</p>

                </form>

                <div className='form-switch cursor-pointer' onClick={handleState}  >
                    {signState === "Sign Up" ?
                        <p className='absolute  bottom-16 right-4'>Already a User <span className='text-amber-200 font-sans underline pl-2'>Sign In</span></p> :
                        <p className='absolute  bottom-14 right-4'>New to Netflix <span className='text-amber-200 font-sans underline pl-2'>Sign up</span></p>


                    }


                </div>
            </div>
        </div>
    );
}

export default Login;