import React, { useEffect, useState } from 'react'
import { tbg } from '../assets/assets'
import { useLocation } from 'react-router'
import axios from 'axios';
import {REMOVE_BG_KEY} from "../config"
const Remove = () => {
    const location = useLocation();

    const [currentFile, setCurrentFile] = useState(location.state.file);
    const [outputFile, setOutputFile] = useState("");

    useEffect(() => {
        

        const removeBackground = async () => {
            setOutputFile("");
            try {
                if (!currentFile) return;
                const formData = new FormData();
                formData.append("image_file", currentFile);
                formData.append("size", "auto");

                const response = await axios.post(
                    "https://api.remove.bg/v1.0/removebg",
                    formData,
                    {
                        headers: {
                            "X-Api-Key": REMOVE_BG_KEY,
                            "Content-Type": "multipart/form-data",
                        },
                        responseType: "blob",
                    }
                );

                const imageUrl = URL.createObjectURL(response.data);
                setOutputFile(imageUrl)
            } catch (error) {
                console.log(error);
            }
        }

        removeBackground();
    }, [currentFile])

    const handleDownload = () => {
        if (!outputFile) return;
        const link = document.createElement("a");
        link.href = outputFile;
        link.download = "background_removed.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <>
            <main className='my-24'>
                <section className="flex flex-col gap-12 lg:flex-row justify-between items-center  lg:items-stretch" >
                    <div className="flex-1">
                        <h3 className='mb-4 font-semibold'>Original</h3>
                        <img src={URL.createObjectURL(currentFile)} alt="" className='rounded-lg max-w-[600px] w-full max-h-[360px] h-max' />
                    </div>
                    <div className='flex-1'>
                        <h3 className='mb-4 font-semibold'>Background Removed</h3>
                        <div className='bg-no-repeat bg-cover bg-center relative rounded-xl max-w-[600px] w-full max-h-[360px] h-max'
                            style={{ backgroundImage: `url(${tbg})` }}>
                            {
                                outputFile ? <img src={outputFile} alt="" className='rounded-lg max-w-[600px] w-full max-h-[360px] h-max' /> : <div className='h-[360px] flex items-center justify-center'>
                                    <span className='animate-wiggle'>Loading...</span>
                                </div>
                            }


                        </div>

                    </div>
                </section>
                <div className="flex lg:justify-end justify-center gap-4 my-8">
                    <label htmlFor="another_image" className='border-2 cursor-pointer border-[#7648FF] text-[#7648FF] rounded-3xl px-6 py-2'>Try anothor image</label>
                    <input type="file" id="another_image" className='hidden' onChange={(event) => setCurrentFile(event.target.files[0])} />
                    <button className='bg-linear-30 from-[#7648FF] to-[#D34AF8] text-white rounded-3xl px-6 py-2 cursor-pointer' onClick={handleDownload}>Download Image</button>
                </div>
            </main>
        </>
    )
}

export default Remove