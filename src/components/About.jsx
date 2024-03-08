import React from 'react'

function About() {
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed="-.2" className=' bg-[#CDEA68] rounded-t-2xl'>
                <div className='w-full p-20'>
                    <div>
                        <h1 className='text-[7.5vh] leading-[7vh]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
                    </div>
                </div>

                <div className='bg-[#CDEA68] border-t-[1px] border-zinc-500 px-12 pt-4 pb-20 flex'>
                    <div className='w-1/2'>
                        <p>What you can expect:</p>
                    </div>
                    <div className='w-1/2 flex items-center'>
                        <div className='text-md'>
                            <p className='pb-6 pr-32'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                            <p className='pr-32'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                        </div>

                        <div className=''>
                            <p className='pt-12 pr-32'>S:</p>
                            <p className='pt-4 underline'>Instagram</p>
                            <p className='underline'>Behance</p>
                            <p className='underline'>Facebook</p>
                            <p className='underline'>Linkedin</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#CDEA68] border-t-[1px] border-zinc-500 px-12 pt-4 mt-5 pb-12 flex'>
                    <div className='w-1/2'>
                        <h1 className='text-[8vh] font-medium mb-4'>Our approach:</h1>
                        <button className='bg-zinc-800 px-6 py-4 text-md rounded-full text-white uppercase flex items-center justify-between gap-8'>Read More<div className='w-2 h-2 rounded-full bg-zinc-50 hover:w-5 hover:h-5 duration-150'></div></button>
                    </div>
                    <div className='w-1/2 flex items-center'>
                        <img
                            className='rounded-xl'
                            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Images"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About