import { FaGraduationCap, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap size={40} />,
      title: 'Education',
      description: 'Computer Science & Engineering Student with strong academic foundation'
    },
    {
      icon: <FaCode size={40} />,
      title: 'Development',
      description: 'Full-stack development with modern technologies and frameworks'
    },
    {
      icon: <FaLightbulb size={40} />,
      title: 'Innovation',
      description: 'Creative problem solver with a passion for innovative solutions'
    },
    {
      icon: <FaRocket size={40} />,
      title: 'Growth',
      description: 'Continuously learning and adapting to new technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slideUp">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Hello! I'm Sakshi Singh
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Computer Science & Engineering student with a keen interest in 
              software development, problem-solving, and creating impactful digital experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in tech is driven by curiosity and the desire to build solutions that 
              make a difference. I love exploring new technologies, working on challenging projects, 
              and collaborating with like-minded individuals.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me learning new skills, contributing to open-source 
              projects, or brainstorming the next big idea. I believe in continuous growth and 
              staying ahead in this ever-evolving tech landscape.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-indigo-600 mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">7+</div>
            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
            <div className="text-gray-600 dark:text-gray-400">Coding Hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">∞</div>
            <div className="text-gray-600 dark:text-gray-400">Ideas Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
