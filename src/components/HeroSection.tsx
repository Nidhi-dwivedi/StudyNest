import { ArrowDown, Download, Star, Upload, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-background via-background to-background dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 flex items-center cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-cyan-500/10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg cyber-border cyber-glow">
            <Zap className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm font-medium text-foreground">
              Your Personal Study Command Center
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="cyber-text text-6xl md:text-8xl">
              StudyNest
            </span>
            <br />
            <span className="text-foreground">Upload, Organize</span>
            <br />
            <span className="text-foreground">& Dominate</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Your personal digital study space. Upload materials, organize by semester, track progress, and access everything from notes to DSA practice - all in one cyberpunk-themed platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/materials">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 hover:from-purple-700 hover:via-pink-600 hover:to-cyan-500 px-6 py-6 rounded-xl shadow-lg cyber-glow hover:cyber-glow-strong transition-all duration-300 w-full sm:w-auto"
              >
                <Upload className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 py-6 rounded-xl cyber-border hover:cyber-glow hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 w-full sm:w-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                Explore Demo
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto">
            <div className="text-center cyber-bg rounded-lg p-4 cyber-border cyber-pulse">
              <div className="text-2xl md:text-3xl font-bold cyber-text mb-1">∞</div>
              <div className="text-xs md:text-sm text-muted-foreground">Storage</div>
            </div>
            <div className="text-center cyber-bg rounded-lg p-4 cyber-border cyber-pulse">
              <div className="text-2xl md:text-3xl font-bold cyber-text mb-1">Smart</div>
              <div className="text-xs md:text-sm text-muted-foreground">Powered</div>
            </div>
            <div className="text-center cyber-bg rounded-lg p-4 cyber-border cyber-pulse">
              <div className="text-2xl md:text-3xl font-bold cyber-text mb-1">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
