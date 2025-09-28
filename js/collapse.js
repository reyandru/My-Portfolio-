const logoBtn = document.getElementById('logo');
const sidebarCol = document.querySelector('.sidebar');
const navText = document.querySelectorAll('.nav-text');
const navs = document.querySelector('.navs');
const settingsWrapper = document.getElementById('settingsWrapper');

logoBtn.addEventListener('click', () => {
  const isCollapsed = sidebarCol.classList.toggle('collapse');

  logoBtn.style.height = isCollapsed ? "80px" : "150px";
  navs.style.marginTop = isCollapsed ? "2rem" : "0";

  navText.forEach(text => {
    text.style.display = isCollapsed ? "none" : "block";
  });

  if (settingsWrapper.classList.contains('show')) {
    settingsWrapper.style.width = isCollapsed ? '10rem' : '100%';
    settingsWrapper.style.top = isCollapsed ? '0' : '3.4rem';
    settingsWrapper.style.left = isCollapsed ? '100%' : '0';
  }
});
