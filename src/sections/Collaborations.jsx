import React from 'react';


const images = ['/assets/cdnm-asset.png', '/assets/cipd-asset.png', '/assets/coehe-asset.png', '/assets/hcd-asset.png', '/assets/iiitd-asset.png']

const Collaborations = () =>{
    return (
        <section  id="collaborations" className="flex flex-col justify-center w-full min-h-screen gap-10 max-container">
            <h1 className=''>&lt;Our Collaborations&gt;</h1>
            <div className='flex flex-row justify-center flex-wrap w-4/5 min-h-screen gap-20'>
                {images.map((image,index) => <div>
                    <img src={image} className="w-80 max-lg:w-40" alt="Image not found" />
                </div>)}
            </div>
        </section>
    )
}
export default Collaborations;