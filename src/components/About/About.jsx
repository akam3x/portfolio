import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans leading platforms like Dialogflow CX (Vertex AI), Azure Bot Framework, and Kore AI. I have a proven track record in developing multilingual chatbots, optimizing natural language processing models, and implementing robust conversational flows.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Additionally, I’ve spearheaded innovative projects like RAG-based chatbots, utilizing LangChain, FastAPI, and ChromaDB for efficient document-based question answering. I bring a strong foundation in programming with Python, Java, and ReactJS and am proficient in cloud technologies like Microsoft Azure and Google Cloud.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vpishati/" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="vishanth41134@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;