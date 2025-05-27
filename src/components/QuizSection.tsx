
import { Brain, Clock, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const QuizSection = () => {
  const quizData = [
    {
      subject: "Data Structures & Algorithms",
      questions: 25,
      duration: "30 min",
      difficulty: "Medium",
      attempts: 2341,
      avgScore: 78,
      color: "from-purple-500 to-blue-500"
    },
    {
      subject: "Database Management Systems",
      questions: 20,
      duration: "25 min",
      difficulty: "Easy",
      attempts: 1876,
      avgScore: 85,
      color: "from-blue-500 to-green-500"
    },
    {
      subject: "Operating Systems",
      questions: 30,
      duration: "40 min",
      difficulty: "Hard",
      attempts: 1654,
      avgScore: 72,
      color: "from-green-500 to-yellow-500"
    },
    {
      subject: "Computer Networks",
      questions: 22,
      duration: "30 min",
      difficulty: "Medium",
      attempts: 1432,
      avgScore: 80,
      color: "from-yellow-500 to-red-500"
    }
  ];

  return (
    <section id="quizzes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-4 py-1 mb-4">
            <Brain className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-700 font-medium">Interactive Learning</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reinforce your learning with subject-specific quizzes, track your progress, and identify areas for improvement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {quizData.map((quiz, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${quiz.color}`}></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-800">{quiz.subject}</CardTitle>
                <div className="flex items-center space-x-1">
                  <Badge variant="outline" className="text-xs bg-purple-50 text-purple-600 border-purple-200">
                    {quiz.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-600">{quiz.questions} Questions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">{quiz.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">Avg: {quiz.avgScore}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{quiz.attempts} attempts</span>
                  </div>
                </div>
                
                <Link to={`/quizzes/${quiz.subject.toLowerCase().replace(/ /g, "-")}`}>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Start Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/quizzes">
            <Button variant="outline" className="border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50">
              View All Quizzes <Brain className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
