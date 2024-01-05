"use client";
import  { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ping Pong Time",
    description:
      "First Project of my bootcamp made in canvas using HTML, CSS and Javascript",
    image: "/images/projects/canvas.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Iron Festival",
    description:
      "Second Project of my bootcamp where you can create an account and save your favorites festivals. I used HTML, CSS and Javascript",
    image: "/images/projects/festival.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Ping Pong Time",
    description:
      "First Project of my bootcamp made in canvas using HTML, CSS and Javascript",
    image: "/images/projects/canvas.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "Iron Festival",
    description:
      "Second Project of my bootcamp where you can create an account and save your favorites festivals. I used HTML, CSS and Javascript",
    image: "/images/projects/festival.JPG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl text-white  mb-9 font-bold">
        My Projects
      </h2>
      {/* <div>{projectsData.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}</div> */}

      <div className="text-white flex flex-row justify-center items-center gap-9 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
