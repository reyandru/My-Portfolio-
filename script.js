const images = document.querySelectorAll('.images');
let imgIndex = 0;

function updateSlide() {
  images.forEach(img => img.classList.remove('active'));
  imgIndex = (imgIndex + 1) % images.length;
  images[imgIndex].classList.add('active');
}
setInterval(updateSlide, 1000);

const textList = ["I am Web Developer", "HTML", "CSS", "JavaScript", "React JS", "Node JS"];
const typings = document.getElementById('typed-text');
let textIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const current = textList[textIndex];
  typings.textContent = current.substring(0, isDeleting ? charIndex-- : charIndex++);

  if (!isDeleting && charIndex > current.length) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textList.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 100 : 150);
  }
}
document.addEventListener('DOMContentLoaded', type);

const wrapper = document.getElementById('settingsWrapper');
const toggle = document.getElementById('settingsToggle');
const themeBtn = document.getElementById('themeBtn');
const sidebar = document.querySelector('.sidebar');
const icon = document.getElementById('icon');
const texts = document.querySelectorAll('.nav-text');
const textHome = document.querySelector('.text');
const nameHome = document.querySelector('.name');
const name2Home = document.querySelector('.name2');
const aboutMsg = document.querySelector('.about_msg');
const body = document.body;
const border = document.querySelector('.image-conts');
const track = document.querySelector('.image-track');

const savedTheme = localStorage.getItem('theme');
savedTheme === 'dark' ? applyDarkTheme() : applyLightTheme();

themeBtn.addEventListener('click', () => {
  const isDark = sidebar.classList.contains('dark');
  isDark ? applyLightTheme() : applyDarkTheme();
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

toggle.addEventListener('click', e => {
  e.stopPropagation();
  wrapper.classList.toggle('show');
});

wrapper.addEventListener('click', e => e.stopPropagation());
document.addEventListener('click', () => wrapper.classList.remove('show'));

function applyDarkTheme() {
  sidebar.classList.add('dark');
  icon.innerHTML = `<img src="../assets/lightmode.png" alt="lightmode" height="30"/>`;
  themeBtn.style.backgroundColor = "#0E0D0D";
  themeBtn.style.color = "white";
  texts.forEach(txt => txt.style.color = "white");
  textHome.style.color = "white";
  nameHome.style.color = "orange";
  name2Home.style.color = "white";
  body.style.backgroundColor = "#363131";
  typings.style.color = "orange";
  aboutMsg.style.color = "white";
  border.classList.add('dark');
  track.style.backgroundColor = 'white';
}

function applyLightTheme() {
  sidebar.classList.remove('dark');
  icon.innerHTML = `<img src="../assets/darkmode.png" alt="darkmode" height="30"/>`;
  themeBtn.style.backgroundColor = "#fcf9f9";
  themeBtn.style.color = "black";
  texts.forEach(txt => txt.style.color = "black");
  body.style.backgroundColor = "white";
  textHome.style.color = "black";
  nameHome.style.color = "green";
  name2Home.style.color = "black";
  typings.style.color = "green";
  aboutMsg.style.color = "black";
  border.classList.remove('dark');
}
