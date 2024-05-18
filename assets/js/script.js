const projects = [
  {
    img: "movieInfo",
    link: "https://movixinfo.netlify.app/",
  },
  {
    img: "Blog",
    link: "#",
  },
  {
    img: "musicPlayer",
    link: "https://itskayumkhan.github.io/MusicPlayer/",
  },
  {
    img: "ecommerce",
    link: "https://e-commerceclient.netlify.app/",
  },
  {
    img: "zomoto",
    link: "https://itskayumkhan.github.io/Cloan_Zomato/",
  },
  {
    img: "carParking",
    link: "#",
  },
  {
    img: "todo",
    link: "https://todokeepapp.netlify.app/",
  },
  {
    img: "colorPicker",
    link: "https://itskayumkhan.github.io/ColorPicker/",
  },
  {
    img: "standford",
    link: "#",
  },
  {
    img: "jokes",
    link: "https://itskayumkhan.github.io/Joke_Master/",
  },
  {
    img: "Math",
    link: "#",
  },
  {
    img: "cardGame",
    link: "#",
  },
  {
    img: "rps",
    link: "https://itskayumkhan.github.io/RPS_Game/",
  },

  {
    img: "quotes",
    link: "#",
  },
  {
    img: "textCounter",
    link: "#",
  },
];

const projectDiv = document.getElementById("project");

projects.map((item) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add(
    "col-lg-4",
    "col-md-6",
    "portfolio-item",
    "filter-app"
  );

  projectCard.innerHTML = `
      <div class="portfolio-wrap">
        <img src="assets/img/portfolio/${item.img}.png" class="img-fluid" alt="" />
        <div class="portfolio-links">
          <a target="_blank" href="assets/img/portfolio/${item.img}.png" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
          <a target="_blank" href="${item.link}" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    `;

  projectDiv.appendChild(projectCard);
});

const leftSkill = [
  {
    skill: "HTML/CSS",
    score: "90",
  },
  {
    skill: "JAVA SCRIPT",
    score: "85",
  },
  {
    skill: "REACT.JS",
    score: "70",
  },
  {
    skill: "NODE.JS",
    score: "60",
  },
  {
    skill: "EXPRESS.JS",
    score: "60",
  },
];
const rightSkill = [
  {
    skill: "C/C++",
    score: "80",
  },
  {
    skill: "DSA",
    score: "70",
  },
  {
    skill: "BOOTSTRAP / TAILWIND CSS",
    score: "80",
  },
  {
    skill: "MONGO GB",
    score: "70",
  },
  {
    skill: "REST API",
    score: "50",
  },
];

const leftSide = document.getElementById("leftSideSkill");
const rightSide = document.getElementById("rightSideSkill");

leftSkill.map((item) => {
  const progress = document.createElement("div");
  progress.setAttribute("class", "progress");
  progress.innerHTML =`
  <span class="skill">${item.skill}</span>
  <div class="progress-bar-wrap">
    <div class="progress-bar" role="progressbar" aria-valuenow="${item.score}" aria-valuemin="0" aria-valuemax="100">
    </div>
  </div>
  `
  leftSide.appendChild(progress);
});
rightSkill.map((item) => {
  const progress = document.createElement("div");
  progress.setAttribute("class", "progress");
  progress.innerHTML =`
  <span class="skill">${item.skill}</span>
  <div class="progress-bar-wrap">
    <div class="progress-bar" role="progressbar" aria-valuenow="${item.score}" aria-valuemin="0" aria-valuemax="100">
    </div>
  </div>
  `
  rightSide.appendChild(progress);
});
