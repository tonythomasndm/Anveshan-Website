import LocomotiveScroll from 'locomotive-scroll';
import BannerComponent from './sections/Slider';
import{
  Navbar,
  Hero,
  AboutUs,
  Timeline,
  Collaborations,
  MeetTheTeam, 
  Footer
} from './sections';

const App= () =>(
  <main className="relative">
    <section className='bg-black'>
    <Navbar/>
    </section>
    
    <section className="xl:padding-l wide:padding-r padding-b  bg-black">
    <Hero/>
    </section>
    <BannerComponent/>
    <section className="padding  bg-black">
    <AboutUs/>
    </section>
    <section className='padding  bg-black'>
    <Timeline/>
    </section>
    <section className='w-full py-16 sm:py-32 padding-x  bg-black'>
    <Collaborations/>
    </section>
    <section className='padding bg-black'>
    <MeetTheTeam/>
    </section>
    <section className='pb-8 bg-[#191919] padding-x padding-t'>
    <Footer/>
    </section>
    
  </main>
)
export default App;


























// import * as React from "react";


// const App= () =>{
//   return (
//     <div className="flex flex-col pt-12 bg-black">
//       <div className="flex flex-col px-5 mt-7 w-full max-md:max-w-full">
//         <div className="flex flex-col self-center w-full max-w-[1608px] max-md:max-w-full">
//           <div className="flex gap-5 justify-between w-full text-3xl font-semibold tracking-wider text-white max-md:flex-wrap max-md:max-w-full">
//             <div className="flex gap-5 justify-between self-start whitespace-nowrap">
//               <div>About</div>
//               <div className="flex-auto">Timeline</div>
//             </div>
//             <div className="flex-auto">Contact Us</div>
//           </div>
//           <div className="flex gap-5 justify-between mt-60 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//             <div className="flex flex-col flex-1 font-medium max-md:max-w-full">
//               <div className="text-9xl text-cyan-100 leading-[106px] max-md:max-w-full max-md:text-4xl max-md:leading-9">
//                 Anveshan
//                 <br />
//                 Hackathon
//               </div>
//               <div className="mt-20 text-4xl text-cyan-300 max-md:mt-10 max-md:max-w-full">
//                 &lt;date&gt; 7-9 March 2024 &lt;/date&gt;
//                 <br />
//                 <br />
//                 &lt;venue&gt; C01 Old Academic Building &lt;/venue&gt;
//               </div>
//             </div>
//             <div className="flex flex-col flex-1 self-start pb-5 text-3xl rounded border border-solid backdrop-blur-[10px] bg-stone-300 bg-opacity-0 border-zinc-800 max-md:max-w-full">
//               <div className="justify-center py-5 font-medium text-white bg-zinc-900 leading-[300%] max-md:max-w-full">
//                 {" "}
//                 Windows Installation Service
//               </div>
//               <div className="self-start mt-6 ml-4 font-light leading-8 text-zinc-400 max-md:max-w-full">
//                 {" "}
//                 Unzipping Files ... 100%
//                 <br /> Unpacking Objects ... 100%
//                 <br /> Downloading Dependencies ... 100%
//                 <br /> Creating Directories ... 100%
//                 <br /> Moving Files ... 100%
//                 <br /> Installing Anveshan 3.0 100%
//                 <br /> Setting up Team Config Files 100%
//                 <br /> <br /> Anveshan 3.0 Installed Successfully
//                 <br />
//               </div>
//             </div>
//           </div>
//           <div className="justify-center self-start px-16 py-5 mt-24 text-4xl font-medium text-center text-black whitespace-nowrap bg-cyan-100 rounded-[300px] max-md:pr-5 max-md:pl-6 max-md:mt-10">
//             Register
//           </div>
//         </div>
//         <div className="justify-center py-3 mt-72 w-full text-4xl font-medium bg-neutral-100 text-stone-950 max-md:mt-10 max-md:max-w-full">
//           &lt;section&gt; &lt;/section&gt; &lt;div&gt; &lt;/div&gt; &lt;h1&gt;
//           &lt;/h1&gt; &lt;article&gt;&lt;/article&gt;&lt;section&gt;
//           &lt;/section&gt; &lt;div&gt; &lt;/div&gt; &lt;h1&gt; &lt;/h1&gt;
//           &lt;article&gt;&lt;/article&gt;&lt;
//         </div>
//         <div className="mt-1.5 w-full max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//             <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="w-full aspect-[1.56] max-md:max-w-full"
//                 />
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="w-full aspect-[1.69] max-md:max-w-full"
//                 />
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="w-full aspect-[1.67] max-md:max-w-full"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col self-stretch px-20 py-12 my-auto w-full rounded border border-solid backdrop-blur-[20px] bg-stone-300 bg-opacity-0 border-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//                 <div className="mt-16 text-9xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//                   &lt;About Us&gt;
//                 </div>
//                 <div className="mt-20 text-2xl leading-7 text-white max-md:mt-10 max-md:max-w-full">
//                   Anveshan, the premier hackathon organized by IIIT-Delhi's five
//                   esteemed research centers, invites students to embark on a
//                   journey of innovation and problem-solving from January 6-8,
//                   2023. This student-driven event offers a platform to tackle
//                   real-life challenges across various domains, fostering a
//                   culture of creativity and collaboration. With the guidance and
//                   mentorship provided by experienced members of the research
//                   centers, participants will have the opportunity to exchange
//                   knowledge, refine their ideas, and explore cutting-edge
//                   solutions. Anveshan not only provides financial support for
//                   project expenses but also grants access to state-of-the-art
//                   lab facilities and on-campus accommodation, enabling teams to
//                   fully immerse themselves in the hackathon experience. Join us
//                   at Anveshan as we celebrate innovation, creativity, and the
//                   spirit of exploration, shaping the future of technology one
//                   idea at a time.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>{" "}
//         <div className="justify-center py-5 pr-3.5 text-4xl font-medium bg-white text-stone-950 max-md:max-w-full">
//           &lt;section&gt; &lt;/section&gt; &lt;div&gt; &lt;/div&gt; &lt;h1&gt;
//           &lt;/h1&gt; &lt;article&gt;&lt;/article&gt;&lt;section&gt;
//           &lt;/section&gt; &lt;div&gt; &lt;/div&gt; &lt;h1&gt; &lt;/h1&gt;
//           &lt;article&gt;&lt;/article&gt;&lt;
//         </div>{" "}
//         <div className="self-start mt-48 ml-24 text-9xl font-bold tracking-[3.58px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//           &lt;Timeline&gt;
//         </div>{" "}
//         <div className="flex justify-center items-center px-16 mt-56 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
//           <div className="w-full max-w-[1488px] max-md:max-w-full">
//             <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//               <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow text-2xl font-semibold text-center text-white max-md:mt-10">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2752436f0ba9df29d98db16aff93fba2b64235e29072f36935fe939c1966d95?"
//                     className="self-center max-w-full aspect-square w-[200px]"
//                   />{" "}
//                   <div className="mt-3.5">
//                     <span className="text-3xl">22 Feb 2024</span>
//                     <br />
//                     <span className="">Shortlisted Team Announced</span>
//                   </div>
//                 </div>
//               </div>{" "}
//               <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow text-2xl font-semibold text-center text-white max-md:mt-10">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2752436f0ba9df29d98db16aff93fba2b64235e29072f36935fe939c1966d95?"
//                     className="self-center max-w-full aspect-square w-[200px]"
//                   />{" "}
//                   <div className="mt-3.5">
//                     <span className="text-3xl">22 Feb 2024</span>
//                     <br />
//                     <span className="">Shortlisted Team Announced</span>
//                   </div>
//                 </div>
//               </div>{" "}
//               <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow text-2xl font-semibold text-center text-white max-md:mt-10">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2752436f0ba9df29d98db16aff93fba2b64235e29072f36935fe939c1966d95?"
//                     className="self-center max-w-full aspect-square w-[200px]"
//                   />{" "}
//                   <div className="mt-3.5">
//                     <span className="text-3xl">7-9 Mar 2024</span>
//                     <br />
//                     <span className="">Offline Hackathon</span>
//                   </div>
//                 </div>
//               </div>{" "}
//               <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow text-2xl font-semibold text-center text-white max-md:mt-10">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2752436f0ba9df29d98db16aff93fba2b64235e29072f36935fe939c1966d95?"
//                     className="self-center max-w-full aspect-square w-[200px]"
//                   />{" "}
//                   <div className="mt-3.5">
//                     <span className="text-3xl">10 Mar 2024</span>
//                     <br />
//                     <span className="">Results and Award Ceremony</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>{" "}
//         <div className="mt-64 w-full text-9xl text-zinc-400 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//           &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
//         </div>
//       </div>{" "}
//       <div className="flex flex-col self-end mt-72 mr-40 max-w-full text-3xl font-bold tracking-wider text-white w-[1164px] max-md:mt-10 max-md:mr-2.5">
//         <div className="flex flex-col max-w-full w-[258px]">
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="self-center max-w-full aspect-[0.92] w-[173px]"
//           />{" "}
//           <div className="mt-14 max-md:mt-10">
//             Centre of New Design and Media
//           </div>
//         </div>{" "}
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="z-10 self-end mt-0 mr-20 max-w-full aspect-[1.89] w-[209px] max-md:mt-0 max-md:mr-2.5"
//         />{" "}
//         <img
//           loading="lazy"
//           srcSet="..."
//           className="self-center mt-0 max-w-full aspect-[3.33] w-[245px]"
//         />{" "}
//         <div className="self-center mt-28 w-[306px] max-md:mt-10">
//           Center of Excellence in Healthcare
//         </div>{" "}
//         <div className="z-10 self-end mt-0 w-[330px]">
//           Indraprastha institute of Information Technology, Delhi
//         </div>
//       </div>{" "}
//       <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
//         <div className="flex flex-col self-center px-5 w-full max-w-[1448px] max-md:max-w-full">
//           <div className="self-center ml-24 max-w-full w-[798px]">
//             <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//               <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow items-start text-3xl font-bold tracking-wider text-white max-md:mt-10">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="max-w-full aspect-[0.98] w-[228px]"
//                   />{" "}
//                   <div className="mt-14 ml-4 max-md:mt-10 max-md:ml-2.5">
//                     Human Centered Design
//                   </div>
//                 </div>
//               </div>{" "}
//               <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow mt-16 text-3xl font-bold tracking-wider text-white max-md:mt-10">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="w-full aspect-[2.44]"
//                   />{" "}
//                   <div className="self-start mt-16 ml-4 max-md:mt-10 max-md:ml-2.5">
//                     Centre for Intelligent Product Development
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>{" "}
//           <div className="self-start mt-96 text-9xl font-bold tracking-[3.58px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//             &lt;Meet the team&gt;
//           </div>{" "}
//           <div className="mt-48 max-md:mt-10 max-md:max-w-full">
//             <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
//               <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow mt-1 text-4xl font-bold tracking-wider text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="w-full border border-white border-solid aspect-[0.96] max-md:max-w-full"
//                   />{" "}
//                   <div className="justify-center self-center px-8 py-4 bg-zinc-300 max-md:px-5">
//                     Tony Thomas
//                   </div>
//                 </div>
//               </div>{" "}
//               <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                 <img
//                   loading="lazy"
//                   srcSet="..."
//                   className="grow w-full aspect-[0.87] max-md:mt-10 max-md:max-w-full"
//                 />
//               </div>{" "}
//               <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col grow text-4xl font-bold tracking-wider text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
//                   <img
//                     loading="lazy"
//                     srcSet="..."
//                     className="w-full aspect-[0.99] max-md:max-w-full"
//                   />{" "}
//                   <div className="justify-center self-center px-6 py-5 bg-zinc-300 max-md:pl-5">
//                     Animish Yadav
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>{" "}
//           <img
//             loading="lazy"
//             srcSet="..."
//             className="mt-40 max-w-full aspect-[0.9] w-[435px] max-md:mt-10"
//           />
//         </div>{" "}
//         <div className="flex flex-col items-center px-20 py-12 mt-72 w-full text-white bg-zinc-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 justify-between items-start mt-10 w-full max-w-[1460px] max-md:flex-wrap max-md:max-w-full">
//             <div className="flex flex-col flex-1 mt-7 font-bold">
//               <div className="text-4xl tracking-widest leading-[56.16px]">
//                 Anveshan
//               </div>{" "}
//               <div className="mt-8 text-base tracking-wider leading-6">
//                 IIIT Delhi, Okhla Industrial,Phase-III, New Delhi-110020
//               </div>
//             </div>{" "}
//             <div className="flex flex-col text-base tracking-widest whitespace-nowrap basis-0">
//               <div className="font-bold uppercase leading-[187.5%]">
//                 SOCIALS
//               </div>{" "}
//               <div className="mt-6 leading-8">
//                 WhatsApp
//                 <br />
//                 LinkedIn
//                 <br />
//                 Facebook
//                 <br />
//                 YouTube
//                 <br />
//                 Twitter
//               </div>
//             </div>{" "}
//             <div className="flex flex-col flex-1 text-base tracking-widest leading-8 whitespace-nowrap">
//               <div className="font-bold uppercase">Contact Us</div>{" "}
//               <div className="mt-9">hcddept@iiitd.ac.in</div>
//             </div>{" "}
//             <img
//               loading="lazy"
//               srcSet="..."
//               className="self-stretch max-w-full shadow-sm aspect-[1.37] w-[353px]"
//             />
//           </div>{" "}
//           <div className="self-stretch mt-28 ml-5 w-full h-0.5 bg-neutral-400 max-md:mt-10" />{" "}
//           <div className="mt-5 mb-7 text-2xl font-bold tracking-wider leading-[55.92px] max-md:max-w-full">
//             © 2024 Anveshan. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;