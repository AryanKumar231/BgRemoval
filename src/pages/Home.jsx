import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import Slider from '../components/Slider';
import { MdOutlineFileDownload, MdOutlineFileUpload } from 'react-icons/md';
import { SiRemovedotbg } from 'react-icons/si';
import { heroVid } from '../assets/assets';
import Hero from "../components/Hero"
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();

    const handleChange = (event) => {
        navigate("/remove", { state: { file: event.target.files[0] } })
    }



    return (
        <>
            <Hero />
            <main>
                <section className='my-28'>
                    <h2 className='bg-linear-90 from-[#353535] to-[#9B9B9B] text-transparent bg-clip-text md:text-3xl text-xl font-semibold leading-normal text-center mb-12'>Steps to remove background <br />image in seconds</h2>
                    <div className="flex lg:flex-row flex-col gap-6 justify-center items-center">
                        <div className='flex gap-3 shadow-md p-8 rounded-lg border border-gray-200 md:max-w-96 bg-white hover:shadow-lg transition ease-in-out'>
                            <div>
                                <span className='bg-blue-500 inline-block p-1 rounded-lg'>
                                    <MdOutlineFileUpload className='text-white text-2xl' />
                                </span>
                            </div>
                            <div>
                                <h3 className='font-semibold text-lg mb-1'>Upload Image</h3>
                                <p className='text-xs text-gray-600 font-semibold'>This is a demo text, will replace it later. This is a demo..</p>
                            </div>
                        </div>
                        <div className='flex gap-3  shadow-md p-8 rounded-lg border border-gray-200 md:max-w-96 bg-white hover:shadow-lg transition ease-in-out'>
                            <div className=''>
                                <span className='bg-blue-500 inline-block p-1 rounded-lg'>
                                    <SiRemovedotbg className='text-white text-2xl' />
                                </span>
                            </div>
                            <div className=''>
                                <h3 className='font-semibold text-lg mb-1'>Remove background</h3>
                                <p className='text-xs text-gray-600 font-semibold'>This is a demo text, will replace it later. This is a demo..</p>
                            </div>
                        </div>
                        <div className='flex gap-3  shadow-md p-8 rounded-lg border border-gray-200 md:max-w-96 bg-white hover:shadow-lg transition ease-in-out'>
                            <div className=''>
                                <span className='bg-blue-500 inline-block p-1 rounded-lg'>
                                    <MdOutlineFileDownload className='text-white text-2xl' />
                                </span>
                            </div>
                            <div className=''>
                                <h3 className='font-semibold text-lg mb-1'>Download image</h3>
                                <p className='text-xs text-gray-600 font-semibold'>This is a demo text, will replace it later. This is a demo..</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slider */}
                <Slider />


                {/* another section */}
                <section className="my-40 grid grid-cols-1 place-items-center gap-20 md:mx-12 lg:grid-cols-2">
                    <div>
                        <h2 className='text-xl md:text-3xl  font-semibold bg-linear-90 my-4 from-[#353535] to-[#9B9B9B] text-transparent bg-clip-text'>
                            Remove backgrounds 100% automatically in 5 seconds with one click
                        </h2>
                        <p className='text-xs md:text-sm text-gray-600'>Thanks to <span className='font-semibold'>Bg.</span><span className='text-blue-500'>remove</span> clever AI, you can slash editing time - and have more fun!</p>
                        <p className='text-xs md:text-sm my-2 text-gray-600'>
                            No matter if you want to make a background transparent (PNG), add a white background to a photo, extract or isolate the subject, or get the cutout of a photo - you can do all this and more with <span className='font-semibold'>Bg.</span><span className='text-blue-500'>remove</span>, the AI background remover for professionals.
                        </p>
                    </div>

                    <video autoPlay loop muted>
                        <source src={heroVid} />
                    </video>

                </section>


                <section>
                    <h2 className='bg-linear-90 from-[#353535] to-[#9B9B9B] text-transparent bg-clip-text md:text-3xl text-xl  font-semibold leading-normal text-center mb-12'>Customer Testimonials</h2>
                    <div className="grid grid-cols-1 gap-8 place-items-center lg:grid-cols-2">
                        <div className='shadow-lg border max-w-[500px] border-gray-200 p-5 rounded-lg hover:shadow-md transition ease-in-out' >
                            <div className='flex gap-4 items-center py-4'>
                                <span className='bg-gray-400 p-3 rounded-full'><FaUser /></span>
                                <div>
                                    <h3 className='py-2'>Richard Jackman</h3>
                                </div>
                            </div>
                            <q className='text-sm font-semibold text-gray-600'>
                                <cite className='font-normal'>I've been using bg.remove for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                                </cite>

                            </q>
                        </div>
                        <div className='shadow-lg border max-w-[500px] border-gray-200 p-5 rounded-lg hover:shadow-md transition ease-in-out'>
                            <div className='flex gap-4 items-center py-4'>
                                <span className='bg-gray-400 p-3 rounded-full'><FaUser /></span>
                                <div>
                                    <h3 className='py-2'>Richard Jackman</h3>
                                </div>
                            </div>
                            <q className='text-sm font-semibold text-gray-600'>
                                <cite className='font-normal'>I've been using bg.remove for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                                </cite>
                            </q>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center my-28">
                    <h2 className='bg-linear-90 from-[#353535] to-[#9B9B9B] text-transparent bg-clip-text md:text-3xl text-xl  font-semibold leading-normal text-center mb-8'>See the magic. Try now</h2>
                    <label htmlFor='uploading' className='flex items-center gap-2 bg-linear-30 from-[#7648FF] to-[#D34AF8] text-white py-3 px-6 rounded-4xl cursor-pointer'><MdOutlineFileUpload className='text-2xl text-white' /> <span>Upload your image</span></label>
                    <input type="file" id="uploading" className='hidden' onChange={(event) => handleChange(event)} />
                </section>

            </main>
        </>
    )
}

export default Home