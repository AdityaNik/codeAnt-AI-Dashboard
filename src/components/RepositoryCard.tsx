import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { GitFork, Star, Clock, Database } from "lucide-react";
import { Repository } from "@/types";

interface RepositoryCardProps {
  repo: Repository;
  getLanguageColor: (language: string) => string;
}

const RepositoryCard = ({ repo, getLanguageColor }: RepositoryCardProps) => {
  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="lg:flex md:flex lg:gap-2 gap:0 space-y-1">
          <h2 className="text-xl font-semibold hover:text-blue-500 cursor-pointer">
            {repo.name}
          </h2>
          <Badge variant={repo.visibility === 'Public' ? 'secondary' : 'outline'}>
              {repo.visibility}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground invisible lg:visible md:visible">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>0</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className={`h-3 w-3 rounded-full ${getLanguageColor(repo.language)}`} />
            <span className="text-sm text-muted-foreground">{repo.language}</span>
          </div>
          <div className="flex items-center gap-1">
            <Database className="h-4 w-4" />
            <span>{repo.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Updated {repo.updatedAt}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default RepositoryCard;