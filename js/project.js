const gallery = document.getElementById('projectsGallery');
const projTtl = document.querySelector('.prjct-ttl');
const projects = [
  {
    name: "Blog website",
    picture: "../assets/blog.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
  {
    name: "Ecommerce Website",
    picture: "../assets/ecom.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
  {
    name: "3-column preview card component",
    picture: "../assets/FE3.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
  {
    name: "Rock, Paper and Scissor game",
    picture: "../assets/RPS.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
  {
    name: "Product preview card component",
    picture: "../assets/perfume.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
  {
    name: "Huddle landing page with alternating feature blocks",
    picture: "../assets/landing.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
  {
    name: "Recipe page",
    picture: "../assets/recipe.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
  {
    name: "Stats preview card component",
    picture: "../assets/insight.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
  {
    name: "Four card feature section",
    picture: "../assets/fourcard.png",
    src: "https://github.com/reyandru?tab=repositories"
  },
];

function renderProjects() {
  gallery.innerHTML = '';

  projects.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('projects');

    div.innerHTML = `
      <a href="${project.src}" class="link-proj" target="_blank" rel="noopener noreferrer">
        <img src="${project.picture}" class="proj-pic" alt="${project.name}">
        <span class="proj-name">${project.name}</span>
      </a>
    `;

    gallery.appendChild(div);
  });
}

renderProjects();

function applyThemes(isDark) {
  const color = isDark ? 'white' : 'black';
  const border = isDark ? '7px solid white' : '7px solid black';

  projTtl.style.color = color;
  projTtl.style.border = border;
  gallery.style.border = border;
  document.querySelectorAll('.proj-name').forEach(names=> {
    names.style.color = color;
  });
}

function initThemes() {
  const savedTheme = localStorage.getItem('theme');
  applyThemes(savedTheme === 'dark');
}

initThemes();

window.addEventListener('themeChange', () => {
  const isDark = localStorage.getItem('theme') === 'dark';
  applyThemes(isDark);
});