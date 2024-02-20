import React, { useState, useEffect } from 'react';

const Hero = () => {
   

    return (
        <section className="flex flex-col justify-center w-full min-h-screen ">
            <div className="">
                <div className="md:grid md:grid-cols-12 md:gap-4">
                    <div className="flex flex-col justify-items-start col-span-8 p-20 justify-start w-full xl:w-3/5 max-xl:padding-x">
                        <div className="flex flex-row items-center col-span-8 justify-start w-full xl:w-3/5 max-xl:padding-x">
                            <h1 className="mt-10 md:text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                                Anveshan Hackathon</h1>
                            <h1 className="mt-10 text-[192px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">3.0</h1>
                        </div>

                        <div >
                            <p>Date- 7-9 March</p>
                            <p>Venue- Old Academic Building</p>
                        </div>


                        <div>
                        

                        </div>
                    </div>

                    <div className='col-span-4 p-20 hidden md:block'>
                        <img src="/assets/bck11.png" alt="" className='w-90'/>
                        <img src="/assets/bck22.png" alt="" className='w-90'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;