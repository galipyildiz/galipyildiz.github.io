const myGithubName = "galipyildiz";
const technicalPapersDirectoryName = "technicalPapers";

document.addEventListener("DOMContentLoaded", () => {
  getTechnicalPapers();
});

const getTechnicalPapers = async () => {
  let endPoint = `https://api.github.com/users/${myGithubName}/${technicalPapersDirectoryName}`;
  //  let endPoint = `https://raw.githubusercontent.com/galipyildiz/galipyildiz.github.io/main/technicalPapers/bandwidth.md`;
  let response = await fetch(endPoint);
  if (response.ok) {
    console.log(await response.text());
    // let papers = await response.text();
    // let projectDiv = document.getElementById("papers");

    // let repoDiv = document.createElement("div");
    // repoDiv.className += " box frame";

    // let titleHeader = document.createElement("h3");
    // titleHeader.textContent = `Bandwidth`;

    // let content = document.createElement("p");
    // content.innerHTML = marked.parse(papers);

    // repoDiv.appendChild(titleHeader);
    // repoDiv.appendChild(content);

    // projectDiv.appendChild(repoDiv);
    // listPapers(papers);
  } else if (response.status === 403) {
    //forbidden rate limit
    Swal.fire({
      title: "Github Api Rate Limit Problems. Come back in 1 hour. 60req/1hr",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/resources/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/resources/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
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
