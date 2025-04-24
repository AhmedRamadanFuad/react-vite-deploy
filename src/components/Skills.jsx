import { skillsData } from "../assets/assets";

function Skills() {
  return (
    <section className="py-[70px] px-[10%] flex flex-col gap-[60px]">
      <h2 className="text-center text-[60px] font-[600]">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {skillsData.map((item) => (
          <div
            key={item.id}
            className=" flex bg-neutral-800 items-center gap-2.5 px-2.5 py-4 rounded-[12px] hover:bg-transparent border-4 border-neutral-800 transition duration-300"
          >
            <div className="w-[65px] h-[65px] p-[7px] rounded-[10px] flex items-center bg-neutral-800 justify-center">
              <img className="w-12" src={item.image} alt="" />
            </div>
            <div>
              <h4 className="text-lg text-sky-600">{item.title}</h4>
              <p className="text-sm text-neutral-400">{item.desctiption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
