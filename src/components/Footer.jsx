import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { logo } from '../assets/assets';

const Footer = () => {
    const socialLinks = [
        { id: 1, icon: <FaInstagram /> },
        { id: 2, icon: <FaLinkedinIn /> },
        { id: 3, icon: <FaGithub /> }
    ]
    return (
        <footer className='flex justify-between items-center py-4 w-full'>
            <div className='flex justify-between items-center'>
                <img src={logo} alt="" className='w-12 h-8' />
                <span className='font-semibold ml-3'>Bg.</span><span className='font-semibold text-blue-500'>remove</span>
            </div>
            <ul className='flex justify-between items-center gap-3'>

                {socialLinks.map((icons) => (
                    <li className='shadow-lg border hover:shadow transition ease-in-out border-gray-200 p-2 cursor-pointer rounded-full' key={icons.id}>{icons.icon}</li>
                ))}

            </ul>
        </footer>
    )
}

export default Footer