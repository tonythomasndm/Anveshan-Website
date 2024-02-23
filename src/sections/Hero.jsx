import BlinkingText from "./BlinkingText";

const Hero = () => {
   

    return (
        <section className="flex flex-col justify-center w-full min-h-screen pt-8 max-sm:pt-4 ">
            <div className="mt-16 sm:mt-20">
                <div className="md:grid md:grid-cols-12 md:gap-4">
                    <div className="flex flex-col justify-items-start col-span-8 p-4 md:p-20 justify-start w-full xl:w-3/5 max-xl:px-4">
                        <div className="flex flex-col md:flex-row items-center col-span-8 justify-start w-full xl:w-3/5">
                            <h1 className="mt-4 md:mt-10 text-6xl md:text-8xl max-sm:text-xl max-sm:leading-tight font-bold text-[#D3FAFF]">
                                Anveshan Hackathon
                            </h1>
                            <h1 className="mt-4 md:mt-10 text-6xl md:text-[192px] text-[#5DECFF] max-sm:text-3xl max-sm:leading-tight font-bold">3.0</h1>
                        </div>
                        <div className="p-4 md:p-0 flex flex-col font-semibold w-full text-2xl items-center mt-8">
                            <p className="text-[#5DECFF] mb-7">&lt;date&gt; 7-9 March, 2024 &lt;/date&gt;</p>
                            <BlinkingText/>
                        </div>
                        
                        <div className="flex  flex-row justify-content items-center self-center md:self-start padding-x">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdatwPAdtTCnjyaJY4L5rh1dcShMCTiOjZS1CBnZp2FGhOQxg/viewform" target="_blank">
        <div className="m-4 md:m-20 button rounded-full text-black font-bold mt-2 bg-[#D3FAFF] py-4 px-6 inline-block">Register</div>
    </a>
</div>

                    </div>
                    <div className='col-span-4 pl-20 hidden md:block'>
                        <img src="/assets/bck11.png" alt="" className=' w-1/4 absolute translate-y-24 z-100'/>
                        <img src="/assets/bck22.png" alt="" className=' absolute w-auto translate-x-[-4rem] translate-y-36 h-72 overflow-x-clip p-0'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;
