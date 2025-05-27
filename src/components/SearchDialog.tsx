import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?q=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search StudyNest</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Search materials, quizzes, roadmaps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Quick tips:</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Use quotes for exact matches</li>
              <li>Add "quiz:" to search quizzes</li>
              <li>Add "material:" to search study materials</li>
              <li>Add "roadmap:" to search roadmaps</li>
            </ul>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog; 