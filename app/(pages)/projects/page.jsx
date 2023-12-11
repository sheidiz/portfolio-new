import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import MainContainer from "@/components/main-container";

export default function Projects() {
  return (
    <MainContainer>

      <p className="mb-5 text-2xl font-bold text-indigo-800">Projects</p>
      <div className="flex flex-col items-start">
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </MainContainer>
  )
}
