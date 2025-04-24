import { assets } from "../assets/assets";
import { motion } from "motion/react";

function Hero() {
  const divVariants = {
    hidden: { x: 0 },
    visible: { x: "100vw", transition: { duration: 1, delay: 0.5 } },
  };
  const textVariants = {
    hidden: { y: "20vh" },
    visible: { y: 0, transition: { delay: 0.9, type: "tween" } },
  };
  return (
    <section>
      <div className="px-[10%] py-8 flex flex-col gap-5 items-center text-center ">
        <div className="relative overflow-hidden">
          <motion.div
            className="w-full h-full bg-sky-600 absolute"
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          ></motion.div>
          <img
            src={assets.heroImage}
            className="sm:w-[240px] w-[200px] sm:h-[240px] h-[200px] rounded-full"
            alt=""
          />
        </div>
        <h1 className="relative overflow-hidden sm:leading-[70px] text-[30px] sm:text-[65px] font-[600] lg:w-[65%]">
          <motion.div
            className="w-full h-full bg-sky-600 absolute z-10"
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          ></motion.div>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <span className="text-sky-600">I'm Ahmed Ramadan,</span> frontend
            developer based in EGP.
          </motion.h1>
        </h1>
        <p className="lg:w-1/2 text-[18px] sm:leading-[30px] relative overflow-hidden">
          <motion.div
            className="w-full h-full bg-sky-600 absolute z-10"
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          ></motion.div>
          <motion.p variants={textVariants} initial="hidden" animate="visible">
            based in USA. I am a frontend developer from California, USA with 10
            years of experience in multiple companies like Microsoft, Tesla and
            Apple.
          </motion.p>
        </p>
        <div className="flex gap-6 ">
          <div className="relative overflow-hidden">
            <motion.div
              className="w-full h-full bg-sky-600 absolute z-10"
              variants={divVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>
            <motion.button
              className=" py-[15px] px-5 sm:text-base text-sm rounded-2xl sm:rounded-4xl bg-sky-600"
              whileTap={{ scale: 0.9 }}
            >
              Show My Work
            </motion.button>
          </div>
          <div className="relative overflow-hidden">
            <motion.div
              className="w-full h-full bg-sky-600 absolute z-10"
              variants={divVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>
            <motion.button
              className="py-[15px] px-5 rounded-2xl sm:rounded-4xl sm:text-base text-sm border border-white text-white"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
            >
              Download CV
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
