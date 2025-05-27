import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, Search, User, X, Upload, Star, Globe, Code, Database, Network, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import SearchDialog from "./SearchDialog";
import LoginDialog from "./LoginDialog";
import UploadDialog from "./UploadDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Predefined bookmarks for study materials
  const bookmarks = [
    { name: "GeeksforGeeks", icon: Code, url: "https://geeksforgeeks.org", color: "text-green-400" },
    { name: "LeetCode", icon: Code, url: "https://leetcode.com", color: "text-yellow-400" },
    { name: "Sanfoundry", icon: Database, url: "https://sanfoundry.com", color: "text-blue-400" },
    { name: "InterviewBit", icon: Cpu, url: "https://interviewbit.com", color: "text-purple-400" },
    { name: "HackerRank", icon: Network, url: "https://hackerrank.com", color: "text-cyan-400" },
    { name: "Striver A2Z", icon: Star, url: "https://takeuforward.org", color: "text-pink-400" }
  ];

  return (
    <header className="bg-background/80 dark:bg-background/90 backdrop-blur-md shadow-lg border-b cyber-border sticky top-0 z-50 cyber-scan-line">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 p-2 rounded-xl cyber-glow group-hover:cyber-glow-strong transition-all duration-300">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold cyber-text">
                StudyNest
              </h1>
              <p className="text-xs text-muted-foreground">Personal Study Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/materials" className="text-foreground hover:text-purple-400 transition-all duration-300 font-medium relative group">
              Materials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/quizzes" className="text-foreground hover:text-purple-400 transition-all duration-300 font-medium relative group">
              Quizzes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/roadmaps" className="text-foreground hover:text-purple-400 transition-all duration-300 font-medium relative group">
              Roadmaps
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/dsa" className="text-foreground hover:text-purple-400 transition-all duration-300 font-medium relative group">
              DSA Hub
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex hover:cyber-glow transition-all duration-300"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 hover:from-purple-700 hover:via-pink-600 hover:to-cyan-500 cyber-glow hover:cyber-glow-strong transition-all duration-300"
              onClick={() => setIsUploadOpen(true)}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 cyber-glow hover:cyber-glow-strong transition-all duration-300"
              onClick={() => setIsLoginOpen(true)}
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Bookmarks Bar */}
        <div className="hidden md:flex items-center space-x-1 mt-3 pt-3 border-t cyber-border/50">
          <div className="flex items-center space-x-1 mr-4">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-muted-foreground font-medium">Quick Links:</span>
          </div>
          {bookmarks.map((bookmark) => (
            <a
              key={bookmark.name}
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg hover:cyber-glow hover:bg-cyber-bg transition-all duration-300 group"
            >
              <bookmark.icon className={`w-4 h-4 ${bookmark.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm text-foreground group-hover:text-purple-400">{bookmark.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t cyber-border mt-3 space-y-3 cyber-bg rounded-lg">
            <Link to="/materials" className="block py-2 text-foreground hover:text-purple-400 transition-colors font-medium">
              Materials
            </Link>
            <Link to="/quizzes" className="block py-2 text-foreground hover:text-purple-400 transition-colors font-medium">
              Quizzes
            </Link>
            <Link to="/roadmaps" className="block py-2 text-foreground hover:text-purple-400 transition-colors font-medium">
              Roadmaps
            </Link>
            <Link to="/dsa" className="block py-2 text-foreground hover:text-purple-400 transition-colors font-medium">
              DSA Hub
            </Link>
            <div className="pt-2 space-y-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex w-full justify-center"
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400"
                onClick={() => {
                  setIsUploadOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-cyan-400 to-purple-600"
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
            
            {/* Mobile Bookmarks */}
            <div className="pt-2 border-t cyber-border/50">
              <p className="text-sm text-muted-foreground mb-2">Quick Links:</p>
              <div className="grid grid-cols-2 gap-2">
                {bookmarks.slice(0, 4).map((bookmark) => (
                  <a
                    key={bookmark.name}
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-2 py-1 rounded cyber-border text-sm"
                  >
                    <bookmark.icon className={`w-3 h-3 ${bookmark.color}`} />
                    <span className="text-foreground">{bookmark.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <LoginDialog isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <UploadDialog isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
    </header>
  );
};

export default Header;
