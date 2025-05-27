import { Target, CheckCircle, Clock, Star, ArrowRight, Code, Database, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Roadmaps = () => {
  const roadmaps = [
    {
      id: "full-stack-dev",
      title: "Full Stack Developer",
      description: "Complete roadmap to become a full-stack developer with modern technologies",
      duration: "6-8 months",
      difficulty: "Intermediate",
      progress: 65,
      totalSteps: 12,
      completedSteps: 8,
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
      icon: Code,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "data-science",
      title: "Data Science & ML",
      description: "Master data science, machine learning, and analytics fundamentals",
      duration: "8-10 months",
      difficulty: "Advanced",
      progress: 30,
      totalSteps: 15,
      completedSteps: 4,
      technologies: ["Python", "TensorFlow", "Pandas", "Jupyter"],
      icon: Database,
      color: "from-green-500 to-blue-500"
    },
    {
      id: "frontend-dev",
      title: "Frontend Specialist",
      description: "Become an expert in modern frontend development and UI/UX",
      duration: "4-6 months",
      difficulty: "Beginner",
      progress: 80,
      totalSteps: 10,
      completedSteps: 8,
      technologies: ["React", "Vue.js", "Tailwind", "Next.js"],
      icon: Globe,
      color: "from-pink-500 to-orange-500"
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      description: "Learn cloud computing, containerization, and deployment strategies",
      duration: "5-7 months",
      difficulty: "Advanced",
      progress: 45,
      totalSteps: 14,
      completedSteps: 6,
      technologies: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      icon: Cpu,
      color: "from-cyan-500 to-green-500"
    }
  ];

  const milestones = [
    { title: "Learn Fundamentals", completed: true },
    { title: "Build First Project", completed: true },
    { title: "Master Advanced Concepts", completed: false },
    { title: "Portfolio Development", completed: false },
    { title: "Interview Preparation", completed: false }
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-lg cyber-border cyber-glow">
            <Target className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-foreground">
              Structured Learning Paths
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Learning Roadmaps</h1>
          <p className="text-muted-foreground">Follow structured learning paths to master your chosen tech stack</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {roadmaps.map((roadmap) => (
            <Card key={roadmap.id} className="hover:shadow-lg transition-all duration-300 cyber-border hover:cyber-glow group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${roadmap.color} cyber-glow`}>
                    <roadmap.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="cyber-border">
                    {roadmap.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl cyber-text">{roadmap.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{roadmap.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{roadmap.completedSteps}/{roadmap.totalSteps} steps</span>
                  </div>
                  <Progress value={roadmap.progress} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-muted-foreground">{roadmap.duration}</span>
                    </div>
                    <span className="text-purple-400 font-medium">{roadmap.progress}% Complete</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {roadmap.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 cyber-glow hover:cyber-glow-strong transition-all duration-300">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Milestone Section */}
        <Card className="cyber-border cyber-bg">
          <CardHeader>
            <CardTitle className="cyber-text">Current Milestones</CardTitle>
            <p className="text-muted-foreground">Track your progress through key learning milestones</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {milestone.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 cyber-border"></div>
                  )}
                  <span className={`${milestone.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {milestone.title}
                  </span>
                  {milestone.completed && (
                    <Badge variant="outline" className="ml-auto text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Roadmaps;
