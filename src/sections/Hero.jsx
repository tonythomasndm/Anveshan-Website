
const Hero = () => {
    return (
        <section className="flex flex-col justify-center w-full min-h-screen pt-8 max-sm:pt-4 ">
            <div className="">
                <div className="md:grid md:grid-cols-12 md:gap-4">
                    <div className="flex flex-col justify-items-start col-span-8 p-20 justify-start w-full xl:w-3/5 max-xl:padding-x">
                        <div className="flex flex-row items-center col-span-8 justify-start w-full xl:w-3/5 max-xl:padding-x">
                            <h1 className="mt-10 md:text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-[#D3FAFF]">
                                Anveshan Hackathon</h1>
                            <h1 className="mt-10 text-[192px] text-[#5DECFF] max-sm:text-[72px] max-sm:leading-[82px] font-bold">3.0</h1>
                        </div>

                        <div className="padding-x flex flex-col font-semibold w-full min-w-fit text-2xl" >
                            <p className="text-[#5DECFF]">&lt;date&gt; 7-9 March, 2024 &lt;/date&gt;</p>
                            
                        </div>
                        <div className="padding-y">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdatwPAdtTCnjyaJY4L5rh1dcShMCTiOjZS1CBnZp2FGhOQxg/viewform" target="_blank"><div className=" button flex justify-center max-w-[7px] rounded-full text-black font-bold mt-2 bg-[#D3FAFF] py-8 pt-2 pb-2">Register</div></a>
                        </div>

                    </div>

                    <div className='col-span-4 p-20 hidden md:block'>
                        <img src="/assets/bck11.png" alt="" className=' w-1/4 absolute translate-y-24 z-100'/>
                        <img src="/assets/bck22.png" alt="" className=' absolute w-auto translate-x-[-4rem] translate-y-36 h-72 overflow-x-clip p-0'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;