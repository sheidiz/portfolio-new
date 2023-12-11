"use client";

import React from "react";
import { motion } from "framer-motion"
import TimelineItem from "./timeline-item";

export default function Timeline({title, content}) {
  return (
    <motion.div className="grid gap-4 mx-4 sm:grid-cols-12" initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}}>
      <div className="col-span-12 sm:col-span-3">
        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-indigo-800">
          <h3 className="text-2xl text-indigo-800 font-bold">{title}</h3>
        </div>
      </div>
      <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
          {
            content.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TimelineItem {...item} />
                </React.Fragment>
              )
            })
          }
        </div>
      </div>
    </motion.div>
  )
}
