import React from 'react';
import { scrollToSection } from '../../utils/helpers';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vishanth</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Chatbot Developer and Conversational Agents Builder
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          As a seasoned Conversational AI and Chatbot Developer with over five years of experience, I specialize in creating intelligent, user-centric chatbot solutions that deliver exceptional customer experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;