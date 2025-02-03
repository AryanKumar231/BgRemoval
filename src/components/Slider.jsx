import React, { useState } from 'react'
import { tbg, wbg, wobg } from '../assets/assets';

const Slider = () => {
    const [visible, setVisible] = useState(50);

    return (
        <section className="my-40 flex flex-col items-center">
            <h2 className='bg-linear-90 from-[#353535] to-[#9B9B9B] text-transparent bg-clip-text md:text-3xl text-xl  font-semibold leading-normal text-center mb-12'>Remove Background With High <br />
                Quality and Accuracy</h2>
            <div className='bg-no-repeat bg-cover bg-center relative max-w-[700px] rounded-xl'
                style={{ backgroundImage: `url(${tbg})` }}>
                <div className="relative">
                    <img src={wbg} alt="" className='rounded-xl' style={{ clipPath: `inset(0 ${100.2 - visible}% 0 0)` }} />
                    <img src={wobg} alt="" className='rounded-xl absolute top-0 left-0 w-full h-full' style={{ clipPath: `inset(0 0 0 ${visible}%)` }} />
                    <input type="range" value={visible} onChange={(event) => setVisible(event.target.value)} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 cursor-pointer slider' />
                </div>
            </div>
        </section>
    )
}

export default Slider