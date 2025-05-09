import { REPOS_DATA } from '@/data/repos-data';
import { Github, BookOpen, Code2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* About Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500/50 to-blue-500/20 rounded-full" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-blue-500" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  About
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-9">
                {REPOS_DATA.about}
              </p>
            </div>
          </section>

          {/* Summary Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-green-500/50 to-green-500/20 rounded-full" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="h-6 w-6 text-green-500" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  Summary
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pl-9">
                {REPOS_DATA.summary}
              </p>
            </div>
          </section>

          {/* GitHub Stats Section */}
          <section className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-500/50 to-purple-500/20 rounded-full" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Github className="h-6 w-6 text-purple-500" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  GitHub Stats
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-9">
                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border/80 transition-colors">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Projects</h3>
                  <p className="text-2xl font-bold mt-1">{REPOS_DATA.projects.length}</p>
                </div>
                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border/80 transition-colors">
                  <h3 className="text-sm font-medium text-muted-foreground">Active Projects</h3>
                  <p className="text-2xl font-bold mt-1">
                    {REPOS_DATA.projects.filter(project => {
                      if (!project.lastUpdated) return false;
                      const last = new Date(project.lastUpdated);
                      const now = new Date();
                      const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
                      return diffDays <= 90;
                    }).length}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border/80 transition-colors">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Stars</h3>
                  <p className="text-2xl font-bold mt-1">
                    {REPOS_DATA.projects.reduce((acc, project) => acc + (project.stars || 0), 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
