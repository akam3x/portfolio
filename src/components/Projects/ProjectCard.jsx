import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 hover:bg-slate-800/70 transition-all transform hover:scale-105">
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span key={index} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a 
          href={project.demo} 
          className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
        >
          <ExternalLink size={16} />
          Demo
        </a>
        <a 
          href={project.github} 
          className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;