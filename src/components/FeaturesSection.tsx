
import { Search, Brain, Bookmark, Shield, Download, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Search & Filter",
      description: "Find exactly what you need with advanced search filters by semester, subject, type, and more.",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Brain,
      title: "Interactive Quizzes",
      description: "Test your knowledge with subject-wise quizzes and track your performance over time.",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Bookmark,
      title: "Personal Bookmarks",
      description: "Save your favorite resources and create personalized study collections for quick access.",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Role-based access with JWT authentication. Students browse, admins manage content.",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: Download,
      title: "Easy Downloads",
      description: "Download PDFs, notes, and materials instantly. Preview documents before downloading.",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      icon: Star,
      title: "Study Roadmaps",
      description: "Follow curated learning paths and roadmaps designed to guide your academic journey.",
      color: "text-indigo-600 bg-indigo-100"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            StudyNest provides all the tools and resources you need for academic success, organized in one beautiful platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
