import React from 'react'

function About() {
    return (
        <>
            <div className='w-full bg-[#CDEA68] p-20'>
                <div>
                    <h1 className='text-[7.5vh] leading-[7vh]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
                </div>
            </div>

            <div className='bg-[#CDEA68] border-t-[1px] border-zinc-500 px-28 pt-4 pb-20 flex'>
                <div className='w-1/2'>
                    <p>What you can expect:</p>
                </div>
                <div className='w-1/2 flex items-center'>
                    <div className='text-md'>
                        <p className='pb-7 pr-32'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                        <p className='pr-32'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>

                    <div className=''>
                        <p className='pt-12 pr-32'>S:</p>
                        <p className='pt-20 underline'>Instagram</p>
                        <p className='underline'>Behance</p>
                        <p className='underline'>Facebook</p>
                        <p className='underline'>Linkedin</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About