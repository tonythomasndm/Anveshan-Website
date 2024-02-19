

const Navbar = () =>{
    return (
        <header className="absolute z-10 w-full py-12 padding-x">
            <nav className="flex items-center justify-evenly max-container font-semibold text-lg leading-normal max-lg:hidden">
                <a href="#about"><h1>About</h1></a>
                <a href="#timeline"><h1>Timeline</h1></a>
                <a href="#collaborations"><h1>Collaborations</h1></a>
                <a href="#contact-us"><h1>Contact Us</h1></a>
            </nav>
        </header>
    )
}

export default Navbar;