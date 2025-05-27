import { FileText, Video, Brain, Upload, Plus, Trash2, FileUp, Edit2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Subject {
  name: string;
  files: File[];
}

interface Semester {
  semester: number;
  subjects: string[];
  resources: number;
  color: string;
}

const SemesterGrid = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    {
      semester: 1,
      subjects: ["Mathematics-I", "Programming in C", "Physics", "Chemistry"],
      resources: 120,
      color: "from-red-500 to-pink-500"
    },
    {
      semester: 2,
      subjects: ["Mathematics-II", "Data Structures", "Digital Electronics", "English"],
      resources: 134,
      color: "from-orange-500 to-red-500"
    },
    {
      semester: 3,
      subjects: ["Discrete Mathematics", "Computer Organization", "OOP with Java", "Probability"],
      resources: 156,
      color: "from-yellow-500 to-orange-500"
    },
    {
      semester: 4,
      subjects: ["Algorithm Design", "Software Engineering", "Computer Graphics", "Economics"],
      resources: 142,
      color: "from-green-500 to-yellow-500"
    },
    {
      semester: 5,
      subjects: ["DBMS", "Operating Systems", "Computer Networks", "Theory of Computation"],
      resources: 178,
      color: "from-blue-500 to-green-500"
    },
    {
      semester: 6,
      subjects: ["Machine Learning", "Compiler Design", "Web Technologies", "Cyber Security"],
      resources: 165,
      color: "from-indigo-500 to-blue-500"
    },
    {
      semester: 7,
      subjects: ["AI & Deep Learning", "Cloud Computing", "Mobile App Dev", "Project Work"],
      resources: 134,
      color: "from-purple-500 to-indigo-500"
    },
    {
      semester: 8,
      subjects: ["Blockchain", "DevOps", "Industry Project", "Seminar"],
      resources: 98,
      color: "from-pink-500 to-purple-500"
    }
  ]);

  const [newSubject, setNewSubject] = useState("");
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleAddSubject = (semesterIndex: number) => {
    if (!newSubject.trim()) {
      toast.error("Please enter a subject name");
      return;
    }

    setSemesters(prev => prev.map((sem, index) => {
      if (index === semesterIndex) {
        return {
          ...sem,
          subjects: [...sem.subjects, newSubject.trim()],
          resources: sem.resources + 1
        };
      }
      return sem;
    }));

    setNewSubject("");
    toast.success("Subject added successfully");
  };

  const handleDeleteSubject = (semesterIndex: number, subjectIndex: number) => {
    setSemesters(prev => prev.map((sem, index) => {
      if (index === semesterIndex) {
        const newSubjects = [...sem.subjects];
        newSubjects.splice(subjectIndex, 1);
        return {
          ...sem,
          subjects: newSubjects,
          resources: sem.resources - 1
        };
      }
      return sem;
    }));
    toast.success("Subject deleted successfully");
  };

  const handleFileUpload = (semesterIndex: number, subjectIndex: number, files: FileList | null) => {
    if (!files) return;
    
    const fileArray = Array.from(files);
    setSelectedFiles(prev => [...prev, ...fileArray]);
    
    setSemesters(prev => prev.map((sem, index) => {
      if (index === semesterIndex) {
        return {
          ...sem,
          resources: sem.resources + fileArray.length
        };
      }
      return sem;
    }));

    toast.success(`${fileArray.length} file(s) uploaded successfully`);
  };

  return (
    <section id="materials" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="cyber-text">Personal Study Vault</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload and organize your study materials by semester. Create your personal digital library with smart organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesters.map((sem, semesterIndex) => (
            <Card key={sem.semester} className="hover:shadow-xl transition-all duration-300 border-0 cyber-bg cyber-border hover:cyber-glow hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${sem.color} flex items-center justify-center cyber-glow`}>
                    <span className="text-white font-bold text-lg">{sem.semester}</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900/20">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Semester {sem.semester}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Add New Subject</Label>
                          <div className="flex gap-2">
                            <Input
                              value={newSubject}
                              onChange={(e) => setNewSubject(e.target.value)}
                              placeholder="Enter subject name"
                            />
                            <Button onClick={() => handleAddSubject(semesterIndex)}>
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Current Subjects</Label>
                          <div className="space-y-2">
                            {sem.subjects.map((subject, subjectIndex) => (
                              <div key={subjectIndex} className="flex items-center justify-between bg-card p-2 rounded-lg">
                                <span>{subject}</span>
                                <div className="flex gap-2">
                                  <label className="cursor-pointer">
                                    <FileUp className="w-4 h-4 text-blue-500" />
                                    <input
                                      type="file"
                                      multiple
                                      className="hidden"
                                      onChange={(e) => handleFileUpload(semesterIndex, subjectIndex, e.target.files)}
                                    />
                                  </label>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDeleteSubject(semesterIndex, subjectIndex)}
                                  >
                                    <Trash2 className="w-4 h-4 text-red-500" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  Semester {sem.semester}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {sem.subjects.map((subject, index) => (
                    <div key={index} className="text-sm text-muted-foreground bg-card rounded-lg px-3 py-2 cyber-border">
                      {subject}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{sem.resources} Resources</span>
                  <div className="flex space-x-1">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <Video className="w-4 h-4 text-red-400" />
                    <Brain className="w-4 h-4 text-purple-400" />
                    <Upload className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemesterGrid;
