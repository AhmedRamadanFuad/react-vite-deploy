import { assets } from "../assets/assets";
import { motion } from "motion/react";

function About() {
  const divVariants = {
    hidden: { x: 0 },
    visible: { x: "100vw", transition: { duration: 1, delay: 0.5 } },
  };
  const textVariants = {
    hidden: { y: "20vh" },
    visible: { y: 0, transition: { delay: 0.9, type: "tween" } },
  };
  return (
    <section className="py-[70px] px-[10%] flex flex-col gap-[60px]">
      <h2 className="mx-auto text-[60px] w-fit font-[600] relative overflow-hidden">
        <motion.div
          className="w-full h-full bg-sky-600 absolute"
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ></motion.div>
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
      </h2>
      <div className="flex gap-[60px]">
        <div className="relative flex overflow-hidden max-w-[300px] max-[900px]:hidden">
          <motion.div
            className="w-full h-full bg-sky-600 absolute"
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          ></motion.div>
          <img
            src={assets.aboutImage}
            className="w-full h-full rounded-[10px]"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[15px] max-sm:text-center">
            <div className="relative overflow-hidden">
              <motion.div
                className="w-full h-full bg-sky-600 absolute"
                variants={divVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              ></motion.div>
              <motion.p
                className="text-[18px] font-medium"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                Hi, I'm Ahmed, a passionate front-end developer based in Cairo,
                Egypt. I'm currently pursuing a Bachelor’s degree in Computer
                Science, and I specialize in building responsive and interactive
                web interfaces.
              </motion.p>
            </div>
            <div className="relative overflow-hidden">
              <motion.div
                className="w-full h-full bg-sky-600 absolute"
                variants={divVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              ></motion.div>
              <motion.p
                className="text-[18px] font-medium"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                I work with React, Tailwind CSS, and Framer Motion to create
                smooth, modern user experiences. I'm always excited to learn,
                build, and grow in the field of web development.
              </motion.p>
            </div>
          </div>
          <ul className="flex flex-col gap-[15px] ">
            <li className="flex gap-5 items-center">
              <p className="min-w-[130px] text-xl font-medium">HTML & CSS</p>
              <hr className="h-2 bg-sky-600 rounded-[50px] w-5/12 border-none outline-none" />
            </li>
            <li className="flex gap-5 items-center">
              <p className="min-w-[130px] text-xl font-medium">React JS</p>
              <hr className="h-2 bg-sky-600 rounded-[50px] w-8/12 border-none outline-none" />
            </li>
            <li className="flex gap-5 items-center">
              <p className="min-w-[130px] text-xl font-medium">JavaScript</p>
              <hr className="h-2 bg-sky-600 rounded-[50px] w-6/12 border-none outline-none" />
            </li>
            <li className="flex gap-5 items-center">
              <p className="min-w-[130px] text-xl font-medium">TailwindCss</p>
              <hr className="h-2 bg-sky-600 rounded-[50px] w-7/12 border-none outline-none" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around text-center">
        <div className="flex flex-1 flex-col items-center gap-2 border-r">
          <h4 className="text-sky-600 text-[40px] max-[750px]:text-[30px] font-bold">
            10+
          </h4>
          <p className="font-medium :text-lg max-[750px]:text-xs">
            YEARS OF EXPERIENCE
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center gap-2">
          <h4 className="text-sky-600 text-[40px] max-[750px]:text-[30px] font-bold">
            90+
          </h4>
          <p className="font-medium text-lg max-[750px]:text-xs">
            PROJECTS COMPLETED
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center gap-2 border-l">
          <h4 className="text-sky-600 text-[40px] max-[750px]:text-[30px] font-bold">
            15+
          </h4>
          <p className="font-medium text-lg max-[750px]:text-xs">
            HAPPY CLIENTS
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
