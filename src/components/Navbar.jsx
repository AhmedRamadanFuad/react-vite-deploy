import { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <nav className="">
      <div className="px-[10%] py-5 flex justify-between items-center">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold"
        >
          AHMED
        </motion.h1>
        <motion.img
          className="md:hidden w-[30px] cursor-pointer"
          src={assets.menuOpen}
          alt=""
          onClick={() => setOpenMenu(true)}
        />
        <motion.ul
          className={`${
            openMenu ? "max-md:right-0" : "max-md:right-[-100%]"
          } flex gap-10 max-md:gap-2 max-md:fixed top-0 max-md:w-[300px] max-md:bg-neutral-800 max-md:h-screen max-md:px-5 max-md:py-5 max-md:flex-col max-md:z-50`}
          // animate={{ right: openMenu ? 0 : "-100%" }}
          // initial={{ opacity: 0, y: 20 }}
          animate={{ right: openMenu ? 0 : "-100%" }}
          transition={{
            duration: 0.3,
          }}
          // transition={{ duration: 0.3 }}
        >
          <img
            className="md:hidden w-[30px] cursor-pointer mb-5 ml-auto"
            src={assets.menuClose}
            alt=""
            onClick={() => setOpenMenu(false)}
          />
          <li className="max-md:hover:bg-neutral-700 max-md:px-2 max-md:py-3 max-md:rounded-lg md:hover:text-sky-600 transition duration-300">
            <a className="w-full h-full block" href="">
              Home
            </a>
          </li>
          <li className="max-md:hover:bg-neutral-700 max-md:px-2 max-md:py-3 max-md:rounded-lg md:hover:text-sky-600 transition duration-300">
            <a className="w-full h-full block" href="">
              About Me
            </a>
          </li>
          <li className="max-md:hover:bg-neutral-700 max-md:px-2 max-md:py-3 max-md:rounded-lg md:hover:text-sky-600 transition duration-300">
            <a className="w-full h-full block" href="">
              Services
            </a>
          </li>
          <li className="max-md:hover:bg-neutral-700 max-md:px-2 max-md:py-3 max-md:rounded-lg md:hover:text-sky-600 transition duration-300">
            <a className="w-full h-full block" href="">
              Skills
            </a>
          </li>
          <li className="max-md:hover:bg-neutral-700 max-md:px-2 max-md:py-3 max-md:rounded-lg md:hover:text-sky-600 transition duration-300">
            <a className="w-full h-full block" href="">
              Projects
            </a>
          </li>
          <button className="block md:hidden py-[15px] px-5 rounded-2xl bg-sky-600 cursor-pointer">
            Connect With Me
          </button>
        </motion.ul>
        <motion.button
          className="max-[900px]:hidden block py-[15px] px-5 rounded-4xl bg-sky-600 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Connect With Me
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
