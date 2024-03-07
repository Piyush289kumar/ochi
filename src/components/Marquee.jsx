import React from 'react'

function Marquee() {
    return (
        <div className='w-full py-24 rounded-t-3xl bg-[#004D43] flex'>
            <div className='text border-t-[1px] border-b-[1px] border-green-100 flex gap-11 tracking-tighter overflow-hidden whitespace-nowrap'>
                {
                    ["WE ARE OCHI", "WE ARE OCHI"].map((item, idx) => (
                        <h1 className='text-[45vh] leading-none font-bold -mt-5 mb-3 text-white'>{item}</h1>
                    ))
                }
            </div>
        </div>
    )
}

export default Marquee