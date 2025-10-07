import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Sakshi Singh</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">Computer Science & Engineering Student</p>
          </div>

          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Sakshi Singh</span>
          </div>

          <div className="mt-4 md:mt-0 text-gray-400 dark:text-gray-500 text-sm">
            © {currentYear} All rights reserved.
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 dark:border-gray-700 text-center text-gray-500 dark:text-gray-600 text-sm">
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
