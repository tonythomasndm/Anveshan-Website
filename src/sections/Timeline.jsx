const Timeline = () =>{
    return (
        <section  id="timeline" className="flex flex-col justify-center w-full max-container">
            <h1 className='heading'>&lt;Timeline&gt;</h1>
            <img src="/assets/timeline.png" className="max-sm:hidden" alt="" />
            <img src="/assets/mobile-view.png" className="sm:visible p-20 object-contain"/>
        </section>
    )
}
export default Timeline;