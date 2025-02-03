import React from 'react'
import { headImg } from "../assets/assets"
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link, useNavigate } from 'react-router'
import { useAuth, useClerk } from '@clerk/clerk-react'
import { MdOutlineFileUpload } from 'react-icons/md'
const hero = () => {
    const { openSignIn } = useClerk()
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();

    const handleChange = (event) => {
        navigate("/remove", { state: { file: event.target.files[0] } })
    }
    return (
        <div className='mt-12 sm:mt-20 flex flex-col items-center'>
            <h1 className="md:text-6xl text-4xl font-semibold text-center leading-snug">Remove the <span className='font-semibold bg-linear-90 from-[#7648FF] to-[#D34AF8] text-transparent bg-clip-text'><cite>Background</cite></span> from the image for free.</h1>


            {isSignedIn ?
                <>
                    <label htmlFor='uploading' className='my-12 flex items-center gap-2 bg-linear-30 from-[#7648FF] to-[#D34AF8] text-white py-3 px-6 rounded-4xl cursor-pointer'><MdOutlineFileUpload className='text-2xl text-white' /> <span>Upload your image</span></label>
                    <input type="file" id="uploading" className='hidden' onChange={(event) => handleChange(event)} />
                </>:
                <Link to='/remove' onClick={openSignIn} className='text-white text-sm px-7 py-3 rounded-3xl flex items-center gap-2 group transition-all ease-in-out cursor-pointer my-6 hover:text-gray-200 bg-linear-30 from-[#7648FF] to-[#D34AF8]'>Get Started <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 transition-all ease-in-out' /></Link>
            }

            <img src={headImg} alt="hero image" className='w-lg aspect-square' />
        </div>


    )
}

export default hero