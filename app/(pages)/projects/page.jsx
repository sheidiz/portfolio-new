"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Project from "./project";
import MainContainer from "@/components/main-container";

export default function Projects() {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <MainContainer>
      <motion.div variants={container}
        initial="hidden"
        animate="visible">
        <motion.p className="mb-5 text-2xl font-bold text-indigo-800" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}>
          Projects
        </motion.p>
        <div className="flex flex-col items-start">
          {
            projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))
          }
        </div>
      </motion.div>
    </MainContainer>
  )
}
