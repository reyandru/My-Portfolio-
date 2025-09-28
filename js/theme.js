const wrappers = document.getElementById('settingsWrapper');
const toggles = document.getElementById('settingsToggle');
const themeBtn = document.getElementById('themeBtn');
const sidebars = document.querySelector('.sidebar');
const icon = document.getElementById('icon');
const texts = document.querySelectorAll('.nav-text');
const hover = document.querySelectorAll('.hover');
const body = document.body;




const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  applyDarkTheme();
} else {
  applyLightTheme();
}

themeBtn.addEventListener('click', () => {
  if (sidebars.classList.contains('dark')) {
    applyLightTheme();
    localStorage.setItem('theme', 'light');
  } else {
    applyDarkTheme();
    localStorage.setItem('theme', 'dark');
  }
});

toggles.addEventListener('click', (e) => {
  e.stopPropagation();
  wrappers.classList.toggle('show');
});

wrappers.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', () => {
  wrappers.classList.remove('show');
});

function applyDarkTheme() {
  sidebars.classList.add('dark');
  icon.innerHTML = `<img src="../assets/lightmode.png" alt="lightmode" height="30"/>`;
  body.style.backgroundColor = "#363131";
  themeBtn.style.backgroundColor = "black";
  themeBtn.style.color = "white";
   texts.forEach(txt => {
    txt.style.color = "white";
  });
}

function applyLightTheme() {
  sidebars.classList.remove('dark');
  icon.innerHTML = `<img src="../assets/darkmode.png" alt="darkmode" height="30"/>`;
  body.style.backgroundColor = "white";
  themeBtn.style.backgroundColor = "white";
  themeBtn.style.color = "black";
  texts.forEach(txt => {
    txt.style.color = "black";
  });
}
