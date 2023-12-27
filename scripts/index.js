const readmeMdRepoName = "galipyildiz";
const githubIOWebPageRepoName = "galipyildiz.github.io";
const myGithubName = "galipyildiz";
const technicalPapersDirectoryName = "technicalPapers";

document.addEventListener("DOMContentLoaded", () => {
  updateConsole();
  getGithubRepos();
  getTechnicalPapers();
});

const getGithubRepos = async () => {
  let endPoint = `https://api.github.com/users/${myGithubName}/repos`;
  let response = await fetch(endPoint);
  if (response.ok) {
    let repos = await response.json();
    listRepos(repos);
    let repoCount = repos.length;
    updateRepoCount(repoCount);
  }
};

const listRepos = (repos) => {
  let projectDiv = document.getElementById("projects");
  repos = repos.sort((a, b) => a.id - b.id);

  for (let i = 0; i < repos.length; i++) {
    let listItem = document.createElement("a");
    listItem.textContent = `${i + 1} - ${repos[i].name}`;
    listItem.className += " textColor";

    let url = getListItemUrl(repos[i]);
    listItem.href = url;

    if (repos[i].name == readmeMdRepoName) {
      appendSpanReadmeListItem(listItem);
    } else if (repos[i].name == githubIOWebPageRepoName) {
      listItem.href = repos[i].svn_url;
      appendSpanGithubIoWebPageListItem(listItem);
    }

    projectDiv.appendChild(listItem);
  }
};

const getListItemUrl = (repo) => {
  if (repo.has_pages) {
    let url = `https://${githubIOWebPageRepoName}/${repo.name}`;
    return url;
  } else {
    return repo.svn_url;
  }
};

const updateRepoCount = (repoCount) => {
  let repositroiesHeader = document.getElementById("repositories");
  repositroiesHeader.textContent = `My Public Repositories
    : ${repoCount}`;
};

const appendSpanGithubIoWebPageListItem = (listItem) => {
  const spanItem = document.createElement("span");
  spanItem.textContent = " - Current";
  spanItem.style.color = "#007bff";
  spanItem.style.marginLeft = "5px";
  listItem.appendChild(spanItem);
};

const appendSpanReadmeListItem = (listItem) => {
  const spanItem = document.createElement("span");
  spanItem.textContent = "Readme.md";
  spanItem.style.color = "#007bff";
  spanItem.style.marginLeft = "5px";
  listItem.appendChild(spanItem);
};

const getTechnicalPapers = async () => {
  let endPoint = `https://api.github.com/repos/galipyildiz/galipyildiz.github.io/contents/${technicalPapersDirectoryName}`;
  let response = await fetch(endPoint);
  if (response.ok) {
    let papers = await response.json();
    listPapers(papers);
  }
};

const listPapers = (papers) => {
  let papersDiv = document.getElementById("papers");

  for (let i = 0; i < papers.length; i++) {
    let paperName = formatPaperName(papers[i].name);
    let listItem = document.createElement("a");
    listItem.textContent = `${i + 1} - ${paperName}`;
    listItem.className += " textColor";

    let url = getPaperUrl(papers[i]);
    listItem.href = url;

    papersDiv.appendChild(listItem);
  }
};

const getPaperUrl = (paper) => {
  if (window.location.hostname == "127.0.0.1") {
    return getLocalPaperUrl(paper.name);
  } else {
    return getRemotePaperUrl(paper.name);
  }
};

const getRemotePaperUrl = (paperName) => {
  let replacedName = paperName.replace(".md", ".html");
  let url = `https://galipyildiz.github.io/${technicalPapersDirectoryName}/${replacedName}`;
  return url;
};

const getLocalPaperUrl = (paperName) => {
  let url = `http://127.0.0.1:5500/${technicalPapersDirectoryName}/${paperName}`;
  return url;
};

const formatPaperName = (filename) => {
  let capitalizedFilename =
    filename.charAt(0).toUpperCase() + filename.slice(1);
  capitalizedFilename = capitalizedFilename.replace(".md", "");
  return capitalizedFilename;
};

const updateConsole = () => {
  console.log("Hello World!");
};
