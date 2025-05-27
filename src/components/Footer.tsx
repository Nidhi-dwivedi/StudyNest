import { BookOpen, Github, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  StudyNest
                </h3>
                <p className="text-xs text-gray-400">B.Tech CSE Study Hub</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your complete study companion for B.Tech Computer Science & Engineering degree.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@studynest.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/materials" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Study Materials
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Video Lectures
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Practice Quizzes
                </Link>
              </li>
              <li>
                <Link to="/roadmaps" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Learning Roadmaps
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About StudyNest
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Semesters</h3>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <Link 
                  key={sem}
                  to={`/semester/${sem}`} 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Semester {sem}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} StudyNest. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Developed by Nidhi
          </p>
          <div className="flex justify-center space-x-4 mt-3">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
