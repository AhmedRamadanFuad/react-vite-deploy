import { projectsData } from "../assets/assets";

function Projects() {
  return (
    <section className="py-[70px] px-[10%] flex flex-col gap-[60px]">
      <h2 className="text-center text-[60px] font-[600]">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {projectsData.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-800 flex flex-col p-5 rounded-[20px] w-fit justify-self-center hover:scale-105 transition duration-300"
          >
            <div className="rounded-[20px] overflow-hidden">
              <img src={item.image} alt="" />
            </div>

            <h4 className="mt-5 text-lg">{item.title}</h4>

            <p className="text-neutral-400 mb-4">{item.description}</p>
            <div className="flex sm:gap-6 gap-4">
              <a
                className="block sm:px-3 px-2 sm:py-2 py-2 border rounded-[10px] text-sm sm:text-base"
                href="#"
              >
                Details
              </a>
              <a
                className="block sm:px-3 px-2 sm:py-2 py-2 bg-sky-600 rounded-[10px] text-sm sm:text-base"
                href="#"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
