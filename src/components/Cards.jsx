import React from 'react'

function Cards() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative z-[-1] w-full flex gap-3 px-9 pl-12 bg-zinc-100 py-12'>
            <div className='w-1/2'>
                <div className='w-full h-[57vh] bg-[#004D43] rounded-xl flex justify-center items-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Error" className='w-[23vh]' />
                </div>
            </div>

            <div className='w-1/2 flex gap-3'>
                <div className='w-1/2 h-[57vh] bg-[#212121] rounded-xl flex justify-center items-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Error"  className='w-[22vh]'/>
                </div>
                <div className='w-1/2 h-[57vh] bg-[#212121] rounded-xl flex justify-center items-center'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Error" className='w-[15vh]'/>
                </div>
            </div>

        </div>
    )
}

export default Cards