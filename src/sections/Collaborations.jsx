import React from 'react';


const images = ['/assets/cdnm-asset.png', '/assets/cipd-asset.png', '/assets/coehe-asset.png', '/assets/hcd-asset.png', '/assets/iiitd-asset.png']

const Collaborations = () =>{
    return (
        <section  id="collaborations" className="flex flex-col justify-center w-full max-container">
            <h1 className='heading text-transparent text-stroke'>&lt;Our Collaborations&gt;</h1>
            <div className='flex flex-row justify-center flex-wrap w-full gap-10'>
                {images.map((image,index) => <div>
                    <img src={image} className="w-72" alt="Image not found" />
                </div>)}
            </div>
        </section>
    )
}
export default Collaborations;
//done