const username = 'NotHarshhaa';
const repoList = document.getElementById('repo-list');
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector("i");
const body = document.body;

// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }

  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) loadingScreen.style.display = 'none'; // Hide loading screen
});

// Toggle theme and icon on click
themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");

  icon.classList.add("rotate-animation");
  setTimeout(() => icon.classList.remove("rotate-animation"), 400);
});

async function fetchDescriptions() {
  try {
    const response = await fetch('repo-descriptions.json');
    if (!response.ok) throw new Error(`Failed to load descriptions: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching descriptions:', error);
    return {};
  }
}

async function fetchAllRepos(page = 1, perPage = 100, allRepos = []) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`);
  if (!response.ok) throw new Error(`GitHub API error: ${response.statusText}`);

  const repos = await response.json();
  if (repos.length === 0) return allRepos;
  return fetchAllRepos(page + 1, perPage, allRepos.concat(repos));
}

async function fetchRepositories() {
  try {
    repoList.innerHTML = '<p>Loading repositories...</p>';

    const [descriptions, reposConfig] = await Promise.all([
      fetchDescriptions(),
      fetch('repos.json').then(res => {
        if (!res.ok) throw new Error('Failed to load repos.json');
        return res.json();
      }).catch(err => {
        console.error('Error loading repos.json:', err);
        return { repositories: [] };
      })
    ]);

    const repos = await fetchAllRepos();

    if (!repos.length) {
      repoList.innerHTML = '<p>No repositories found.</p>';
      return;
    }

    const allowedRepos = new Set(reposConfig.repositories || []);
    const filteredRepos = repos.filter(repo => allowedRepos.has(repo.name));

    filteredRepos.sort((a, b) =>
      b.stargazers_count - a.stargazers_count ||
      b.forks_count - a.forks_count
    );

    repoList.innerHTML = '';

    if (filteredRepos.length === 0) {
      repoList.innerHTML = '<p>No repositories matched your list.</p>';
      return;
    }

    // Assuming `descriptions` is your imported JSON object
    const mergedRepos = filteredRepos.map(repo => {
    const metadata = descriptions[repo.name] || {};

      return {
        ...repo,
        displayName: metadata.displayName || repo.name,
        description: metadata.description || repo.description || "No description available.",
        techStack: metadata.techStack || [],
        demoUrl: metadata.demoUrl || null
      };
    });

    mergedRepos.forEach(repo => {
      const repoItem = document.createElement('div');
      repoItem.className = 'repo-item';
      repoItem.innerHTML = `
        <h2>
          <a href="${repo.html_url}" target="_blank">
            <i class="fas fa-code-branch"></i> ${repo.displayName}
          </a>
        </h2>

        <p>${repo.description}</p>

        <div class="badges">
          ${descriptions[repo.name]?.techStack?.map(tech => `<span class="badge">${tech}</span>`).join('') || ''}
        </div>

        <div class="stats">
          <span class="stat-badge"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
          <span class="stat-badge"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
          <span class="stat-badge"><i class="fas fa-exclamation-circle"></i> ${repo.open_issues_count}</span>
        </div>

        <p class="last-updated">
          <i class="far fa-calendar-alt"></i> Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}
        </p>

        <div class="repo-buttons">
          <a href="${repo.html_url}" target="_blank" class="btn-view">View Repo</a>
          ${descriptions[repo.name]?.demoUrl ? `<a href="${descriptions[repo.name].demoUrl}" target="_blank" class="btn-demo">Live Demo</a>` : ''}
        </div>
      `;
      repoList.appendChild(repoItem);
    });
  } catch (error) {
    console.error('Error fetching repos:', error);
    repoList.innerHTML = '<p>⚠️ Unable to load repositories. Please try again later.</p>';
  }
}

// Start loading repos
fetchRepositories();

// Global error and rejection handling (now only log, don't spam UI)
window.addEventListener('error', (event) => {
  console.error('Error occurred:', event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Global error handling
window.addEventListener('error', (event) => {
  console.error('Error occurred:', event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Scroll-to-top button behavior
window.onscroll = function () {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goToTopBtn.classList.add("show");
  } else {
    goToTopBtn.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
