
const images=['/assets/Aarushi.png', '/assets/Akshaya.png', '/assets/Animish.png', '/assets/Tony.png']

const MeetTheTeam = () => {
    return (
        <section className="flex flex-col justify-center w-full min-h-screen max-container">
        <h1 className='heading text-transparent text-stroke'>&lt;Meet the team&gt;</h1>
        <div className='flex flex-row justify-center flex-wrap w-full gap-10'>
            {images.map((image,index) => <div>
                <img src={image} className="w-72" alt="Image not found" />
            </div>)}
        </div>
        
    </section>
    )
}
export default MeetTheTeam;