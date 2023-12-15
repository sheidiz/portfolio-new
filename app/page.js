"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MainContainer from "@/components/main-container";
import ProfilePic from "@/public/images/profile-pic.png";
import ArgFlag from "@/public/images/argentina-flag-icon.png";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { skillsData } from "@/lib/data";

export default function Home() {

  return (
    <MainContainer>
      <motion.section className="flex flex-col"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-5">
          <Image className="w-48 rounded-full object-cover border-4 border-white bg-gray-200"
            src={ProfilePic}
            alt="Sheila"
            priority={true} />
          <div className="text-center lg:text-start text-indigo-950 !leading-[1.5]">
            <h1 className="mb-1 text-4xl font-extrabold">
              Sheila Abril Diz
              <Image className="inline-block h-6 w-auto ps-4 pb-1" src={ArgFlag} alt="Argentina" priority={true} />
            </h1>
            <h2 className="text-lg"><span className="font-extrabold">Java Full-stack developer</span> in progress 👩‍💻</h2>
            <p className="text-md w-full xl:w-4/5">
              {`I'm motivated to learn and create solutions for everyday issues, while also providing diverse digital experiences. `}
              My focus is <span className="underline">Java</span> and <span className="underline">React</span>.</p>
            <motion.div id="links" className="mt-5 flex flex-col lg:flex-row justify-center lg:justify-start gap-2 text-md font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, }}
            >
              <div className="flex flex-row justify-center lg:justify-start gap-2 text-gray-700 text-sm">
                <a className="bg-white p-3 flex items-center gap-2 rounded-full cursor-pointer border border-black/10 outline-none hover:scale-[1.15] focus:scale-[1.15] active:scale-105 transition"
                  href="https://www.linkedin.com/in/sheila-abril-diz-308148191/" target="_blank">
                  <BsLinkedin />
                </a>
                <a className="bg-white p-3 sflex items-center gap-2 rounded-full cursor-pointer border border-black/10 outline-none hover:scale-[1.15] focus:scale-[1.15] active:scale-105 transition"
                  href="https://github.com/sheidiz" target="_blank">
                  <FaGithubSquare />
                </a>
                <a className="bg-white px-6 py-1 flex items-center gap-2 rounded-full cursor-pointer border border-black/10 outline-none hover:scale-110 focus:scale-110 active:scale-105 transition"
                  href="/CV-Diz Sheila(EN).pdf" download="CV - Diz Sheila.pdf">
                  Download CV <HiDownload />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section className="flex flex-col gap-2 mt-5 leading-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <p className="text-2xl font-bold text-indigo-800">About me</p>
        <p>{`My journey into IT began at the university, where I learned the fundamentals of programming and web development. Currently, I'm enrolled in an online`}
          <span className='font-semibold'> full-stack Java developer bootcamp</span>
          , while independently studying other technologies such as
          <span className='font-semibold'> React</span> and
          <span className='font-semibold'> Tailwind</span>.
        </p>
        <p>My professional goal is to grow and excel as a developer, bringing value and satisfaction to each project. Motivated by my {" "}
          <span className='underline'>curiosity</span> and a passion for{" "}
          <span className='underline'>problem-solving</span>
          , I am committed to constantly acquiring new knowledge. This, combined with my creativity, fuels my dedication to building innovative solutions that help people.
        </p>
        <p>I am currently looking for my <span className='font-semibold'>first job</span> as a software developer.</p>
      </motion.section>
      <motion.section className="flex flex-col gap-3 mt-5 leading-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <p className="text-2xl font-bold text-indigo-800">Skills</p>
        <div className="flex flex-row grow flex-wrap gap-3">
          {skillsData.map((skill, index) => {
            return <p key={index} className="rounded-full bg-indigo-100 px-3 py-1">{skill}</p>
          })}
        </div>
      </motion.section>
    </MainContainer>
  )
}
