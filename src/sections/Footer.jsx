const Footer = () => {
    return (
        <footer id="contact-us" className="flex flex-col justify-center w-full gap-10 xl:flex-row max-container">
            <div className="flex flex-col flex-wrap items-center justify-center w-full  gap-1 ">

                <div className="flex flex-row flex-wrap justify-between w-full gap-1 p-10 max-md:flex-row max-md:gap-4">

                    <div className="flex flex-col flex-wrap ">
                        <h2 className="text-2xl font-semibold tracking-wide text-white mt-4">Anveshan 3.0</h2>
                        <p clasName>IIIT Delhi, Okhla Industrial,Phase-III, New Delhi-110020</p>

                    </div>

                    <div className="flex flex-col flex-wrap justify-center">
                        <h4 className="font-semibold">
                            SOCIALS
                        </h4>
                        <ul>
                            <li><a href="https://www.linkedin.com/company/iiitdcdnm/" target="_blank">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/iiitdcdnm/" target="_blank">Instagram</a></li>
                            <li><a href="https://www.youtube.com/@iiitdcdnm" target="_blank">YouTube</a></li>
                            <li><a href="https://twitter.com/iiitdcdnm" target="_blank">Twitter</a></li>
                        </ul>
                    </div >
                    
                    <div className="flex flex-col flex-wrap ">
                        <h4 className="font-semibold">CONTACT US</h4>

                        <a href="mailto:Anveshan@iiitd.ac.in" target="_blank"><p className="text-white">anveshan@iiitd.ac.in</p></a>

                    </div>


                </div>

                {/* <p className="flex flex-wrap mt-6 mb-3 text-white ">Privacy Policy | Terms of Use | Payment & Refund </p> */}
                <hr className="w-full border-1.75 border-white mt-12" />
                <p className="flex flex-wrap mt-3 font-semibold tracking-wider text-white">© 2024 | Anveshan. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;