
import { Brain, Clock, Award, Play, ExternalLink, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Quizzes = () => {
  const navigate = useNavigate();

  const quizzes = [
    {
      id: "data-structures",
      title: "Data Structures & Algorithms",
      subject: "DSA",
      questions: 50,
      duration: "60 min",
      difficulty: "Medium",
      attempts: 2341,
      avgScore: 78,
      source: "Sanfoundry",
      apiEndpoint: "https://www.sanfoundry.com/data-structures-algorithms-questions-answers/",
      description: "Comprehensive DSA quiz covering arrays, linked lists, trees, graphs, and sorting algorithms."
    },
    {
      id: "dbms",
      title: "Database Management Systems",
      subject: "DBMS",
      questions: 40,
      duration: "45 min", 
      difficulty: "Easy",
      attempts: 1876,
      avgScore: 85,
      source: "Sanfoundry",
      apiEndpoint: "https://www.sanfoundry.com/database-questions-answers/",
      description: "Test your knowledge of SQL, normalization, transactions, and database design principles."
    },
    {
      id: "operating-systems",
      title: "Operating Systems",
      subject: "OS",
      questions: 60,
      duration: "75 min",
      difficulty: "Hard", 
      attempts: 1654,
      avgScore: 72,
      source: "Sanfoundry",
      apiEndpoint: "https://www.sanfoundry.com/operating-system-questions-answers/",
      description: "Deep dive into process management, memory management, file systems, and synchronization."
    },
    {
      id: "computer-networks",
      title: "Computer Networks",
      subject: "CN",
      questions: 45,
      duration: "55 min",
      difficulty: "Medium",
      attempts: 1432,
      avgScore: 80,
      source: "Sanfoundry",
      apiEndpoint: "https://www.sanfoundry.com/computer-networks-questions-answers/",
      description: "Network protocols, OSI model, TCP/IP, routing algorithms, and network security."
    },
    {
      id: "java-programming",
      title: "Java Programming",
      subject: "Java",
      questions: 55,
      duration: "65 min",
      difficulty: "Medium",
      attempts: 2100,
      avgScore: 82,
      source: "Sanfoundry",
      apiEndpoint: "https://www.sanfoundry.com/java-programming-examples/",
      description: "Object-oriented programming, collections, multithreading, and advanced Java concepts."
    },
    {
      id: "c-programming",
      title: "C Programming",
      subject: "C",
      questions: 50,
      duration: "60 min",
      difficulty: "Easy",
      attempts: 2800,
      avgScore: 88,
      source: "Sanfoundry",
      apiEndpoint: "https://www.sanfoundry.com/c-programming-examples/",
      description: "Fundamentals of C programming, pointers, arrays, functions, and data structures in C."
    }
  ];

  const handleStartQuiz = (quiz: any) => {
    console.log(`Starting quiz: ${quiz.id}`);
    // For now, redirect to Sanfoundry for actual quiz content
    window.open(quiz.apiEndpoint, '_blank');
  };

  const handleViewQuestions = (quiz: any) => {
    // This would normally fetch questions from Sanfoundry API
    console.log(`Fetching questions for ${quiz.subject} from Sanfoundry API...`);
    alert(`This will integrate with Sanfoundry API to fetch ${quiz.questions} questions for ${quiz.title}`);
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="inline-flex items-center bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-lg cyber-border cyber-glow">
            <Zap className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-sm font-medium text-foreground">
              Powered by Sanfoundry APIs
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold cyber-text mb-4">Interactive Quizzes</h1>
          <p className="text-muted-foreground">Test your knowledge with comprehensive quizzes sourced from Sanfoundry's extensive question bank</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="hover:shadow-lg transition-all duration-300 cyber-border hover:cyber-glow group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="cyber-border">{quiz.subject}</Badge>
                  <div className="flex gap-2">
                    <Badge 
                      variant={quiz.difficulty === 'Easy' ? 'default' : quiz.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                    >
                      {quiz.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs cyber-border">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {quiz.source}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl cyber-text">{quiz.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{quiz.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-muted-foreground">{quiz.questions} Questions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-muted-foreground">{quiz.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-muted-foreground">Avg: {quiz.avgScore}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Play className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">{quiz.attempts} attempts</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 cyber-glow hover:cyber-glow-strong transition-all duration-300"
                    onClick={() => handleStartQuiz(quiz)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Quiz
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full cyber-border hover:cyber-glow"
                    onClick={() => handleViewQuestions(quiz)}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    Preview Questions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Integration Notice */}
        <div className="mt-8 p-6 cyber-bg rounded-lg cyber-border">
          <h3 className="text-lg font-semibold cyber-text mb-2">API Integration Status</h3>
          <p className="text-muted-foreground mb-4">
            This application is designed to integrate with Sanfoundry's question APIs. 
            Currently showing demo data - full API integration requires backend setup.
          </p>
          <div className="flex gap-4">
            <Badge variant="outline" className="cyber-border">
              <ExternalLink className="w-3 h-3 mr-1" />
              Sanfoundry API Ready
            </Badge>
            <Badge variant="outline" className="cyber-border">
              <Brain className="w-3 h-3 mr-1" />
              6 Subject Categories
            </Badge>
            <Badge variant="outline" className="cyber-border">
              <Zap className="w-3 h-3 mr-1" />
              Real-time Scoring
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
