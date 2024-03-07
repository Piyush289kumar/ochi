import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
function Footer() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            let PositionX = event.clientX;
            let PositionY = event.clientY;
            let DeltaPositionX = PositionX - window.innerWidth / 2;
            let DeltaPositionY = PositionY - window.innerHeight / 2;
            let angle =
                Math.atan2(DeltaPositionY, DeltaPositionX) * (180 / Math.PI) - 180;
            setRotate(angle);
        });
    }, [rotate]);
    return (
        <div className='relative w-full min-h-screen cursor-pointer bg-[#CDEA68]'>
            <div className='text pt-32'>
                {
                    ['Ready', 'to Start', 'the Project?'].map((item, idx) => (
                        <h1 className='text-[22vh] font-extrabold uppercase text-center tracking-tighter leading-none'>{item}</h1>
                    ))
                }
            </div>
            <div className="absolute top-[35%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                <div className="bg-white h-[24vh] w-[24vh] rounded-full flex justify-center items-center gap-10">
                    <div className="relative bg-zinc-800 h-[58%] w-[58%] rounded-full ">
                        <span className="text-zinc-100 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase">
                            play
                        </span>
                        <div
                            style={{
                                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                            }}
                            className={`w-full line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}
                        >
                            <div className="bg-white h-[20px] w-[20px] mx-1 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[24vh] w-[24vh] rounded-full flex justify-center items-center gap-10">
                    <div className="relative bg-zinc-800 h-[58%] w-[58%] rounded-full ">
                        <span className="text-zinc-100 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase">
                            play
                        </span>
                        <div
                            style={{
                                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                            }}
                            className={`w-full line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}
                        >
                            <div className="bg-white h-[20px] w-[20px] mx-1 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-12 pb-10">
                <a href="https://github.com/piyush289kumar" target="_blank" className='bg-zinc-800 px-6 py-4 text-md rounded-full text-white uppercase flex items-center justify-between gap-8'>UI Clone By - Piyush Kumar Raikwar
                    <FaGithub size={35} />
                </a>
            </div>
        </div>
    )
}
export default Footer