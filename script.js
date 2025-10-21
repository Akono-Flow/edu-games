// Each app now has an icon name and a color
const apps = [
  {
    title: "Edu-Crossword",
    description: "Explore Ideas and topics with Crossword",
    url: "https://akono-flow.github.io/crossword/",
    icon: "gamepad-2",
    color: "#0d6efd"
  },
  {
    title: "Edu-Jeopardy",
    description: "Explore Ideas and topics with Jeopardy",
    url: "https://akono-flow.github.io/edu-jeopardy/",
    icon: "gamepad-2",
    color: "#e83e8c"
  },
  {
    title: "Edu-Quadratics",
    description: "Generate quadratic expressions for factorization",
    url: "https://quadratics.learnwithcole.com/",
    icon: "gamepad",
    color: "#0d6efd"
  }
];

const gallery = document.getElementById("gallery");

apps.forEach(app => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="icon" style="background:${app.color}">
      <i data-lucide="${app.icon}"></i>
    </div>
    <h2>${app.title}</h2>
    <p>${app.description}</p>
    <a href="${app.url}" target="_blank" class="launch-btn">Launch</a>
  `;
  gallery.appendChild(card);
});

// Initialize Lucide icons
lucide.createIcons();
