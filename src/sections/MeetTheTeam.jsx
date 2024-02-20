
const images=['/assets/Aarushi.png', '/assets/Akshaya.png', '/assets/Animish.png', '/assets/Tony.png']

const MeetTheTeam = () => {
    return (
        <section className="flex flex-col justify-center w-full min-h-screen gap-10 max-container">
            <div className=" ">
                <h1> &lt;Meet the Team &gt;</h1>
            </div>

            {/* <div className="flex felx-col justify-center w-full min-h-screen"> */}
                <div className="" style={{ display: "flex", flexWrap: "wrap"}}>
                    <div className='imageContainer1' style={{flexBasis:"calc(33.33% - 20px);"}}>
                        <img src="/assets/Aarushi.png" alt="" style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '15vw',
                            // height:'20vh',

                            // height: '60px',
                        }} />
                    </div>

                    <div className='imageContainer1' style={{flexBasis:"calc(33.33% - 20px);"}}>
                        <img src="/assets/Akshaya.png" alt="" style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '20vw',
                            // height:'20vh',

                            // height: '60px',
                        }} />
                    </div>
                    <div className='imageContainer1' style={{flexBasis:"calc(33.33% - 20px);"}}>
                        <img src="/assets/Animish.png" alt="" style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '20vw',
                            // height:'auto',

                            // height: '60px',
                        }} />
                    </div>
                    <div className='imageContainer1' style={{flexBasis:"calc(33.33% - 20px);"}}>
                        <img src="/assets/Tony.png" alt="" style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '20vw',
                            // height:'20vh'
                            // height: '60px',
                        }} />
                    </div>

                </div>
            {/* </div> */}
        </section>
    )
}
export default MeetTheTeam;