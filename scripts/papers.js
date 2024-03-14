const myGithubName = "galipyildiz";
const repoName = "galipyildiz.github.io";
const technicalPapersDirectoryName = "technicalPapers";

document.addEventListener("DOMContentLoaded", () => {
  getTechnicalPapers();
});

const getTechnicalPapers = async () => {
  let endPoint = `https://api.github.com/repos/${myGithubName}/${repoName}/contents/${technicalPapersDirectoryName}`;
  let response = await fetch(endPoint);
  if (response.ok) {
    let papers = await response.json();
    papers = papers.reverse();
    let papersNames = getPapersNames(papers);
    listPapers(papersNames);
  } else if (response.status === 403) {
    //forbidden rate limit
    Swal.fire({
        title: "Github Api Rate Limit Problems. Come back in 1 hour. 60req/1hr",
        width: 600,
        padding: "2em",
        customClass: {
          confirmButton: "button alt",
        },
        background: "url(/resources/trees.png)",
        backdrop: `
        rgba(249,239,170,0.6)
          url("/resources/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
  }
};

const getPapersNames = (papers) => {
  let result = [];
  papers.forEach((element) => {
    result.push(element.name);
  });
  return result;
};

const listPapers = async (papersNames) => {
  for (let paperName of papersNames) {
    let endPoint = `https://raw.githubusercontent.com/${myGithubName}/${repoName}/main/${technicalPapersDirectoryName}/${paperName}`;
    let response = await fetch(endPoint);
    let paper = await response.text();
    let projectDiv = document.getElementById("papers");
    let repoDiv = document.createElement("div");
    repoDiv.className += "box frame";

    let titleHeader = document.createElement("h3");
    let paperNameTitle = formatPaperName(paperName);
    titleHeader.textContent = paperNameTitle;
    repoDiv.appendChild(titleHeader);

    let content = document.createElement("div");
    content.innerHTML = marked.parse(paper);
    content.style.maxWidth = "30vw"; //??
    content.style.overflowX = "auto";
    repoDiv.appendChild(content);

    projectDiv.appendChild(repoDiv);
  }
};

const formatPaperName = (filename) => {
  let capitalizedFilename =
    filename.charAt(0).toUpperCase() + filename.slice(1);
  capitalizedFilename = capitalizedFilename.replace(".md", "");
  return capitalizedFilename;
};
