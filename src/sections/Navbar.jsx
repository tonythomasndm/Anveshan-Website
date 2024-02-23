
import Anveshan_guidelines from '../../public/assets/Overview Anveshan 3.0 at IIIT-Delhi.pdf';

const Navbar = () =>{
    return (
        <header className="absolute flex flex-row  z-10 w-full py-12 padding-x">
            <nav className="flex items-center justify-evenly max-container font-semibold text-lg leading-normal ">
                <a href="#about" className='max-md:hidden'><h1>About</h1></a>
                <a href="#timeline" className='max-md:hidden'><h1>Timeline</h1></a>
                <a href="#collaborations" className='max-md:hidden'><h1>Collaborations</h1></a>
                <a href="#contact-us" ><h1>Contact Us</h1></a>
                <a href="https://iiitd.ac.in/anveshan/" target="_blank"><h1>Anveshan 2.0</h1></a>
                <a href={Anveshan_guidelines} download="anveshan_guidelines" className='bg-white font-bold p-2 max-sm:p-4 rounded-2xl'><h1 className='text-black'>Guidelines</h1></a>
                
            </nav>
        </header>
    )
}

export default Navbar;

// done