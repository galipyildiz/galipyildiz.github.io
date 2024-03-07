const readmeMdRepoName = "galipyildiz";
const githubIOWebPageRepoName = "galipyildiz.github.io";
const myGithubName = "galipyildiz";

document.addEventListener("DOMContentLoaded", () => {
  getGithubRepos();
});

const getGithubRepos = async () => {
  let endPoint = `https://api.github.com/users/${myGithubName}/repos`;
  let response = await fetch(endPoint);
  if (response.ok) {
    let repos = await response.json();
    await listRepos(repos);
  }
};

const listRepos = async (repos) => {
  let projectDiv = document.getElementById("projects");
  repos = repos.sort((a, b) => a.id - b.id);

  for (let i = 0; i < repos.length; i++) {
    if (
      repos[i].name != readmeMdRepoName &&
      repos[i].name != githubIOWebPageRepoName
    ) {
      let repoDiv = document.createElement("div");
      repoDiv.className += " box frame";
      let languages = await getRepoLanguages(repos[i].languages_url);

      let titleHeader = document.createElement("h3");
      titleHeader.textContent = `${repos[i].name} - ${languages}`;
      repoDiv.appendChild(titleHeader);

      let button = document.createElement("a");
      let url = getListItemUrl(repos[i]);
      button.href = url;
      button.classList.add("button");
      if (i % 2 != 0) {
        button.classList.add("alt");  
      }
      
      button.text = "See";
      button.target = "_blank";
      repoDiv.appendChild(button);

      projectDiv.appendChild(repoDiv);
    }
  }
};

const getRepoLanguages = async (url) => {
  let response = await fetch(url);
  if (response.ok) {
    let result = await response.json();
    return Object.keys(result);
  }
  return [];
};

const getListItemUrl = (repo) => {
  if (repo.has_pages) {
    let url = `https://${githubIOWebPageRepoName}/${repo.name}`;
    return url;
  } else {
    return repo.svn_url;
  }
};