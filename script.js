const username = 'NotHarshhaa';
const repoList = document.getElementById('repo-list');
const themeToggle = document.getElementById('theme-toggle');

const body = document.body;
const icon = themeToggle.querySelector("i");

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun"); // Set Sun icon for dark mode
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        icon.classList.replace("fa-moon", "fa-sun"); // Change to Sun icon
    } else {
        localStorage.setItem("theme", "light");
        icon.classList.replace("fa-sun", "fa-moon"); // Change to Moon icon
    }
});

async function fetchDescriptions() {
  try {
    const response = await fetch('repos.json'); // Fetch local JSON file
    if (!response.ok) throw new Error('Failed to load descriptions');
    return await response.json();
  } catch (error) {
    console.error('Error fetching descriptions:', error);
    return {}; // Return an empty object if fetch fails
  }
}

async function fetchDescriptions() {
  try {
    const response = await fetch('repo-descriptions.json'); // Fetch descriptions from new file
    if (!response.ok) throw new Error('Failed to load descriptions');
    return await response.json();
  } catch (error) {
    console.error('Error fetching descriptions:', error);
    return {}; // Return empty object if fetch fails
  }
}

async function fetchAllRepos(page = 1, perPage = 100, allRepos = []) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`);
  if (!response.ok) throw new Error(`GitHub API error: ${response.statusText}`);

  const repos = await response.json();
  if (repos.length === 0) return allRepos; // Stop when no more pages exist

  return fetchAllRepos(page + 1, perPage, allRepos.concat(repos)); // Fetch next page recursively
}

async function fetchRepositories() {
  try {
    repoList.innerHTML = '<p>Loading repositories...</p>';

    // Fetch descriptions and repos.json in parallel
    const [descriptions, reposConfig] = await Promise.all([
      fetchDescriptions(),
      fetch('repos.json').then(res => res.json())
    ]);

    // Get all repositories using pagination
    const repos = await fetchAllRepos();

    if (!repos.length) {
      repoList.innerHTML = '<p>No repositories found.</p>';
      return;
    }

    // Extract the allowed repository names from repos.json
    const allowedRepos = new Set(reposConfig.repositories || []);

    // Filter repositories based on the allowed list
    const filteredRepos = repos.filter(repo => allowedRepos.has(repo.name));

    // Sort by stars first, then by forks
    filteredRepos.sort((a, b) => (b.stargazers_count - a.stargazers_count) || (b.forks_count - a.forks_count));

    repoList.innerHTML = '';

    if (filteredRepos.length === 0) {
      repoList.innerHTML = '<p>No repositories found.</p>';
      return;
    }

    // Render only the filtered repositories
    filteredRepos.forEach(repo => {
      const repoItem = document.createElement('div');
      repoItem.className = 'repo-item';
      repoItem.innerHTML = `
        <h2>
          <a href="${repo.html_url}" target="_blank">
            <i class="fas fa-code-branch"></i> ${repo.name}
          </a>
        </h2>
        <p>${descriptions[repo.name] || "No description available."}</p>
        <p>
          <i class="fas fa-star"></i> <strong>${repo.stargazers_count}</strong> Stars |
          <i class="fas fa-code-branch"></i> <strong>${repo.forks_count}</strong> Forks |
          <i class="fas fa-exclamation-circle"></i> ${repo.open_issues_count} Issues
        </p>
        <p><i class="far fa-calendar-alt"></i> Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
      `;
      repoList.appendChild(repoItem);
    });
  } catch (error) {
    console.error('Error fetching repos:', error);
    repoList.innerHTML = '<p>⚠️ Unable to load repositories. Please try again later.</p>';
  }
}

fetchRepositories();

async function fetchDescriptions() {
  try {
    const response = await fetch('repo-descriptions.json');
    if (!response.ok) throw new Error(`Failed to load descriptions: ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error('Error fetching descriptions:', error);
    return {}; // Return an empty object if fetching fails
  }
}

// Fetch repositories from GitHub API and display them
fetchRepositories();
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none'; // Hide the loading screen after content is loaded
});
window.addEventListener('error', (event) => {
  console.error('Error occurred:', event.message);
  const errorMessage = document.createElement('p');
  errorMessage.textContent = '⚠️ An error occurred. Please try again later.';
  repoList.appendChild(errorMessage);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  const errorMessage = document.createElement('p');
  errorMessage.textContent = '⚠️ An error occurred. Please try again later.';
  repoList.appendChild(errorMessage);
}
);
window.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none'; // Hide the loading screen after content is loaded
});

// Show or hide the button based on scroll position
window.onscroll = function () {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goToTopBtn.classList.add("show");
  } else {
    goToTopBtn.classList.remove("show");
  }
};

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
