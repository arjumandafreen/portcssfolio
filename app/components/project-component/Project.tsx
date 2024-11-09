"use client";
import React from "react";
import { ProjectCard } from "../project-card/ProjectCard";

const projects = [
  {
    title: "Colorful ToDO App",
    description: "I made a colorful ToDo app using Next.js.",
    image: "/images/todo app.png",
    url: "https://sensational-halva-7daf55.netlify.app",
  },
  {
    title: "My Portfolio",
    description: "Check out my portfolio and share your feedback.",
    image: "/images/portfolio.png",
    url: "https://visionary-griffin-d68698.netlify.app",
  },
  {
    title: "Pixel Perfect HTML Figma",
    description: "A project where I aimed for pixel-perfect HTML-Figma.",
    image: "/images/figma.png",
    url: "https://stirring-quokka-406ba6.netlify.app",
  },
  {
    title: "Bank",
    description: "A remarkable project on OOP (Object-Oriented Programming).",
    image: "/images/oop-bank.png",
    url: "https://github.com/arjumandafreen/bank.git",
  },
  {
    title: "Student Management System",
    description: "Made with TypeScript and Node.js.",
    image: "/images/student.png",
    url: "https://github.com/arjumandafreen/student.git",
  },
  {
    title: "Adventure Game",
    description: "Adventure game built with TypeScript and Node.js.",
    image: "/images/adventure1.png",
    url: "https://github.com/arjumandafreen/adventure2.git",
  },
];

const Project: React.FC = () => (
  <div className="projects-container">
    <h2 className="projects-heading">
      My <span className="projects-gradient-text">Projects</span>
    </h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export default Project;
