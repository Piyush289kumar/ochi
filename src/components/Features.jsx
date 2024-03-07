import React, { useState } from "react";

function Features() {
    const [dynamicText, setDynamicText] = useState("");

    return (
        <div className="w-full py-20 bg-zinc-100">
            <div className="w-full border-b-[1.5px] border-zinc-400 pb-8 px-10">
                <h1 className="text-[8vh]">Featured projects</h1>
            </div>

            <div className="w-full px-10 pt-14 flex items-center justify-center gap-10 bg-zinc-100 relative">
                <div className="text absolute top-[57%] left-1/2 -translate-x-[50%] -translate-y-[50%]">                
                        <h1 className="z-[4] uppercase text-[15vh] tracking-tight font-bold text-[#cdea68]">
                            {dynamicText}
                        </h1>
                </div>

                <div className="w-1/2">
                    <div className="flex gap-5 items-center">
                        <div className="bg-zinc-800 rounded-full w-[12px] h-[12px]"></div>
                        <p>FYDE</p>
                    </div>
                    <div className="w-full mt-7 rounded-xl overflow-hidden">
                        <img
                            onMouseEnter={() => setDynamicText("FYDE")}
                            onMouseLeave={() => setDynamicText("")}
                            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                            alt="Images"
                            className="cursor-pointer"
                        />
                    </div>
                    <div className='flex items-center'>
                        {['audio', 'copywriting', 'sales deck', 'slides design'].map((item, idx) => (
                            <p key={idx} className='border-[1px] border-zinc-900 mt-4 mr-3 px-4 py-1 text-sm uppercase rounded-3xl'>{item}</p>
                        ))}

                    </div>
                </div>

                <div className="w-1/2">
                    <div className="flex gap-5 items-center">
                        <div className="bg-zinc-800 rounded-full w-[12px] h-[12px]"></div>
                        <p>VISE</p>
                    </div>
                    <div className="w-full mt-7 rounded-xl overflow-hidden">
                        <img
                            onMouseEnter={() => setDynamicText("VISE")}
                            onMouseLeave={() => setDynamicText("")}
                            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                            alt="Images"
                            className="cursor-pointer"
                        />
                    </div>
                    <div className='flex items-center'>
                        {['agency', 'company presentation'].map((item, idx) => (
                            <p key={idx} className='border-[1px] border-zinc-900 mt-4 mr-3 px-4 py-1 text-sm uppercase rounded-3xl'>{item}</p>
                        ))}

                    </div>
                </div>
            </div>


            <div className="w-full px-10 pt-14 flex items-center justify-center gap-10 bg-zinc-100 relative">
                <div className="text absolute top-[57%] left-1/2 -translate-x-[50%] -translate-y-[50%]">                
                        <h1 className="z-[4] uppercase text-[15vh] tracking-tight font-bold text-[#cdea68]">
                            {dynamicText}
                        </h1>
                </div>

                <div className="w-1/2">
                    <div className="flex gap-5 items-center">
                        <div className="bg-zinc-800 rounded-full w-[12px] h-[12px]"></div>
                        <p>TRAWA</p>
                    </div>
                    <div className="w-full mt-7 rounded-xl overflow-hidden">
                        <img
                            onMouseEnter={() => setDynamicText("TRAWA")}
                            onMouseLeave={() => setDynamicText("")}
                            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                            alt="Images"
                            className="cursor-pointer"
                        />
                    </div>
                    <div className='flex items-center'>
                        {['audio', 'copywriting', 'sales deck', 'slides design'].map((item, idx) => (
                            <p key={idx} className='border-[1px] border-zinc-900 mt-4 mr-3 px-4 py-1 text-sm uppercase rounded-3xl'>{item}</p>
                        ))}

                    </div>
                </div>

                <div className="w-1/2">
                    <div className="flex gap-5 items-center">
                        <div className="bg-zinc-800 rounded-full w-[12px] h-[12px]"></div>
                        <p>PREMIUM BLEND</p>
                    </div>
                    <div className="w-full mt-7 rounded-xl overflow-hidden">
                        <img
                            onMouseEnter={() => setDynamicText("PREMIUM BLEND")}
                            onMouseLeave={() => setDynamicText("")}
                            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                            alt="Images"
                            className="cursor-pointer"
                        />
                    </div>
                    <div className='flex items-center'>
                        {['agency', 'company presentation'].map((item, idx) => (
                            <p key={idx} className='border-[1px] border-zinc-900 mt-4 mr-3 px-4 py-1 text-sm uppercase rounded-3xl'>{item}</p>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
