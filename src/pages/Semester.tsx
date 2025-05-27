
import { useParams } from "react-router-dom";
import { Book, FileText, Video, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Semester = () => {
  const { semesterNumber } = useParams();
  
  const semesterData: Record<string, {
    subjects: Array<{
      name: string;
      resources: number;
      icon: typeof Book;
    }>;
  }> = {
    "1": {
      subjects: [
        { name: "Mathematics-I", resources: 45, icon: Book },
        { name: "Programming in C", resources: 38, icon: FileText },
        { name: "Physics", resources: 32, icon: Video },
        { name: "Chemistry", resources: 28, icon: Brain }
      ]
    },
    "2": {
      subjects: [
        { name: "Mathematics-II", resources: 42, icon: Book },
        { name: "Data Structures", resources: 55, icon: FileText },
        { name: "Digital Electronics", resources: 35, icon: Video },
        { name: "English", resources: 22, icon: Brain }
      ]
    },
    "5": {
      subjects: [
        { name: "DBMS", resources: 67, icon: Book },
        { name: "Operating Systems", resources: 58, icon: FileText },
        { name: "Computer Networks", resources: 51, icon: Video },
        { name: "Theory of Computation", resources: 43, icon: Brain }
      ]
    }
  };

  const currentSemester = semesterNumber ? semesterData[semesterNumber] : null;

  if (!currentSemester) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Semester Not Found</h1>
          <p className="text-gray-600">Semester {semesterNumber} materials are not available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Semester {semesterNumber}</h1>
          <p className="text-gray-600">Study materials for all subjects in this semester</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSemester.subjects.map((subject, index) => {
            const IconComponent = subject.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{subject.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{subject.resources} resources available</p>
                  <Button className="w-full">
                    Browse Materials
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Semester;
