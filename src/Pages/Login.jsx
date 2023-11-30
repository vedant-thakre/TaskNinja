import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../Context/AppContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const { setIsAuthenticated} = useApp();
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // getting email and passoword
    const userEmail = localStorage.getItem("email") ?
    localStorage.getItem("email") : "tempuser@gmail.com"

    const userPass = localStorage.getItem("password") ? 
    localStorage.getItem("password") : "pass@123"



    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === userEmail && password === userPass){
            setIsAuthenticated(true);
            console.log('matched')
            navigate('/home')
        }else{
            console.log('not matched')
        }
    };
    
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='relative h-[400px] w-[500px] px-6 py-12 md:p-12'>
                <div className='flex flex-col rounded-xl text-center shadow-lg shadow-slate-500
                 bg-white w-full px-9 py-11 text-black gap-5'>
                    <h2 className=' text-xl text-gray-700'>Login</h2>
                    <div className='flex flex-col text-start'>
                        <input
                            type='text'
                            className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  block w-full p-3 outline-none'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder='Email'
                            required
                        />
                    </div>
                    <div className='flex flex-col text-start'>
                        <input
                            type='password'
                            className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  block w-full p-3 outline-none'
                            placeholder='Password'
                            value={password}
                            onChange={(e)=>{ setPassword(e.target.value)}}
                            required
                        />
                    </div>

                    <div className='w-full flex flex-col mt-5 gap-2'>
                        <button className='rounded-md text-white w-full bg-[#1a1a1a] border
                         border-transparent px-3 py-2 text-base font-medium cursor-pointer'
                          type='submit'  
                          onClick={handleSubmit}>
                            Login
                        </button>
                       <div>
                        <span className='text-gray-500 text-sm hover:text-gray-800 cursor-pointer ml-1'
                            onClick={() => {
                                setEmail("tempuser@gmail.com");
                                setPassword("pass@123");
                            }}
                        >
                            Guest login
                        </span>

                        <span className='text-gray-500 text-sm  hover:text-gray-500'> or </span>
                        <span className='text-gray-500 text-sm  hover:text-gray-800 cursor-pointer'
                          onClick={()=>{navigate('/register')}}
                        >
                         Register
                        </span>
                        
                        
                       </div>
                    </div>
                </div>

                <div className='bg-slate-400 inline-block p-2 left-[40%]  md:left-[41%] rounded-[50%] absolute top-0'>
                    <div className='w-[70px] h-[70px] relative'>
                        <img src={Logo} alt='' className='w-[60px] top-2 left-2 absolute' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
