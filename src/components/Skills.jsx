import { FaReact, FaNode, FaPython, FaJava, FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiC, SiZod, SiRadixui, SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85, color: 'text-cyan-500' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, level: 80, color: 'text-yellow-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85, color: 'text-teal-500' },
        { name: 'Zod', icon: <SiZod />, level: 80, color: 'text-blue-600' },
        { name: 'Radix UI', icon: <SiRadixui />, level: 75, color: 'text-purple-600' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 75, color: 'text-green-600' },
        { name: 'Express.js', icon: <SiExpress />, level: 70, color: 'text-gray-600' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75, color: 'text-green-500' },
        { name: 'SQL', icon: <FaDatabase />, level: 70, color: 'text-blue-700' }
      ]
    },
    {
      title: 'Programming Languages & DSA',
      skills: [
        { name: 'C', icon: <SiC />, level: 85, color: 'text-blue-600' },
        { name: 'Java', icon: <FaJava />, level: 75, color: 'text-red-600' },
        { name: 'Python', icon: <FaPython />, level: 80, color: 'text-yellow-600' },
        { name: 'JavaScript', icon: <FaJs />, level: 80, color: 'text-yellow-500' },
        { name: 'Data Structures & Algorithms', icon: <FaJava />, level: 75, color: 'text-indigo-600' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 80, color: 'text-orange-600' },
        { name: 'GitHub', icon: <FaGithub />, level: 85, color: 'text-gray-900 dark:text-gray-100' },
        { name: 'VS Code', icon: <VscCode />, level: 90, color: 'text-blue-500' },
        { name: 'Postman', icon: <SiPostman />, level: 75, color: 'text-orange-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {skill.icon && (
                          <span className={`text-2xl ${skill.color} group-hover:scale-125 transition-transform duration-300`}>
                            {skill.icon}
                          </span>
                        )}
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['REST APIs', 'Responsive Design', 'Data Structures', 'Algorithms', 'Problem Solving', 'Team Collaboration', 'SDLC', 'UI/UX Design'].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-gray-700 dark:text-gray-300 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
