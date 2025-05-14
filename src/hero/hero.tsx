import './hero.css'

export default function HeroSection() {
    return (


        <div className="  h-auto w-full hero-section  flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4 px-4 py-10 animate-fade-in">

        {/* Owner Section */}
        <div className="owner animate-fade-in-down animation-delay-200 flex flex-col items-center xl:items-start">
          <img src="/images/owner-image.png" alt="Owner" className="w-32 h-32 md:w-48 md:h-48 xl:w-64 xl:h-auto rounded-lg shadow-xl transition-transform duration-700 hover:scale-105 " loading='lazy' />
          <figcaption className="text-white mt-4 text-center xl:text-left">ABDO | Software engineer | Ethiopia</figcaption>
        </div>
      
        {/* Description Section */}
        <div className=" description text-center text-white animate-fade-in-up animation-delay-500 mt-10 xl:mt-0 flex flex-col items-center xl:items-start">
          <h1 className="   text-[30px] lg:text-[52px] max-w-3xl text-zinc-50 md:leading-tight transition-opacity duration-1000 animate-fade-in">
            I'm ABDO Mohammed, a  <span> software engineer</span> that rarely writes code.
          </h1>
          <p className="text-zinc-400 text-sm md:text-base xl:text-lg max-w-2xl mt-4 md:mt-8 md:leading-loose tracking-wide lg:text-xl lg:text-white transition-all duration-700 delay-500 ease-in-out">
            I am a versatile Full Stack Web and Mobile App Developer who builds responsive, high-performance digital solutions using tools like React, Node.js, MongoDB, and React Native—combining design and functionality from start to finish.
            <a href="#" className="text-orange-400 hover:underline ml-2 transition-colors duration-300"> read more</a>
          </p>
        </div>
      
      </div>
      


    )
}
