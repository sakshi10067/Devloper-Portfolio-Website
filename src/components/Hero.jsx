import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fadeIn">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-6xl font-bold text-indigo-600 dark:text-indigo-400">
                  SS
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
                👋
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Sakshi Singh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Computer Science & Engineering Student | Tech Enthusiast | Problem Solver
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building innovative solutions and exploring cutting-edge technologies.
            Always eager to learn and create meaningful projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 rounded-full font-semibold hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/sakshi10067"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/sakshi-singh10/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:sakshiisingh0@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope size={32} />
            </a>
          </div>

          {/* Scroll Down */}
          <div className="animate-bounce">
            <a href="#about" className="text-indigo-600 dark:text-indigo-400">
              <FaArrowDown size={24} className="mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
