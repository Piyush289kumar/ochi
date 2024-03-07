import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div className='w-full h-screen'>
            <div className='textSection pt-40 px-14'>
                {['We create', 'eye-opening', 'presentations'].map((item, idx) => {
                    return <div className='flex items-center'>
                        {idx === 1 && (<div className='w-[15vh] h-[10vh] bg-red-600 relative top-[1vh] rounded-md'></div>)}
                        <h1 className="font-bold text-[14vh] leading-none uppercase tracking-tight">{item}</h1>
                    </div>

                })}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-24 flex justify-between px-14'>
                {['For public and private companies', 'From the first pitch to IPO'].map((item, idx) => (
                    <p className='mt-4'>{item}</p>
                ))}
                <div className='flex justify-center items-center'>
                    <p className='border-[1px] border-zinc-900 mt-4 mr-1 px-4 py-1 text-sm uppercase rounded-3xl'>Start the project</p>
                    <FaArrowLeftLong className='border-[1px] border-zinc-900 mt-4 p-[10px] w-8 h-8 rotate-[140deg] uppercase rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default LandingPage