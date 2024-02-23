const AboutUs = () => {
    return (
        <section id="about" className="flex justify-center items-center flex-row lg:justify-center w-full lg:items-start">
                        <img src="/assets/bck22.png" alt="" className='absolute w-auto translate-x-[-4rem] translate-y-36 h-72 overflow-x-clip p-0'/>
            <div className="flex flex-col items-start justify-center flex-1 w-full padding-x padding-y bg-[#050505] shadow-lg rounded-3xl min-h-[60%] m-20 sm:m-10 border-2 border-white">

                <h1 className="heading text-transparent text-stroke">&lt;AboutUs&gt;</h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mb-6'>
                    Anveshan, the premier hackathon organized by IIIT-Delhi's five
                    esteemed research centers, invites students to embark on a
                    journey of innovation and problem-solving from March 7-9,
                    2024. This student-driven event offers a platform to tackle
                    real-life challenges across various domains, fostering a
                    culture of creativity and collaboration. With the guidance and
                    mentorship provided by experienced members of the research
                    centers, participants will have the opportunity to exchange
                    knowledge, refine their ideas, and explore cutting-edge
                    solutions. Anveshan not only provides financial support for
                    project expenses but also grants access to state-of-the-art
                    lab facilities and on-campus accommodation, enabling teams to
                    fully immerse themselves in the hackathon experience. Join us
                    at Anveshan as we celebrate innovation, creativity, and the
                    spirit of exploration, shaping the future of technology one
                    idea at a time.
                </p>
            </div>
        </section>
    );
}

export default AboutUs;

// done