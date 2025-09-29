const contactTtl = document.querySelector('.cntct-ttl');
const phoneNumber = document.querySelector('.phoneNo');

function applyThemes(isDark) {
  const color = isDark ? 'white' : 'black';
  const color2 = isDark ? 'orange' : 'black';
  const border = isDark ? '7px solid white' : '7px solid black';

  contactTtl.style.color = color;
  contactTtl.style.border = border;

  document.querySelectorAll('.contact-name').forEach(names => {
    names.style.color = color2;
  });

  document.querySelectorAll('.contact-info').forEach(infos => {
    infos.style.color = color;
  });

  document.querySelectorAll('.contact-msg').forEach(msg => {
    msg.style.color = color;
  });
}

function setPhoneIcon(isDark) {
  phoneNumber.innerHTML = isDark
    ? '<img src="../assets/phone.png" alt="lightmode" height="70"/>'
    : '<img src="../assets/phone-dark.png" alt="darkmode" height="70"/>';
}

function initThemes() {
  const isDark = localStorage.getItem('theme') === 'dark';
  setPhoneIcon(isDark);
  applyThemes(isDark);
}

initThemes();

window.addEventListener('themeChange', () => {
  const isDark = localStorage.getItem('theme') === 'dark';
  setPhoneIcon(isDark);
  applyThemes(isDark);
});
