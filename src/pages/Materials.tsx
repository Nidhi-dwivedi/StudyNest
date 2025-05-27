
import { Search, Filter, Download, Eye, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Materials = () => {
  const materials = [
    {
      title: "Data Structures & Algorithms - Complete Notes",
      subject: "DSA",
      semester: 5,
      type: "PDF",
      size: "2.4 MB",
      downloads: 1234,
      description: "Comprehensive notes covering all DSA topics with examples"
    },
    {
      title: "DBMS Query Optimization",
      subject: "DBMS", 
      semester: 5,
      type: "PDF",
      size: "1.8 MB",
      downloads: 892,
      description: "Advanced query optimization techniques and indexing"
    },
    {
      title: "Operating Systems Concepts",
      subject: "OS",
      semester: 5,
      type: "Video",
      size: "45 min",
      downloads: 567,
      description: "Process management and memory allocation explained"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Study Materials</h1>
          <p className="text-gray-600">Access organized study materials for all subjects</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search materials..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{material.subject}</Badge>
                  <Badge variant="secondary">Sem {material.semester}</Badge>
                </div>
                <CardTitle className="text-lg">{material.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{material.type} • {material.size}</span>
                  <span>{material.downloads} downloads</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materials;
