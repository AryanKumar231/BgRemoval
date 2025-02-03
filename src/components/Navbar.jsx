import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { logo } from "../assets/assets"
import { Link } from 'react-router';

const Navbar = () => {

    const { user } = useUser();


    return (
        <nav className="flex justify-between py-4">
            <Link to='/' className='flex text-xl items-center gap-2'>
                <img src={logo} alt="Logo" className="w-12 h-8" />
                <span className='font-semibold tracking-wider'>
                    Bg.
                    <span className='text-blue-500'>remove</span>
                </span>
            </Link>
            <button>

                <SignedIn>
                    <div className='flex items-center gap-4 text-gray-600'>
                        <span className='text-sm '>Hii, {user?.firstName}</span> <UserButton style={{ width: "100%", height: "100%", padding: "" }} />
                    </div>
                </SignedIn>
                <SignedOut>
                    <div className="bg-linear-30 from-[#7648FF] to-[#D34AF8] text-white rounded-3xl">
                        <SignInButton style={{ padding: '0.3rem 1.3rem', cursor: 'pointer' }} />
                    </div>
                </SignedOut>
            </button>
        </nav>
    )
}

export default Navbar