import React, { useEffect, useState } from "react";
function PlaySection() {
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
        <div className="w-full h-screen overflow-hidden">
            <div className='relative w-full h-screen cursor-pointer bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className="absolute top-[35%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                    <div className="bg-white h-[30vh] w-[30vh] rounded-full flex justify-center items-center gap-10">
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
                    <div className="bg-white h-[30vh] w-[30vh] rounded-full flex justify-center items-center gap-10">
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
            </div>
        </div>
    );
}
export default PlaySection;
