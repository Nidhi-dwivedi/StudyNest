
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  const recentResources = [
    {
      title: "Operating Systems: Process Scheduling Algorithms",
      type: "PDF",
      size: "1.2 MB",
      semester: 5,
      subject: "Operating Systems",
      downloads: 342,
      date: "2 days ago",
      icon: FileText,
      iconColor: "text-blue-500",
      badgeColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "Data Structures: Graph Algorithms Implementation",
      type: "Video",
      size: "45 min",
      semester: 3,
      subject: "Data Structures",
      downloads: 156,
      date: "1 week ago",
      icon: Video,
      iconColor: "text-red-500",
      badgeColor: "bg-red-100 text-red-700"
    },
    {
      title: "Database Management Systems: Normalization Guide",
      type: "PDF",
      size: "2.8 MB",
      semester: 5,
      subject: "DBMS",
      downloads: 289,
      date: "3 days ago",
      icon: FileText,
      iconColor: "text-blue-500",
      badgeColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "Computer Networks: OSI Model Explained",
      type: "Video",
      size: "32 min",
      semester: 5,
      subject: "Computer Networks",
      downloads: 214,
      date: "5 days ago",
      icon: Video,
      iconColor: "text-red-500",
      badgeColor: "bg-red-100 text-red-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-1 mb-4">
            <BookOpen className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">Latest Uploads</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Recently Added Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest study materials uploaded by our community of educators and experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {recentResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        <IconComponent className={`w-6 h-6 ${resource.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{resource.title}</h3>
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge className={`${resource.badgeColor} border-0`}>{resource.type}</Badge>
                          <span className="text-xs text-gray-500">{resource.size}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {resource.subject} • Semester {resource.semester}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500 flex items-center">
                      <Download className="w-3 h-3 mr-1" /> 
                      {resource.downloads} downloads • {resource.date}
                    </div>
                    <Button size="sm" variant="outline" className="h-8">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Browse All Materials <BookOpen className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
