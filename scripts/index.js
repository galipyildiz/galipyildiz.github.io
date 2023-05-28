const readmeMdRepoName = 'galipyildiz';
const githubIOWebPageRepoName = 'galipyildiz.github.io';
const myGithubName = "galipyildiz";

document.addEventListener("DOMContentLoaded", () => {
    updateConsole();
    getGithubRepos();
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
    let projectDiv = document.getElementById('projects');

    for (const repo of repos) {

        let listItem = document.createElement('a');
        listItem.textContent = `${repo.name}`;
        listItem.className += ' textColor'

        let url = getListItemUrl(repo);
        listItem.href = url;

        if (repo.name == readmeMdRepoName) {
            appendSpanReadmeListItem(listItem);
        }
        else if (repo.name == githubIOWebPageRepoName) {
            appendSpanGithubIoWebPageListItem(listItem);
        }

        projectDiv.appendChild(listItem);

    }
}

const getListItemUrl = (repo) => {
    if (repo.has_pages) {
        let url = `https://${githubIOWebPageRepoName}/${repo.name}`
        return url;
    }
    else {
        return repo.svn_url;
    }
};

const updateRepoCount = (repoCount) => {
    let repositroiesHeader = document.getElementById('repositories');;
    repositroiesHeader.textContent = `My Public Repositories
    : ${repoCount}`;
};

const appendSpanGithubIoWebPageListItem = (listItem) => {
    const spanItem = document.createElement('span');
    spanItem.textContent = ' - Current';
    spanItem.style.color = '#007bff'
    spanItem.style.marginLeft = '5px';
    listItem.appendChild(spanItem);
};

const appendSpanReadmeListItem = (listItem) => {
    const spanItem = document.createElement('span');
    spanItem.textContent = 'Readme.md';
    spanItem.style.color = '#007bff'
    spanItem.style.marginLeft = '5px';
    listItem.appendChild(spanItem);
};

const updateConsole = () => {
   console.log('Hello World!');
};
