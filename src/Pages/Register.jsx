import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Add from '../assets/add.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('profileImage', profilePicture);
        navigate('/');
        console.log(localStorage.getItem('name'));
        console.log(localStorage.getItem('email'));
        console.log(localStorage.getItem('password'));
        console.log(localStorage.getItem('profileImage'));
    };

   const handlePicture = (e) => {
        const profile = e.target.files[0];
        if (profile) {
            const imageUrl = URL.createObjectURL(profile); // Convert File to data URL
            setProfilePicture(imageUrl); // Update the state with the URL
            console.log(imageUrl);
            localStorage.setItem('profileImage', imageUrl); // Store the URL in local storage
        }
    };
    
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='relative h-[500px] w-[500px] px-6 py-12 md:p-12'>
                <div className='flex flex-col rounded-xl text-center shadow-lg shadow-slate-500 bg-white w-full px-9 py-11 text-black gap-5'>
                    <h2 className=' text-xl text-gray-700'>Register</h2>
                    <div className='flex flex-col text-start'>
                        <input
                            type='text'
                            className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  block w-full p-3 outline-none'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder='Name'
                            required
                        />
                    </div>
                    <div className='flex flex-col text-start'>
                        <input
                            type='email'
                            className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  block w-full p-3 outline-none'
                            placeholder='Email'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            required
                        />
                    </div>
                    <div className='flex flex-col text-start'>
                        <input
                            type='password'
                            className='bg-transparent border-b border-gray-400 text-gray-900 text-sm  block w-full p-3 outline-none'
                            placeholder='Password'
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type='file'
                            className='hidden'
                            id='profileImage'
                            onChange={handlePicture}
                        />
                        <label htmlFor='profileImage' className='flex cursor-pointer  items-center gap-2 text-[12px]'>
                            <img src={Add} alt='' className='w-6' />
                            <span className=' text-slate-400'>Add an Avatar</span>
                        </label>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <button className='rounded-md text-white w-full bg-[#1a1a1a] border
                         border-transparent px-3 py-2 text-base font-medium cursor-pointer'
                        type='submit'  
                        onClick={handleSubmit}>
                            Sign Up
                        </button>
                       <div>
                            <span className='text-gray-500 text-sm  hover:text-gray-800 '>
                               Already have an account? <span className=' cursor-pointer'
                               onClick={()=>{navigate('/')}}
                               >Login</span>
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

export default Register;
