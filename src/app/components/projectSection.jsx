"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Tag } from "@mui/icons-material";
import ProjectsTags from "./ProjectsTags";
import { useState } from "react";
const projectsData = [
  {
    id: 1,
    title: "MY Portfolio",
    imgUrl: "/images/portfolio.png",
    description:
      "This is my portfolio website, where I showcase my projects and skills.",
    tag: ["ALL", "Completed"],
    gitUrl: "https://github.com/Ankit-Mishra0/MY-GOV-app",
  },
  {
    id: 2,
    title: "My Gov Website",
    imgUrl: "/images/mygov.png",
    description:
      "This project is still in development. It is a government website.",
    tag: ["ALL", "Still Working"],
    gitUrl: "https://github.com/Ankit-Mishra0/MY-GOV-app",
  },
];
const ProjectSection = () => {
    const [tag, setTag] = useState("ALL");
    const handleChange = (newTag) => {
        setTag(newTag);
    };
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)

    );
  return (
    <div id="projects" >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center gap-2 py-6">
        <ProjectsTags onClick={handleChange} name="ALL" isSelected={tag==="ALL"} />
        <ProjectsTags onClick={handleChange} name="Completed" isSelected={tag==="Completed"} />
        <ProjectsTags onClick={handleChange} name="Still Working" isSelected={tag==="Still Working"} />
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
