import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";
import { FiGitBranch, FiStar, FiGitCommit } from "react-icons/fi";

export const GitHubActivity = () => {
  const [totalContributions, setTotalContributions] = useState(154);
  const [recentRepos, setRecentRepos] = useState([]);
  const [recentCommits, setRecentCommits] = useState([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch contributions
        const contributionsResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/panendrajadav?y=last`);
        const contributionsData = await contributionsResponse.json();
        const currentYear = contributionsData.total?.lastYear || 77;
        const previousYear = 77;
        setTotalContributions(currentYear + previousYear);

        // Fetch recent repositories
        const reposResponse = await fetch('https://api.github.com/users/panendrajadav/repos?sort=updated&per_page=3');
        const reposData = await reposResponse.json();
        setRecentRepos(reposData);

        // Fetch recent commits from user's events
        const eventsResponse = await fetch('https://api.github.com/users/panendrajadav/events?per_page=10');
        const eventsData = await eventsResponse.json();
        const pushEvents = eventsData.filter(event => event.type === 'PushEvent').slice(0, 3);
        setRecentCommits(pushEvents);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setTotalContributions(154);
      }
    };
    fetchGitHubData();
  }, []);
  return (
    <section id="github" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-lg text-muted-foreground mb-4">
            My contributions and activity on GitHub over the past year.
          </p>
          <div className="mb-8">
            <span className="text-2xl font-bold text-accent">{totalContributions.toLocaleString()} total contributions</span>
            <span className="text-muted-foreground ml-2">across all repositories</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Recent Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <div className="flex items-center gap-2 mb-4">
                <FiGitCommit className="text-accent" />
                <h3 className="font-semibold">Recent Commits</h3>
              </div>
              <div className="h-48 overflow-hidden relative">
                <div className="animate-scroll space-y-3">
                  {[...recentCommits, ...recentCommits].map((commit, index) => (
                    <div key={index} className="text-sm py-2">
                      <p className="font-medium truncate">{commit.repo?.name?.split('/')[1] || 'Repository'}</p>
                      <p className="text-muted-foreground text-xs">
                        {commit.payload?.commits?.[0]?.message?.slice(0, 50) || 'Recent commit'}...
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {Math.floor((Date.now() - new Date(commit.created_at)) / (1000 * 60 * 60 * 24 * 7))} weeks ago
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recent Repositories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <div className="flex items-center gap-2 mb-4">
                <FiGitBranch className="text-accent" />
                <h3 className="font-semibold">Recent Repositories</h3>
              </div>
              <div className="space-y-3">
                {recentRepos.map((repo, index) => (
                  <div key={index} className="text-sm">
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-accent transition-colors truncate block text-left"
                    >
                      {repo.name}
                    </a>
                    <p className="text-muted-foreground text-xs truncate">
                      {repo.description || 'No description'}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{repo.language}</span>
                      <FiStar className="w-3 h-3" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* GitHub Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="font-semibold mb-4">GitHub Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Contributions</span>
                  <span className="font-medium">{totalContributions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Recent Activity</span>
                  <span className="font-medium text-accent">Active</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <GitHubCalendar 
              username="panendrajadav"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              colorScheme="light"
              style={{
                color: 'hsl(var(--foreground))',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
