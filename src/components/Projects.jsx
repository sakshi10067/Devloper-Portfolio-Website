import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaPython } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'NanoLink - URL Shortener',
      description: 'A URL shortening service that provides analytics and link management features.',
      technologies: ['React Js', 'MongoDB Atlas', 'Zod', 'Radix UI', 'express.js', 'React Router Dom'],
      icon: <FaNode />,
      gradient: 'from-green-500 to-emerald-500',
      github: 'https://github.com/sakshi10067/NanoLink--Url-Shortener',
      live: '#'
    },
    {
      title: 'HerShield - Women Safety Platform',
      description: 'A comprehensive women safety platform developed for Parul Hackverse. Features real-time location tracking, emergency SOS, and community support network.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'RAG', 'Geofencing', 'LangChain'],
      icon: <FaReact />,
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/piyushpandey955/HerShield_Parul_Hackverse',
      live: '#'
    },
    {
      title: 'ChatWithDoc - URL Shortener',
      description: 'Chat with your pdfs and images to ask any question without reading.',
      technologies: ['Python', 'PyMuPdf', 'Streamlit', 'Gemini API'],
      icon: <FaPython />,
      gradient: 'from-green-500 to-emerald-500',
      github: 'https://github.com/sakshi10067/ChatWithDoc',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      icon: <FaReact />,
      gradient: 'from-orange-500 to-red-500',
      github: 'https://github.com/sakshi10067/Devloper-Portfolio-Website',
      live: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-8xl opacity-10 transform rotate-12">
                  {project.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[80px]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-400 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sakshi10067"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaGithub size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;


