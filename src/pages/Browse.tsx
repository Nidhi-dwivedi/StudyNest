import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Brain, Map } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "material" | "quiz" | "roadmap";
  url: string;
}

const Browse = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    // TODO: Replace with actual API call
    // Simulated search results
    const mockResults: SearchResult[] = [
      {
        id: "1",
        title: "Data Structures and Algorithms",
        description: "Comprehensive guide to DSA concepts and implementations",
        type: "material",
        url: "/materials/dsa"
      },
      {
        id: "2",
        title: "DSA Practice Quiz",
        description: "Test your knowledge of data structures and algorithms",
        type: "quiz",
        url: "/quizzes/dsa"
      },
      {
        id: "3",
        title: "DSA Learning Roadmap",
        description: "Step-by-step guide to master DSA",
        type: "roadmap",
        url: "/roadmaps/dsa"
      }
    ];
    
    // Filter results based on query
    const filteredResults = mockResults.filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setResults(filteredResults);
    setIsLoading(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "material":
        return <BookOpen className="w-4 h-4" />;
      case "quiz":
        return <Brain className="w-4 h-4" />;
      case "roadmap":
        return <Map className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-bold mb-4 cyber-text">Search Results</h1>
          <div className="flex space-x-2">
            <Input
              placeholder="Search materials, quizzes, roadmaps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(searchQuery)}
              className="flex-1"
            />
            <Button onClick={() => handleSearch(searchQuery)}>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-2 text-muted-foreground">Searching...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result) => (
              <Card key={result.id} className="hover:cyber-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(result.type)}
                    <span className="text-sm text-muted-foreground capitalize">{result.type}</span>
                  </div>
                  <CardTitle>{result.title}</CardTitle>
                  <CardDescription>{result.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={result.url}>View {result.type}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
            <p className="text-sm text-muted-foreground mt-2">
              Try different keywords or check your spelling
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
