const birthYearElem = document.getElementById('year');
const ageNowElem = document.getElementById('ageNow');
const abtTitle = document.querySelector('.about-title');
const abtInfo = document.querySelector('.aboutInfo');
const picture = document.querySelector('.picture');
const aboutDesc = document.querySelector('.descriptions');

const BIRTH_YEAR = 2003;
const BIRTH_MONTH = 7;
const BIRTH_DAY = 19;

function computeAge() {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_YEAR;

  if (
    today.getMonth() < BIRTH_MONTH ||
    (today.getMonth() === BIRTH_MONTH && today.getDate() < BIRTH_DAY)
  ) {
    age--;
  }

  ageNowElem.textContent = age;
  birthYearElem.textContent = BIRTH_YEAR;
}

function applyTheme(isDark) {
  const color = isDark ? 'white' : 'black';
  const border = isDark ? '7px solid white' : '7px solid black';
  const pictureBorder = isDark ? '1px solid white' : '2px solid black';

  abtTitle.style.color = color;
  abtTitle.style.border = border;
  abtInfo.style.color = color;
  aboutDesc.style.color = color;
  picture.style.border = pictureBorder;
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme === 'dark');
}

computeAge();
initTheme();

window.addEventListener('themeChange', () => {
  const isDark = localStorage.getItem('theme') === 'dark';
  applyTheme(isDark);
});
