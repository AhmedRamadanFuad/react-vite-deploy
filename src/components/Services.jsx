import { assets, servicesData } from "../assets/assets";

function Services() {
  return (
    <section className="py-[70px] px-[10%] flex flex-col gap-[60px]">
      <h2 className="text-center text-[60px] font-[600]">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-7 ">
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="border-4 flex flex-col gap-2.5 p-8 rounded-[10px] border-neutral-800 hover:bg-neutral-800 transition duration-300"
          >
            <p className="font-semibold text-[22px]">0{item.id}</p>
            <h4 className="text-[30px] font-extrabold text-sky-600">
              {item.title}
            </h4>
            <p className="text-xl leading-[30px] text-neutral-400">
              {item.description}
            </p>
            {/* <button className="mt-5 flex gap-2.5 text-[#d4d4d4] hover:bg-neutral-700 w-fit py-1 px-2 rounded">
              Read More <img className="w-3.5" src={assets.arrowIcon} alt="" />
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
