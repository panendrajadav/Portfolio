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
