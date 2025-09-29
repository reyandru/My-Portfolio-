const meterFills = document.querySelectorAll('.meter-fill');
const seeMore = document.getElementById('seeMore');
const programmingStats = document.getElementById('progStat');
const skillSet = document.getElementById('skillSet');
const skillTtl = document.querySelector('.skll-ttl');
const progTtl = document.querySelectorAll('.prog-ttl');
const progs = document.querySelectorAll('.programmings');
const designTtl = document.querySelector('.design-tools');
const tools = document.querySelector('.prog-tools');



meterFills.forEach(meter => {
  const width = meter.style.width;
  const percentage = parseInt(width);

  if (percentage >= 90) {
    meter.style.backgroundColor = "green";
  } else if (percentage >= 80) {
    meter.style.backgroundColor = "orange";
  } else if (percentage >= 60) {
    meter.style.backgroundColor = "rgb(218, 218, 8)";
  } else {
    meter.style.backgroundColor = "red";
  }
});


seeMore.addEventListener('click', () => {
  programmingStats.classList.add('active');
  skillSet.style.display = "none";
});


function applyThemes(isDark) {
  const color = isDark ? 'white' : 'black';
  const border = isDark ? '7px solid white' : '7px solid black';

  skillTtl.style.color = color;
  designTtl.style.color = color;
  skillTtl.style.border = border;
  tools.style.color = color;
  progTtl.forEach(prog => {
    prog.style.color = color;
  });
  progs.forEach(progs => {
    progs.style.color = color;
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