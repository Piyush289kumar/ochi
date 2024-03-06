import React from 'react'

function LandingPage() {
    return (
        <div className='w-full h-screen bg-zinc-800'>
            <div className='textSection pt-40 px-14'>
                {['We create', 'eye-opening', 'presentations'].map((item, idx) => {
                    return <div className='flex items-center'>
                        {idx === 1 && (<div className='w-[15vh] h-[10vh] bg-red-600 relative top-[1vh] rounded-md'></div>)}
                        <h1 className="font-bold text-[14vh] leading-none uppercase tracking-tight">{item}</h1>
                    </div>

                })}
            </div>
        </div>
    )
}

export default LandingPage