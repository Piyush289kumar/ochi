import React from 'react'

function Features() {
  return (
    <div className='w-full py-20 bg-zinc-100'>
        <div className='w-full border-b-[1.5px] border-zinc-400 pb-8 px-10'>
            <h1 className='text-[8vh]'>Featured projects</h1>
        </div>

        <div className='w-full px-10 pt-14 flex items-center justify-center gap-10 bg-zinc-100 relative'>

            <div className='text absolute top-[57%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <h1 className='uppercase text-[15vh] tracking-tight font-bold text-[#cdea68]'>fyde</h1>
            </div>

            <div className='w-1/2'>
                <div className='flex gap-5 items-center'>
                    <div className='bg-zinc-800 rounded-full w-[12px] h-[12px]'></div>
                    <p>FYDE</p>
                </div>
                <div className='w-full mt-7 rounded-xl overflow-hidden'>
                    <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="Images" />
                </div>
            </div>

            <div className='w-1/2'>
                <div className='flex gap-5 items-center'>
                    <div className='bg-zinc-800 rounded-full w-[12px] h-[12px]'></div>
                    <p>VISE</p>
                </div>
                <div className='w-full mt-7 rounded-xl overflow-hidden'>
                    <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="Images" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features