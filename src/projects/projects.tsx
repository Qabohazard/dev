import './projects.css'

export default function MyProject() {
  return (
    <div className="projects pt-10 pb-8 h-auto">
      <h1 className="text-white text-center text-xl text-[24px] xl:text-[36px] ">I've been building a lot of things</h1>
      <p className="text-white text-center xl:pb-20 xl:text-[24px]">Come explore the fruits of my labor, from small experiments to full-blown web applications,
        each project showcases my love for coding and design.</p>

      <div className="pt-4 project-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4">
        {/* Project Card 1 */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
          <img src="/images/project.png" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-white text-lg font-bold">Project One</h2>
            <p className="text-gray-400 mt-2">Description of the first project, highlighting its features and purpose.</p>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
         <img src="/images/project.png" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-white text-lg font-bold">Project Two</h2>
            <p className="text-gray-400 mt-2">Description of the second project, highlighting its features and purpose.</p>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
        <img src="/images/project.png" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-white text-lg font-bold">Project Three</h2>
            <p className="text-gray-400 mt-2">Description of the third project, highlighting its features and purpose.</p>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
         <img src="/images/project.png" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-white text-lg font-bold">Project Four</h2>
            <p className="text-gray-400 mt-2">Description of the fourth project, highlighting its features and purpose.</p>
          </div>
        </div>
       
          
      </div>
    </div>
  );
}
